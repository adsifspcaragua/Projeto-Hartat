import { useState } from "react";
import "./css/Exposicoes.css";
import CapaVerao2026 from "../assets/CapaExpoVerao2026.jpg";
import CapaOutono2026 from "../assets/CapaExpoOutono2026.png";
import CapaInverno2026 from "../assets/CapaExpoInverno2026.jpg";
import CapaPrimavera2025 from "../assets/CapaExpoPrimavera2025.jpg";
import CapaVerao2025 from "../assets/CapaExpoVerao2025.jpg";
import CapaOutono2025 from "../assets/CapaExpoOutono2025.jpg";
import CapaInverno2025 from "../assets/CapaExpoInverno2025.jpg";
import CapaJardin1 from "../assets/CapaExpoJardin1-2025.jpg";
import CapaJardin2 from "../assets/CapaExpoJardin2-2025.jpg"
import ImagemPrimavera1 from "../assets/ExpoPrimavera1.jpg";
import ImagemPrimavera2 from "../assets/ExpoPrimavera2.jpg";
import ImagemVerao1 from "../assets/ExpoVerao1.jpg";
import ImagemOutono1 from "../assets/ExpoOutono1.jpg";
import ImagemOutono2 from "../assets/ExpoOutono2.jpg";
import ImagemOutono3 from "../assets/ExpoOutono3.jpg";
import ImagemOutono4 from "../assets/ExpoOutono4.jpg";
import ImagemJardin01 from "../assets/ExpoJardin1.jpg";
import ImagemJardin02 from "../assets/ExpoJardin2.jpg";
import ImagemJardin03 from "../assets/ExpoJardin3.jpg";
import ImagemJardin21 from "../assets/ExpoJardinDois1.jpg";
import ImagemJardin22 from "../assets/ExpoJardinDois2.jpg";

/*DADOS*/

const currentExhibition = [
  {
    id: 100,
    name: "Alvorada do Verão - 2026",
    artistName: "Exposição Regular",
    startDate: "21/12",
    endDate: "20/03",
    image: CapaVerao2026,
    description:
      "Inspirada na intensidade dos dias ensolarados, 'Alvorada do Verão' celebra a energia, a liberdade e o movimento característicos da estação. A exposição reúne obras marcadas por cores vibrantes, contrastes luminosos e composições que evocam o calor, o mar e os encontros que tornam o verão um período de renovação e descoberta.",
  },
  
  {
    id: 101,
    name: "Desfolhar do Outono - 2026",
    artistName: "Exposição Regular",
    startDate: "21/03",
    endDate: "20/06",
    image: CapaOutono2026,
    description:
      "Uma imersão profunda nas nuances e tons melancólicos do outono. Através de texturas orgânicas e contrastes marcantes, a coleção propõe uma reflexão sobre os ciclos de renovação e a beleza da impermanência.",
  },

  {
    id: 103,
    name: "Instropecção de Inverno - 2026",
    artistName: "Exposição Regular",
    startDate: "21/06",
    endDate: "22/09",
    image: CapaInverno2026,
    description:
      "Uma imersão profunda nas nuances e tons melancólicos do outono. Através de texturas orgânicas e contrastes marcantes, a coleção propõe uma reflexão sobre os ciclos de renovação e a beleza da impermanência.",
  },
]


