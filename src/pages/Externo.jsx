// --- Imports ---
import { useState, Fragment } from 'react'
import alanWake1 from '../assets/alanwake1.jpg'
import alanWake2 from '../assets/alanwake2.jpg'
import alanWake3 from '../assets/alanwake3.jpg'
import alanWake4 from '../assets/alanwake4.jpg'
import alanWake5 from '../assets/alanwake5.jpg'
import alanWake6 from '../assets/alanwake6.jpg'
import './css/Externo.css'

// --- Bandeiras por país ---
const BR_FLAG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 14">
    <rect width="20" height="14" fill="#009C3B"/>
    <polygon points="10,1 19,7 10,13 1,7" fill="#FFDF00"/>
    <circle cx="10" cy="7" r="2.8" fill="#002776"/>
  </svg>
)

const PE_FLAG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 14">
    <rect width="7" height="14" fill="#D91023"/>
    <rect x="7" width="6" height="14" fill="#fff"/>
    <rect x="13" width="7" height="14" fill="#D91023"/>
  </svg>
)

const CR_FLAG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 14">
    <rect width="20" height="14" fill="#002B7F"/>
    <rect y="3.5" width="20" height="7" fill="#CE1126"/>
    <rect y="4.5" width="20" height="5" fill="#fff"/>
  </svg>
)

const FLAGS = { br: BR_FLAG, pe: PE_FLAG, cr: CR_FLAG }

// --- Dados das atividades (substituir por API futuramente) ---
const ATIVIDADES = [
  { id: 1, titulo: 'Oficina de Cerâmica na Costa Rica', descricao: 'Fizemos uma oficina de Cerâmica na Costa Rica, onde desenvolvemos atividades de artesanato de vasos e outras obras...', imagem: alanWake1, pais: 'cr', tipo: 'Cerâmica' },
  { id: 2, titulo: 'Visitia Rio Silveiras - 2025', descricao: 'Visitamos a aldeia do Rio Silveiras no município de Bettiga, onde participamos de atividades como artesanato, danças e muitos outros...', imagem: alanWake2, pais: 'br', tipo: 'Artesanato' },
  { id: 3, titulo: 'Trujillo - Costa Norte do Peru', descricao: 'Visita da costa norte do Peru para aquisição de novas peças para o nosso acervo...', imagem: alanWake3, pais: 'pe', tipo: 'Artesanato' },
  { id: 4, titulo: 'Título da atividade', descricao: 'Descrição...', imagem: alanWake4, pais: 'br', tipo: 'Dança' },
  { id: 5, titulo: 'Título da atividade', descricao: 'Descrição...', imagem: alanWake5, pais: 'br', tipo: 'Cerâmica' },
  { id: 6, titulo: 'Título da atividade', descricao: 'Descrição...', imagem: alanWake6, pais: 'br', tipo: 'Artesanato' },
]

const PER_PAGE = 6

// --- Componente de card individual ---
function Card({ titulo, descricao, imagem, pais }) {
  const Flag = FLAGS[pais] || BR_FLAG
  return (
    <div className="ext-card">
      <div className="ext-card-img">
        {imagem
          ? <img src={imagem} alt={titulo} />
          : <div className="ext-card-placeholder" />
        }
        <div className="ext-card-flag"><Flag /></div>
      </div>
      <div className="ext-card-body">
        <h2 className="ext-card-titulo">{titulo}</h2>
        <p>{descricao}</p>
      </div>
    </div>
  )
}

// --- Página principal ---
function Externo() {
  const [busca, setBusca] = useState('')
  const [tipo, setTipo] = useState('Todos')
  const [ordem, setOrdem] = useState('Mais popular')
  const [pagina, setPagina] = useState(1)

  // Filtragem por busca e tipo
  const filtered = ATIVIDADES
    .filter(a => {
      const matchBusca = a.titulo.toLowerCase().includes(busca.toLowerCase()) ||
        a.descricao.toLowerCase().includes(busca.toLowerCase())
      const matchTipo = tipo === 'Todos' || a.tipo === tipo
      return matchBusca && matchTipo
    })
    // Ordenação
    .sort((a, b) => {
      if (ordem === 'A-Z') return a.titulo.localeCompare(b.titulo)
      if (ordem === 'Z-A') return b.titulo.localeCompare(a.titulo)
      if (ordem === 'Mais recente') return b.id - a.id
      return a.id - b.id // Mais popular: ordem original
    })

  // Paginação
  const totalPaginas = Math.ceil(filtered.length / PER_PAGE) || 1
  const slice = filtered.slice((pagina - 1) * PER_PAGE, pagina * PER_PAGE)

  const handleBusca = (e) => { setBusca(e.target.value); setPagina(1) }
  const handleTipo = (e) => { setTipo(e.target.value); setPagina(1) }
  const handleOrdem = (e) => { setOrdem(e.target.value); setPagina(1) }

  // Números de página exibidos
  const pageNumbers = []
  for (let i = 1; i <= totalPaginas; i++) pageNumbers.push(i)
  const shownPages = pageNumbers.filter(p =>
    p === 1 || p === totalPaginas || Math.abs(p - pagina) <= 1
  )

  return (
    <div className="externo-page">
      <h1>Atividades Externas</h1>

      {/* Filtros */}
      <div className="externo-filters">
        <div className="externo-search-wrap">
          <input
            type="text"
            placeholder="Buscar atividade..."
            value={busca}
            onChange={handleBusca}
          />
          <span className="externo-search-icon">&#128269;</span>
        </div>
        <div className="externo-filter-group">
          <label>Tipo de obra:</label>
          <select value={tipo} onChange={handleTipo}>
            <option>Todos</option>
            <option>Cerâmica</option>
            <option>Artesanato</option>
            <option>Dança</option>
          </select>
        </div>
        <div className="externo-filter-group">
          <label>Ordenar:</label>
          <select value={ordem} onChange={handleOrdem}>
            <option>Mais popular</option>
            <option>Mais recente</option>
            <option>A-Z</option>
            <option>Z-A</option>
          </select>
        </div>
      </div>

      {/* Grid de cards */}
      <div className="externo-grid">
        {slice.map(a => (
          <Card key={a.id} {...a} />
        ))}
      </div>

      {/* Paginação */}
      <div className="externo-pagination">
        <button onClick={() => setPagina(p => Math.max(p - 1, 1))} disabled={pagina === 1}>
          ← Anterior
        </button>
        {shownPages.map((p, i) => {
          const prev = shownPages[i - 1]
          return (
            <Fragment key={p}>
              {prev && p - prev > 1 && <span className="externo-dots">…</span>}
              <button
                className={pagina === p ? 'active' : ''}
                onClick={() => setPagina(p)}
              >
                {p}
              </button>
            </Fragment>
          )
        })}
        <button onClick={() => setPagina(p => Math.min(p + 1, totalPaginas))} disabled={pagina === totalPaginas}>
          Próximo →
        </button>
      </div>
    </div>
  )
}

export default Externo
