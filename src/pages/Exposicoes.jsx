import { useState } from "react";
import "./css/Exposicoes.css";
import OutonoImg from "../assets/ExposicaoOutono.png";

/* ─────────────────────────────────────────────
   DADOS
───────────────────────────────────────────── */

const currentExhibition = {
  id: 100,
  name: "Desfolhar de Outono - 2026",
  artistName: "Harlot",
  startDate: "26/03",
  endDate: "15/06",
  image: OutonoImg,
  description:
    "Uma imersão profunda nas nuances e tons melancólicos do outono. Através de texturas orgânicas e contrastes marcantes, a coleção propõe uma reflexão sobre os ciclos de renovação e a beleza da impermanência.",
  gallery: [null, null, null]
};

const pastExhibitions = [
  {
    id: 1,
    name: "Alvorada de verão - 2026",
    image: null,
    badge: "ALVORADA DE VERÃO",
    dateRange: ["20/12", "a", "15/03"],
    artistName: "Harlot",
    description:
      "A energia vibrante do sol e a efemeridade dos dias quentes traduzidas em telas expressionistas abstratas.",
    gallery: [null, null]
  },

  {
    id: 2,
    name: "Florescer da Primavera - 2025",
    image: null,
    badge: "EXPOSIÇÃO",
    dateRange: null,
    artistName: "Artes Visuais",
    description:
      "A explosão de cores e o renascimento da flora sob uma perspectiva contemporânea.",
    gallery: []
  },

  {
    id: 3,
    name: "Nome da expo. - 2000",
    image: null,
    badge: null,
    dateRange: null,
    artistName: "Anon",
    description: "Descrição da exposição.",
    gallery: []
  },

  {
    id: 4,
    name: "Nome da expo. - 2000",
    image: null,
    badge: null,
    dateRange: null,
    artistName: "Anon",
    description: "Descrição da exposição.",
    gallery: []
  },

  {
    id: 5,
    name: "Nome da expo. - 2000",
    image: null,
    badge: null,
    dateRange: null,
    artistName: "Anon",
    description: "Descrição da exposição.",
    gallery: []
  },

  {
    id: 6,
    name: "Nome da expo. - 2000",
    image: null,
    badge: null,
    dateRange: null,
    artistName: "Anon",
    description: "Descrição da exposição.",
    gallery: []
  }
];

const TOTAL_PAGES = 68;

/* ─────────────────────────────────────────────
   COMPONENTE
───────────────────────────────────────────── */

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

      <div
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

        <div className="ep-current-feature-title">
          {expo.name}
        </div>

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
              {item.name}
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

              </div>

            </div>

          </div>

        </div>

      )}

    </div>

  );

}