const pastExhibitions = [
  {
    id: 1,
    name: "Alvorada de verão - 2025",
    image: CapaVerao2025,
    badge: "EXPOSIÇÃO REGULAR",
    dateRange: ["20/12", "a", "21/03"],
    artistName: "EXPOSIÇÃO REGULAR",
    description:
      "Inspirada na intensidade dos dias ensolarados, 'Alvorada do Verão' celebra a energia, a liberdade e o movimento característicos da estação. A exposição reúne obras marcadas por cores vibrantes, contrastes luminosos e composições que evocam o calor, o mar e os encontros que tornam o verão um período de renovação e descoberta.",
    gallery: [ImagemVerao1]
  },

  {
    id: 2,
    name: "Florescer da Primavera - 2025",
    image: CapaPrimavera2025,
    badge: "EXPOSIÇÃO REGULAR",
    dateRange: ["22/09", "a", "20/12"],
    artistName: "EXPOSIÇÃO REGULAR",
    description:
      "A explosão de cores e o renascimento da flora sob uma perspectiva contemporânea.",
    gallery: [ImagemPrimavera1, ImagemPrimavera2]
  },

  {
    id: 3,
    name: "Desfolhar do Outono - 2025",
    image: CapaOutono2025,
    badge: "EXPOSIÇÃO REGULAR",
    dateRange: ["21/03", "a", "20/06"],
    artistName: "EXPOSIÇÃO REGULAR",
    description: "Entre folhas que caem e paisagens que se transformam, 'Desfolhar do Outono' convida o visitante a refletir sobre mudança e amadurecimento. As obras exploram tons terrosos, texturas orgânicas e narrativas visuais que representam os ciclos da natureza e a beleza encontrada na impermanência.",
    gallery: [ImagemOutono1, ImagemOutono2, ImagemOutono3, ImagemOutono4]
  },

  {
    id: 4,
    name: "Introspecção de Inverno - 2025",
    image: CapaInverno2025,
    badge: "EXPOSIÇÃO REGULAR",
    dateRange: ["19/07", "a", "15/09"],
    artistName: "EXPOSIÇÃO REGULAR",
    description: "Silêncio, contemplação e profundidade definem 'Introspecção de Inverno'. A exposição apresenta trabalhos que exploram a relação entre luz e sombra, utilizando paletas frias e atmosferas minimalistas para estimular momentos de reflexão pessoal e conexão com o mundo interior.",
    gallery: []
  },

  {
    id: 5,
    name: "Legado Ancestral - 2025",
    image: CapaJardin2,
    badge: "EXPOSIÇÃO - JARDINS",
    dateRange: null,
    artistName: "Anon",
    description: "Descrição da exposição.",
    gallery: [ImagemJardin21, ImagemJardin22]
  },

  {
    id: 6,
    name: "Tradições e Saberes - 2025",
    image: CapaJardin1,
    badge: "EXPOSIÇÃO - JARDINS",
    dateRange: ["24/05/2025"],
    artistName: "Anon",
    description: "Descrição da exposição.",
    gallery: [ImagemJardin01, ImagemJardin02, ImagemJardin03]
  }
];

const TOTAL_PAGES = 68;

/*COMPONENTE*/

