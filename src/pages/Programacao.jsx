import React, { useState, useEffect } from "react";
import "./css/Programacao.css"; // Certifique-se de que o nome do seu arquivo CSS está correto aqui

// --- DADOS MOCKADOS (No futuro, virão do Banco de Dados / Node.js) ---

// 1. O Novo Evento Sazonal que o Admin vai editar
const MOCK_EVENTO_SAZONAL = {
  id: 99,
  imagem: './public/inverno.jpg', // A foto da estação (salve uma imagem na pasta public/imagens)
  titulo: 'Festival de Inverno Hartãt',
  descricao: 'Com a chegada da nova estação, o espaço Hartãt promove rodas de conversa ao redor da fogueira, apresentações culturais e uma exposição especial focada nos rituais de colheita dos povos originários. Venha se aquecer e aprender conosco.',
  dataHorario: 'TODA A ESTAÇÃO - 18:00 às 22:00',
  classificacaoIdade: 'L',
  classificacaoTexto: 'Livre para todos os públicos'
};

const EVENTOS_CALENDARIO = [
  { id: 1, data: '2026-05-27', titulo: 'Exposição de Obras', horario: '12:00 às 14:00', corBorda: '#c8372b', icone: '🖼️' },
  { id: 2, data: '2026-05-27', titulo: 'Cine Hartãt - Mundurukuyu', horario: '19:00 às 23:00', corBorda: '#eeba42', icone: '🎥' },
  { id: 3, data: '2026-06-02', titulo: 'Oficina de Cestaria', horario: '14:00 às 16:00', corBorda: '#4a3424', icone: '🧺' },
];

const DADOS_DESTAQUES = [
  {
    id: 1,
    imagem: './public/Exposicao_Obras.JPG', // Substitua pelos seus imports
    titulo: 'Exposição de obras',
    descricao: 'O Espaço Hartãt conta com um acervo indígena privado com mais de duas mil peças de 60 etnias brasileiras e outras culturas da América Latina, como Peru, Equador, Costa Rica, Colômbia e México. O acervo inclui tanto obras originais, quanto réplicas criadas por ceramistas com base em estudos arqueológicos das culturas já extintas...',
    dataHorario: 'DATA: 09/03/2026 - 19:00 às 23:00',
    classificacaoIdade: null,
    classificacaoTexto: null
  },
  {
    id: 2,
    imagem: './public/MUNDURUKUYU.jpg', // Substitua pelos seus imports
    titulo: 'Cine Hartãt - Mundurukuyü',
    descricao: 'Nas margens do rio Tapajós, no Pará, a floresta das mulheres-peixe espelha a mitologia Munduruku, na qual humanos, na origem do mundo, se transformaram em floresta, plantas e animais. No dia a dia da aldeia Sawre Muybu, os espíritos da floresta não são apenas forças espirituais ancestrais, mas parte da família que, apesar de muitos anos de invasão e de destruição do território, continua resistindo e muito viva.',
    dataHorario: 'DATA: 09/03/2026 - 19:00 às 23:00',
    classificacaoIdade: '14',
    classificacaoTexto: 'Não Indicado para menores de 14 anos'
  }
];

