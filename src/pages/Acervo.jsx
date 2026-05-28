import '../components/css/Acervo.css'
import{ useState } from "react";

const etnias = [
  "Todas", "Akroá-Gamela", "Apiaká", "Ashininca", "Asurini","Ayujá", "Baniwa", 
  "Baré", "Bororo", "Desana", "Fulni-ô", "Gavião", "Guajajara", "Kadiwéu", 
  "Kaimbé", "Kaingang", "Kalapalo", "Kamayurá", "Kanela", "Karajá", "Kariri", 
  "Kariri-Xocó", "Katwena", "Kaxuyana", "Kayabi", "Mebêngokré", "Kinikinau", "Krahô", 
  "Kuikuro", "Kuripako", "Mamaindê", "Marubo", "Matis", "Mawayana", "Mehinako", 
  "Munduruku", "Panará", "Pankararu", "Rikbaktsa", "Sateré Mawé", "Suruí", "Tabajara", 
  "Tapayuna", "Tapirapé", "Terena", "Tikuna","Tikyana", "Tremembé", "Trumai", 
  "Tukano", "Tupi-Guarani","Tupinambá", "Waimiri-Atroari", "Waiwai", "Warao", "Waurá", 
  "Wayalapit", "Wayana-Aparai", "Xakriabá", "Xerente", "Yanomami", "Yawalapiti", "Zo’é"
];



function Acervo() {

const [mostrarTodas, setMostrarTodas] = useState(false);
const [etniaAtiva, setEtniaAtiva] = useState("Todas");
const [mostrarFiltros, setMostrarFiltros] = useState(false);

  return (
    <div className='container'>
      <h1 className='pageTitle'>Acervo de obras</h1>

      <section className='filter-container'>
        <div className='search'>
          <input type='text' placeholder='Pesquisar' />
          <button className='search-button'>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M10 2a8 8 0 105.293 14.293l4.707 4.707 1.414-1.414-4.707-4.707A8 8 0 0010 2z"
              stroke="currentColor"
              strokeWidth="2"/>
            </svg>
          </button>
        </div>

        { /* botao de filtros mobile */}
        <button 
          className='mobile-filter-btn'
          type='button'
          onClick={() => setMostrarFiltros(!mostrarFiltros)}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="4" y1="21" x2="4" y2="14"></line>
            <line x1="4" y1="10" x2="4" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12" y2="3"></line>
            <line x1="20" y1="21" x2="20" y2="16"></line>
            <line x1="20" y1="12" x2="20" y2="3"></line>
            <line x1="1" y1="14" x2="7" y2="14"></line>
            <line x1="9" y1="8" x2="15" y2="8"></line>
            <line x1="17" y1="16" x2="23" y2="16"></line>
          </svg>
        </button>

        <div className={`filter-group ${mostrarFiltros ? "aberto" : ""}`}>
          <div className='type-container'>
            <span>Tipo de obra:</span>
            <select>
              <option>Todas</option>
              <option>Cerâmica</option>
              <option>Pintura</option>
              <option>Artesanato</option>
            </select>
          </div>

          <div className="order-container">
            <span>Ordenar:</span>
              <select>
                <option>Relevância</option>
                <option>Mais recentes</option>
                <option>Mais antigos</option>
                <option>Nome A–Z</option>
                <option>Nome Z-A</option>
              </select>
          </div>
        </div>     
      </section>


      <section className='etnias'>
        <h2>Explore por etnias</h2>

        <div className={`etnias-list ${mostrarTodas ? "expandido" : ""}`}>
          {etnias.map((etnia) => (
            <button 
              key={etnia}
              className={`button ${etniaAtiva === etnia ? "ativo" : ""}`}
              onClick={() => setEtniaAtiva(etnia)}>
              {etnia}
            </button>
          ))}
        </div> 

        <button
          className="toggle-btn"
          onClick={() => setMostrarTodas(!mostrarTodas)}>
          {mostrarTodas ? "Mostrar menos" : "Mostrar todas"}
        <svg
          className={`arrow ${mostrarTodas ? "up" : ""}`}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none">
          <path
            d="M6 9l6 6 6-6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"/>
        </svg>
        </button>              
      </section>

    </div>
    
  )
}

export default Acervo