export default function Exposicoes() {

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("recent");
  const [page, setPage] = useState(1);

  const [selectedExpo, setSelectedExpo] = useState(null);

  const expo = currentExhibition;

  return (

    <div className="ep-page">

      {/* EXPOSIÇÃO ATUAL */}

      <h2 className="ep-section-title">
        Exposições atuais
      </h2>


      <div className="feature-container">

        {currentExhibition.map((expo) => (
          
        <div
          key={expo.id}
          className="ep-current-feature"
          onClick={() => setSelectedExpo(expo)}
        >

        <div className="ep-current-feature-image">

          {expo.image ? (

            <img
              src={expo.image}
              alt={expo.name}
            />

            ) : (

            <div className="ep-current-feature-placeholder">

              <div className="ep-thumb" />
              <div className="ep-thumb" />
              <div className="ep-thumb" />

            </div>

            )}

          </div>

          <div className="ep-current-feature-info">

            <h3>{expo.name}</h3>

          </div>

        </div>

        ))}

      </div>

      {/* EXPOSIÇÕES PASSADAS */}

      <h2 className="ep-section-title">
        Exposições passadas
      </h2>

      {/* CONTROLES */}

      <div className="ep-controls">

        <div className="ep-search-box">

          <svg
            width={13}
            height={13}
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >

            <circle cx={8} cy={8} r={6} />
            <line x1={13} y1={13} x2={18} y2={18} />

          </svg>

          <input
            placeholder="Pesquisar..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
          />

        </div>

        <div className="ep-sort-box">

          <span>Ordenar:</span>

          <select
            value={sort}
            onChange={(e) => {
              setSort(e.target.value);
              setPage(1);
            }}
          >

            <option value="recent">
              Mais recentes
            </option>

            <option value="oldest">
              Mais antigas
            </option>

            <option value="az">
              A-Z
            </option>

            <option value="za">
              Z-A
            </option>

          </select>

        </div>

      </div>

      {/* GRID */}

      <div className="ep-grid">

        {pastExhibitions.map((item) => (

          <div
            key={item.id}
            className="ep-expo-card"
            onClick={() => setSelectedExpo(item)}
          >

            <div className="ep-expo-img">

              {item.image && (
                <img
                  src={item.image}
                  alt={item.name}
                />
              )}

              {item.badge && (
                <>
                  <div className="ep-overlay" />

                  <div className="ep-badge">
                    {item.badge}
                  </div>
                </>
              )}

              {item.dateRange && (

                <div className="ep-date-badge">

                  {item.dateRange.map((line, index) => (
                    <div key={index}>
                      {line}
                    </div>
                  ))}

                </div>

              )}

            </div>

            <div className="ep-expo-name">
              <h4>{item.name}</h4>
            </div>

          </div>

        ))}

      </div>

      {/* PAGINAÇÃO */}

      <div className="ep-pagination">

        <button
          disabled={page === 1}
          onClick={() => setPage((p) => p - 1)}
        >
          ←
        </button>

        {[1, 2, 3].map((n) => (

          <button
            key={n}
            className={page === n ? "active" : ""}
            onClick={() => setPage(n)}
          >
            {n}
          </button>

        ))}

        <span className="ep-dots">
          ...
        </span>

        {[67, 68].map((n) => (

          <button
            key={n}
            className={page === n ? "active" : ""}
            onClick={() => setPage(n)}
          >
            {n}
          </button>

        ))}

        <button
          disabled={page === TOTAL_PAGES}
          onClick={() => setPage((p) => p + 1)}
        >
          →
        </button>

      </div>

      {/* MODAL */}

      {selectedExpo && (

        <div
          className="ep-modal-overlay"
          onClick={() => setSelectedExpo(null)}
        >

          <div
            className="ep-modal-content"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="ep-modal-close"
              onClick={() => setSelectedExpo(null)}
            >
              ✕
            </button>

            <div className="ep-modal-header">

              <span className="ep-modal-artist">
                {selectedExpo.artistName}
              </span>

              <h3 className="ep-modal-title">
                {selectedExpo.name}
              </h3>

              {selectedExpo.startDate && (

                <p className="ep-modal-date">

                  {selectedExpo.startDate}
                  {" — "}
                  {selectedExpo.endDate}

                </p>

              )}

            </div>

            <div className="ep-modal-body">

              <div className="ep-modal-main-img">

                {selectedExpo.image ? (

                  <img
                    src={selectedExpo.image}
                    alt={selectedExpo.name}
                  />

                ) : (

                  <div className="ep-modal-placeholder-banner">
                    Sem imagem
                  </div>

                )}

              </div>

              <div className="ep-modal-description">

                <h4>
                  Sobre a exposição
                </h4>

                <p>
                  {selectedExpo.description}
                </p>

                <h4>Galeria de Imagens</h4>

                <div className="ep-gallery-grid">
                  {selectedExpo.gallery?.length ? (
                    selectedExpo.gallery.map((img, index) => (
                      <div key={index} className="ep-gallery-item">
                        <img
                          src={img}
                          alt={`${selectedExpo.name} ${index + 1}`}
                        />
                      </div>
                    ))
                  ) : (
                    <div className="ep-modal-placeholder-banner">
                      Sem imagens disponíveis
                    </div>
                  )}
                </div>

              </div>

            </div>

          </div>

        </div>

      )}

    </div>

  );

}