export default function PaginaEventos() {
  // --- ESTADOS DA APLICAÇÃO ---
  
  // Estado para armazenar o Evento Sazonal (Inicia vazio e é preenchido logo depois)
  const [eventoSazonal, setEventoSazonal] = useState(null);

  // Lógica do Calendário
  const hoje = new Date();
  const [dataAtual, setDataAtual] = useState(hoje);
  const [diaSelecionado, setDiaSelecionado] = useState(hoje.getDate());

  // --- SIMULAÇÃO DA BUSCA NO BANCO DE DADOS ---
  useEffect(() => {
    // Quando o Node.js estiver pronto, você trocará este setTimeout por um fetch('sua-api.com/sazonal')
    // Por enquanto, simulamos que a internet demorou meio segundo para trazer os dados do Admin
    const buscarDadosDoAdmin = () => {
      setEventoSazonal(MOCK_EVENTO_SAZONAL);
    };
    
    buscarDadosDoAdmin();
  }, []); // O array vazio [] garante que isso só rode 1x quando a página carrega

  // --- CÁLCULOS DO CALENDÁRIO ---
  const ano = dataAtual.getFullYear();
  const mesNumero = dataAtual.getMonth();
  const nomeMes = dataAtual.toLocaleString('pt-BR', { month: 'long' });
  const nomeMesCapitalizado = nomeMes.charAt(0).toUpperCase() + nomeMes.slice(1);
  const totalDiasNoMes = new Date(ano, mesNumero + 1, 0).getDate();
  const diasDoMes = Array.from({ length: totalDiasNoMes }, (_, i) => i + 1);
  const primeiroDiaDaSemana = new Date(ano, mesNumero, 1).getDay();
  const espacosVazios = Array.from({ length: primeiroDiaDaSemana });

  const mesAnterior = () => { setDataAtual(new Date(ano, mesNumero - 1, 1)); setDiaSelecionado(1); };
  const proximoMes = () => { setDataAtual(new Date(ano, mesNumero + 1, 1)); setDiaSelecionado(1); };

  const eventosDoDiaFiltro = EVENTOS_CALENDARIO.filter(evento => {
    const mesFormatado = String(mesNumero + 1).padStart(2, '0');
    const diaFormatado = String(diaSelecionado).padStart(2, '0');
    return evento.data === `${ano}-${mesFormatado}-${diaFormatado}`;
  });

  return (
    <main className="pagina-completa-container">
      
      {/* ========================================================= */}
      {/* 1. SEÇÃO DO EVENTO SAZONAL (DESTAQUE PRINCIPAL EDITÁVEL)  */}
      {/* ========================================================= */}
      <section className="destaques-secao">
        {/* Renderização Condicional: Só mostra o card quando os dados chegarem do "banco de dados" */}
        {eventoSazonal ? (
          <article className="card-detalhe" style={{ border: '2px solid var(--cor-selecionada)' }}>
            <div className="card-imagem-wrapper">
              <img src={eventoSazonal.imagem} alt={eventoSazonal.titulo} className="card-imagem" />
            </div>
            <div className="card-conteudo">
              {/* Uma tag visual para mostrar que é o destaque da estação */}
              <span style={{ color: 'var(--cor-selecionada)', fontWeight: 'bold', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                🌟 Destaque da Estação
              </span>
              <h2 className="card-titulo" style={{ textAlign: 'left', marginTop: '-10px' }}>
                {eventoSazonal.titulo}
              </h2>
              <p className="card-descricao">{eventoSazonal.descricao}</p>
              <p className="card-data-horario">{eventoSazonal.dataHorario}</p>
              
              {eventoSazonal.classificacaoIdade && (
                <div className="card-classificacao">
                  <span className="badge-idade" style={{ backgroundColor: eventoSazonal.classificacaoIdade === 'L' ? '#22c55e' : 'var(--cor-classificacao)'}}>
                    {eventoSazonal.classificacaoIdade}
                  </span>
                  <span className="texto-classificacao">{eventoSazonal.classificacaoTexto}</span>
                </div>
              )}
            </div>
          </article>
        ) : (
          <p>Carregando destaque da estação...</p> // Feedback visual enquanto os dados do admin não chegam
        )}
      </section>
      {/* ========================================================= */}
      {/* SEÇÃO SUPERIOR: CALENDÁRIO INTERATIVO                     */}
      {/* ========================================================= */}
      <section className="calendario-secao">
        {/* Lado Esquerdo do Calendário */}
        <div className="calendario-wrapper">
          <div className="calendario-header">
            <button onClick={mesAnterior} className="calendario-header-btn">
              &lt;
            </button>
            <div className="calendario-badges">
              <span className="badge">{nomeMesCapitalizado}</span>
              <span className="badge">{ano}</span>
            </div>
            <button onClick={proximoMes} className="calendario-header-btn">
              &gt;
            </button>
          </div>

          <div className="dias-semana">
            <span>Su</span>
            <span>Mo</span>
            <span>Tu</span>
            <span>We</span>
            <span>Th</span>
            <span>Fr</span>
            <span>Sa</span>
          </div>

          <div className="grid-dias">
            {espacosVazios.map((_, index) => (
              <div key={`empty-${index}`}></div>
            ))}

            {diasDoMes.map((dia) => {
              // 1. Formata a data do dia que está sendo desenhado para o formato 'YYYY-MM-DD'
              const mesFormatadoLoop = String(mesNumero + 1).padStart(2, "0");
              const diaFormatadoLoop = String(dia).padStart(2, "0");
              const dataStringLoop = `${ano}-${mesFormatadoLoop}-${diaFormatadoLoop}`;

              // 2. Verifica as condições para este dia
              const isHojeNoMundoReal =
                dia === hoje.getDate() &&
                mesNumero === hoje.getMonth() &&
                ano === hoje.getFullYear();
              const isSelecionado = dia === diaSelecionado;

              // 3. Checa se o dia atual do loop possui algum evento na nossa lista
              const temEvento = EVENTOS_CALENDARIO.some(
                (evento) => evento.data === dataStringLoop,
              );

              // 4. Constrói as classes CSS dinamicamente com base nas verificações acima
              let classes = "dia-btn ";
              if (isSelecionado) {
                classes += "dia-selecionado"; // Selecionado tem prioridade total
              } else {
                // Se não estiver selecionado, verifica se tem evento ou se é hoje
                if (temEvento) classes += "dia-com-evento ";
                if (isHojeNoMundoReal) classes += "dia-atual ";
              }

              return (
                <button
                  key={dia}
                  onClick={() => setDiaSelecionado(dia)}
                  className={classes}
                >
                  {dia}
                </button>
              );
            })}
          </div>
        </div>

        {/* Lado Direito do Calendário (Lista de Eventos) */}
        <div className="eventos-wrapper">
          <h2 className="eventos-titulo">📍 Eventos do Dia</h2>
          <div className="lista-eventos">
            {eventosDoDiaFiltro.length > 0 ? (
              eventosDoDiaFiltro.map((evento) => (
                <div key={evento.id} className="evento-card-mini">
                  <div
                    className="evento-faixa"
                    style={{ backgroundColor: evento.corBorda }}
                  ></div>
                  <div className="evento-data-box">
                    <span className="evento-dia">{diaSelecionado}</span>
                    <span className="evento-mes">
                      {nomeMesCapitalizado.substring(0, 3)}
                    </span>
                    <span className="evento-icone">{evento.icone}</span>
                  </div>
                  <div className="evento-info">
                    <h3>{evento.titulo}</h3>
                    <p>Horário: {evento.horario}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="sem-eventos">
                Não há eventos programados para este dia.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SEÇÃO INFERIOR: CARDS DE DESTAQUE COM IMAGEM              */}
      {/* ========================================================= */}
      <section className="destaques-secao">
        {DADOS_DESTAQUES.map((evento) => (
          <article key={evento.id} className="card-detalhe">
            <div className="card-imagem-wrapper">
              <img
                src={evento.imagem}
                alt={`Capa do evento ${evento.titulo}`}
                className="card-imagem"
              />
            </div>
            <div className="card-conteudo">
              <h2 className="card-titulo">{evento.titulo}</h2>
              <p className="card-descricao">{evento.descricao}</p>
              <p className="card-data-horario">{evento.dataHorario}</p>

              {evento.classificacaoIdade && (
                <div className="card-classificacao">
                  <span className="badge-idade">
                    {evento.classificacaoIdade}
                  </span>
                  <span className="texto-classificacao">
                    {evento.classificacaoTexto}
                  </span>
                </div>
              )}
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
