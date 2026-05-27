import '../components/css/Acervo.css'
import{ useState } from "react";

const etnias = [
  "Todas",
  "Akroá-Gamela",
  "Apiaká",
  "Ashininca",
  "Asurini",
  "Ayujá",
  "Baniwa",
  "Baré",
  "Bororo",
  "Desana",
  "Fulni-ô",
  "Gavião",
  "Guajajara",
  "Kadiwéu",
  "Kaimbé",
  "Kaingang",
  "Kalapalo",
  "Kamayurá",
  "Kanela",
  "Karajá",
  "Kariri",
  "Kariri-Xocó",
  "Katwena",
  "Kaxuyana",
  "Kayabi",
  "Mebêngokré",
  "Kinikinau",
  "Krahô",
  "Kuikuro",
  "Kuripako",
  "Mamaindê",
  "Marubo",
  "Matis",
  "Mawayana",
  "Mehinako",
  "Munduruku",
  "Panará",
  "Pankararu",
  "Rikbaktsa",
  "Sateré Mawé",
  "Suruí",
  "Tabajara",
  "Tapayuna",
  "Tapirapé",
  "Terena",
  "Tikuna",
  "Tikyana",
  "Tremembé",
  "Trumai",
  "Tukano",
  "Tupi-Guarani",
  "Tupinambá",
  "Waimiri-Atroari",
  "Waiwai",
  "Warao",
  "Waurá",
  "Wayalapit",
  "Wayana-Aparai",
  "Xakriabá",
  "Xerente",
  "Yanomami",
  "Yawalapiti",
  "Zo’é"
];



function Acervo() {

const [mostrarTodas, setMostrarTodas] = useState(false);
const [etniaAtiva, setEtniaAtiva] = useState("Todas");

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
              stroke-width="2"/>
            </svg>
          </button>
        </div>

        <div className='filter'>
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
