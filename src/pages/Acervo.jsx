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

const dadosEtnias = {
  "Akroá-Gamela": {
    imagem: "https://cimi.org.br/wp-content/uploads/2022/12/Povo-Akroa-Gamella-do-Piaui-e-Maranhao-se-reunem-em-encontro-18-a-20-de-novembro-Foto-Cruupyhre-Akroa-Gamella-2-scaled.jpeg",
    resumo: "Os Akroá-Gamela vivem no estado do Maranhão e protagonizam uma histórica luta pela recuperação de suas terras ancestrais. Inseridos em um contexto de forte resistência, mantêm viva sua identidade étnica, suas redes de parentesco e suas formas tradicionais de organização social e articulação política.",
    link: "https://pib.socioambiental.org/pt/Povo:Gamela"
  },
  "Apiaká": {
    imagem: "https://img.socioambiental.org/d/357367-5/0315_2007_04.jpg",
    resumo: "Os Apiaká habitam a região dos rios Tapajós e Teles Pires, nos estados de Mato Grosso e Pará. Tradicionalmente pertencentes à família linguística Tupi-Guarani, destacam-se historicamente por sua grande mobilidade territorial, rica cultura material e forte resistência na afirmação de sua identidade indígena.",
    link: "https://pib.socioambiental.org/pt/Povo:Apiak%C3%A1"
  },
  "Ashininca": {
    imagem: "https://galeria.socioambiental.org/filestore/7/4/5_2ab0554fd660a0c/745scr_1087e22c2ae3c36.jpg",
    resumo: "Os Ashininca (ou Ashaninka) pertencem à família linguística Arawak e vivem na região da fronteira entre o Brasil (Acre) e o Peru. São amplamente reconhecidos por sua rica vestimenta tradicional (a kushma), sua forte organização política na defesa da floresta e uma cosmologia profundamente ligada à natureza.",
    link: "https://pib.socioambiental.org/pt/Povo:Ashaninka"
  }
};

const obras = [
  { id: 1, 
    titulo: "Cerâmica Terena", 
    imagem: "src/assets/img/Terena.png" },

  { id: 2, 
    titulo: "Cerâmica Terena", 
    imagem: "src/assets/img/Terena.png" },

  { id: 3, 
    titulo: "Cerâmica Terena", 
    imagem: "src/assets/img/Terena.png" },

  { id: 4, 
    titulo: "Cerâmica Terena", 
    imagem: "src/assets/img/Terena.png" },

  { id: 5, 
    titulo: "Cerâmica Terena", 
    imagem: "src/assets/img/Terena.png" },

  { id: 6, 
    titulo: "Cerâmica Terena", 
    imagem: "src/assets/img/Terena.png" },

  { id: 7, 
    titulo: "Cerâmica Terena", 
    imagem: "src/assets/img/Terena.png" },

  { id: 8, 
    titulo: "Cerâmica Terena", 
    imagem: "src/assets/img/Terena.png" }
];


function Acervo() {

const [mostrarTodas, setMostrarTodas] = useState(false);
const [etniaAtiva, setEtniaAtiva] = useState("Todas");
const [mostrarFiltros, setMostrarFiltros] = useState(false);

const etniaSelecionada = dadosEtnias[etniaAtiva];

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
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sliders-horizontal-icon lucide-sliders-horizontal"><path d="M10 5H3"/><path d="M12 19H3"/><path d="M14 3v4"/><path d="M16 17v4"/><path d="M21 12h-9"/><path d="M21 19h-5"/><path d="M21 5h-7"/><path d="M8 10v4"/><path d="M8 12H3"/>
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

      {etniaAtiva !== "Todas" && etniaSelecionada && (
        <section className="banner-etnia">
          <div className="banner-img-container">
            <img src={etniaSelecionada.imagem} alt={`Povo ${etniaAtiva}`} />
          </div>

          <div className="banner-content">
            <h3 className="banner-title">{etniaAtiva}</h3>

            <p className="banner-text">{etniaSelecionada.resumo}</p>

            <a 
              href={etniaSelecionada.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="banner-btn">
              Ver mais sobre os {etniaAtiva}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </div>
        </section>
      )}

    <section className='obra-container'>
      <div className='obra-grid'>
        {obras.map((obra) => (
          <div key={obra.id} className='obra-card'>
            <div className='obra-img'>
              <img src={obra.imagem} alt={obra.titulo} />
            </div>
            <div className='obra-info'>
              <h4 className='obra-titulo'>{obra.titulo}</h4>
              <button className='btn-detalhes'>Detalhes</button>
            </div>
          </div>
        ))}
      </div>
    </section>

    </div>
    
  )
}

export default Acervo
