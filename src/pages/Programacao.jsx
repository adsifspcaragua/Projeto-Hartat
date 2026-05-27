import React, { useState } from 'react';
import './css/Programacao.css';

import imgExposicao from '../assets/exposicao.jpg';
import imgCine from '../assets/cine.png';

// --- DADOS MOCKADOS: CARDS DE DESTAQUE NO TOPO ---
const DADOS_DESTAQUES = [
    {
        id: 1,
        imagem: imgExposicao, // Substitua pelos seus imports
        titulo: 'Exposição de obras',
        descricao: 'O Espaço Hartãt conta com um acervo indígena privado com mais de duas mil peças de 60 etnias brasileiras e outras culturas da América Latina, como Peru, Equador, Costa Rica, Colômbia e México. O acervo inclui tanto obras originais, quanto réplicas criadas por ceramistas com base em estudos arqueológicos das culturas já extintas...',
        dataHorario: 'DATA: 09/03/2026 - 19:00 às 23:00',
        classificacaoIdade: null,
        classificacaoTexto: null
    },
    {
        id: 2,
        imagem: imgCine, // Substitua pelos seus imports
        titulo: 'Cine Hartãt - Mundurukuyü',
        descricao: 'Nas margens do rio Tapajós, no Pará, a floresta das mulheres-peixe espelha a mitologia Munduruku, na qual humanos, na origem do mundo, se transformaram em floresta, plantas e animais. No dia a dia da aldeia Sawre Muybu, os espíritos da floresta não são apenas forças espirituais ancestrais, mas parte da família que, apesar de muitos anos de invasão e de destruição do território, continua resistindo e muito viva.',
        dataHorario: 'DATA: 09/03/2026 - 19:00 às 23:00',
        classificacaoIdade: '14',
        classificacaoTexto: 'Não Indicado para menores de 14 anos'
    }
];

// --- DADOS MOCKADOS: EVENTOS DO CALENDÁRIO ---
const EVENTOS_CALENDARIO = [
    { id: 1, data: '2026-05-27', titulo: 'Exposição de Obras', horario: '12:00 às 14:00', corBorda: '#c8372b', icone: '🖼️' },
    { id: 2, data: '2026-05-27', titulo: 'Cine Hartãt - Mundurukuyu', horario: '19:00 às 23:00', corBorda: '#eeba42', icone: '🎥' },
    { id: 3, data: '2026-06-02', titulo: 'Oficina de Cestaria', horario: '14:00 às 16:00', corBorda: '#4a3424', icone: '🧺' },
];

 function Programacao() {
    // Lógica do Calendário 
    const hoje = new Date();
    const [dataAtual, setDataAtual] = useState(hoje);
    const [diaSelecionado, setDiaSelecionado] = useState(hoje.getDate());

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
        <>
        <main className="pagina-completa-container">
            {/* ========================================================= */}
            {/* SEÇÃO SUPERIOR: CALENDÁRIO INTERATIVO                     */}
            {/* ========================================================= */}
            <section className="calendario-secao">

                {/* Lado Esquerdo do Calendário */}
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
                        {espacosVazios.map((_, index) => <div key={`empty-${index}`}></div>)}

                        {diasDoMes.map(dia => {
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

                {/* Lado Direito do Calendário (Lista de Eventos) */}
                <div className="eventos-wrapper">
                    <h2 className="eventos-titulo">📍 Eventos do Dia</h2>
                    <div className="lista-eventos">
                        {eventosDoDiaFiltro.length > 0 ? (
                            eventosDoDiaFiltro.map(evento => (
                                <div key={evento.id} className="evento-card-mini">
                                    <div className="evento-faixa" style={{ backgroundColor: evento.corBorda }}></div>
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

            </section>

            {/* ========================================================= */}
            {/* SEÇÃO INFERIOR: CARDS DE DESTAQUE                         */}
            {/* ========================================================= */}
            <section className="destaques-secao">
                {DADOS_DESTAQUES.map((evento) => (
                    <article key={evento.id} className="card-detalhe">
                        <div className="card-imagem-wrapper">
                            <img src={evento.imagem} alt={evento.titulo} className="card-imagem" />
                        </div>
                        <div className="card-conteudo">
                            <h2 className="card-titulo">{evento.titulo}</h2>
                            <p className="card-descricao">{evento.descricao}</p>
                            <p className="card-data-horario">{evento.dataHorario}</p>

                            {evento.classificacaoIdade && (
                                <div className="card-classificacao">
                                    <span className="badge-idade">{evento.classificacaoIdade}</span>
                                    <span className="texto-classificacao">{evento.classificacaoTexto}</span>
                                </div>
                            )}
                        </div>
                    </article>
                ))}
            </section>
        </main>
        </>   
    );
}

export default Programacao;