// --- Imports ---
import { useState, Fragment } from 'react'
import alanWake1 from '../assets/alanwake1.jpg'
import alanWake2 from '../assets/alanwake2.jpg'
import alanWake3 from '../assets/alanwake3.jpg'
import alanWake4 from '../assets/alanwake4.jpg'
import alanWake5 from '../assets/alanwake5.jpg'
import alanWake6 from '../assets/alanwake6.jpg'
import post1 from '../assets/post1.png'
import post2 from '../assets/post2.png'
import post3 from '../assets/post3.png' 
import '../components/css/Externo.css'

// Lib que puxa as bandeiras dos países
import Flags from 'country-flag-icons/react/3x2'

// --- Dados das atividades (substituir por API futuramente) ---
const ATIVIDADES = [
  { id: 1, titulo: 'Oficina de Cerâmica na Costa Rica', descricao: 'Fizemos uma oficina de Cerâmica na Costa Rica, onde desenvolvemos atividades de artesanato de vasos e outras obras...', imagem: post1, pais: 'CR', tipo: 'Cerâmica' },
  { id: 2, titulo: 'Visitia Rio Silveiras - 2025', descricao: 'Visitamos a aldeia do Rio Silveiras no município de Bettiga, onde participamos de atividades como artesanato, danças e muitos outros...', imagem: post2, pais: 'BR', tipo: 'Artesanato' },
  { id: 3, titulo: 'Trujillo - Costa Norte do Peru', descricao: 'Visita da costa norte do Peru para aquisição de novas peças para o nosso acervo...', imagem: post3, pais: 'PE', tipo: 'Artesanato' },
  { id: 4, titulo: 'Título da atividade', descricao: 'Descrição...', imagem: alanWake4, pais: 'BR', tipo: 'Dança' },
  { id: 5, titulo: 'Título da atividade', descricao: 'Descrição...', imagem: alanWake5, pais: 'BR', tipo: 'Cerâmica' },
  { id: 6, titulo: 'Título da atividade', descricao: 'Descrição...', imagem: alanWake6, pais: 'BR', tipo: 'Artesanato' },
]

const PER_PAGE = 3

// --- Componente de card individual ---
function Card({ titulo, descricao, imagem, pais }) {
  const Flag = Flags[pais] || Flags.BR
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

  const filtered = ATIVIDADES
    .filter(a => {
      const matchBusca = a.titulo.toLowerCase().includes(busca.toLowerCase()) ||
        a.descricao.toLowerCase().includes(busca.toLowerCase())
      const matchTipo = tipo === 'Todos' || a.tipo === tipo
      return matchBusca && matchTipo
    })
    .sort((a, b) => {
      if (ordem === 'A-Z') return a.titulo.localeCompare(b.titulo)
      if (ordem === 'Z-A') return b.titulo.localeCompare(a.titulo)
      if (ordem === 'Mais recente') return b.id - a.id
      return a.id - b.id
    })

  const totalPaginas = Math.ceil(filtered.length / PER_PAGE) || 1
  const slice = filtered.slice((pagina - 1) * PER_PAGE, pagina * PER_PAGE)

  const handleBusca = (e) => { setBusca(e.target.value); setPagina(1) }
  const handleTipo = (e) => { setTipo(e.target.value); setPagina(1) }
  const handleOrdem = (e) => { setOrdem(e.target.value); setPagina(1) }

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