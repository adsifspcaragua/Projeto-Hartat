import React, { useState } from 'react';
import './css/Programacao.css'; // Importando o CSS puro

// Simulando banco de dados com datas reais (formato YYYY-MM-DD para facilitar a comparação)
const EVENTOS = [
  { 
    id: 1, 
    data: '2026-05-27', // Exemplo: Hoje
    titulo: 'Exposição de Obras', 
    horario: '12:00 às 14:00', 
    corBorda: '#c8372b', 
    icone: '🖼️' 
  },
  { 
    id: 2, 
    data: '2026-05-27', 
    titulo: 'Cine Hartãt - Mundurukuyu', 
    horario: '19:00 às 23:00', 
    corBorda: '#eeba42', 
    icone: '🎥' 
  },
  { 
    id: 3, 
    data: '2026-06-02', // Exemplo: Próximo mês
    titulo: 'Oficina de Cestaria', 
    horario: '14:00 às 16:00', 
    corBorda: '#4a3424', 
    icone: '🧺' 
  },
];

export default function CalendarioDeEventos() {
  // 1. Pegamos a data atual do sistema do usuário
  const hoje = new Date();

  // Guardamos o objeto de data inteiro no estado para poder navegar entre os meses depois
  const [dataAtual, setDataAtual] = useState(hoje);
  // Guardamos o dia selecionado (inicializa com o dia de hoje, ex: 27)
  const [diaSelecionado, setDiaSelecionado] = useState(hoje.getDate());

  const ano = dataAtual.getFullYear();
  const mesNumero = dataAtual.getMonth(); // 0 = Janeiro, 1 = Fevereiro, etc.

  // 2. Transforma o número do mês no nome em português usando a API nativa do navegador
  const nomeMes = dataAtual.toLocaleString('pt-BR', { month: 'long' });
  // Capitaliza a primeira letra do mês (ex: "maio" vira "Maio")
  const nomeMesCapitalizado = nomeMes.charAt(0).toUpperCase() + nomeMes.slice(1);

  // 3. Truque do JavaScript para descobrir quantos dias tem o mês atual
  // Passando o dia "0" do mês seguinte, o JS retorna o último dia do mês atual (28, 29, 30 ou 31)
  const totalDiasNoMes = new Date(ano, mesNumero + 1, 0).getDate();
  const diasDoMes = Array.from({ length: totalDiasNoMes }, (_, i) => i + 1);

  // 4. Descobre em qual dia da semana o mês começou (para alinhar o dia 1 na coluna certa)
  const primeiroDiaDaSemana = new Date(ano, mesNumero, 1).getDay();
  const espacosVazios = Array.from({ length: primeiroDiaDaSemana });

  // Funções para avançar e voltar os meses nas setinhas
  const mesAnterior = () => {
    setDataAtual(new Date(ano, mesNumero - 1, 1));
    setDiaSelecionado(1); // Reseta a seleção para o dia 1 do mês anterior
  };

  const proximoMes = () => {
    setDataAtual(new Date(ano, mesNumero + 1, 1));
    setDiaSelecionado(1); // Reseta a seleção para o dia 1 do próximo mês
  };

  // 5. Filtramos os eventos buscando a string da data formatada como 'YYYY-MM-DD'
  const eventosDoDia = EVENTOS.filter(evento => {
    const mesFormatado = String(mesNumero + 1).padStart(2, '0');
    const diaFormatado = String(diaSelecionado).padStart(2, '0');
    const dataStringFiltro = `${ano}-${mesFormatado}-${diaFormatado}`;
    
    return evento.data === dataStringFiltro;
  });

  return (
    <div className="app-container">
      
      {/* ================= LADO ESQUERDO: CALENDÁRIO ================= */}
      <div className="calendario-wrapper">
        <div className="calendario-header">
          <button onClick={mesAnterior} className="calendario-header-btn">&lt;</button>
          <div className="calendario-badges">
            <span className="badge">{nomeMesCapitalizado}</span>
            <span className="badge">{ano}</span>
          </div>
          <button onClick={proximoMes} className="calendario-header-btn">&gt;</button>
        </div>

        <div className="dias-semana">
          <span>Su</span><span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span>
        </div>

        <div className="grid-dias">
          {/* Injeta os espaços vazios para o dia 1 começar no dia da semana correto */}
          {espacosVazios.map((_, index) => (
            <div key={`empty-${index}`}></div>
          ))}
          
          {diasDoMes.map(dia => {
            // Verifica se o dia renderizado é exatamente o dia de HOJE no mundo real para aplicar um estilo visual se quiser
            const isHojeNoMundoReal = dia === hoje.getDate() && mesNumero === hoje.getMonth() && ano === hoje.getFullYear();
            const isSelecionado = dia === diaSelecionado;

            return (
              <button
                key={dia}
                onClick={() => setDiaSelecionado(dia)}
                className={`dia-btn ${isSelecionado ? 'dia-selecionado' : ''} ${isHojeNoMundoReal && !isSelecionado ? 'dia-hoje-destaque' : ''}`}
              >
                {dia}
              </button>
            );
          })}
        </div>
      </div>

      {/* ================= LADO DIREITO: EVENTOS ================= */}
      <div className="eventos-wrapper">
        <h2 className="eventos-titulo">
          📍 Eventos do Dia
        </h2>

        <div className="lista-eventos">
          {eventosDoDia.length > 0 ? (
            eventosDoDia.map(evento => (
              <div key={evento.id} className="evento-card">
                
                <div 
                  className="evento-faixa" 
                  style={{ backgroundColor: evento.corBorda }}
                ></div>

                <div className="evento-data-box">
                  <span className="evento-dia">{diaSelecionado}</span>
                  <span className="evento-mes">{nomeMesCapitalizado.substring(0, 3)}</span>
                  <span className="evento-icone">{evento.icone}</span>
                </div>

                <div className="evento-info">
                  <h3>{evento.titulo}</h3>
                  <p>Horário: {evento.horario}</p>
                </div>

              </div>
            ))
          ) : (
             <p className="sem-eventos">Não há eventos programados para este dia.</p>
          )}
        </div>
      </div>

    </div>
  );
}