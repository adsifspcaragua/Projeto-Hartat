import React, { useState } from 'react';
import './css/Cine.css'

const movies = [
 { 
    id: 1, 
    title: 'A FEBRE (2019)', 
    genre: 'Mistério - 1h 38m', 
    rating: '12', 
    image: 'https://www.cineweb.com.br/img/uploads/filmes/a_febre/a_febre_interna.jpg',
    synopsis: 'A Febre é um filme brasileiro. Justino, um indígena de 45 anos, trabalha como vigilante no porto de cargas de Manaus...',
    date: '12/04/2026',    
    price: 'Gratuito'
  },
  { 
    id: 2, 
    title: 'Mundurukuyü – A Floresta das Mulheres Peixe ', 
    genre: 'Documentario - 1h 12m', 
    rating: '12', 
    image: 'https://www.festivalvrambiental.com.br/wp-content/uploads/2025/10/CartazMUNDURUKUYU-330x466.jpg',
    synopsis: 'Nas margens do Tapajós, no Pará, a floresta das mulheres peixe espelha a mitologia Munduruku, onde humanos, na origem do mundo, se transformaram em floresta, plantas e animais. No dia-a-dia da aldeia Sawre Muybu, as mulheres peixes usam as câmeras de cinema para proteger a Amazônia das forças que destroem a floresta, evocando os espíritos da floresta que não são apenas forças espirituais ancestrais, mas parte da família.',
    date: '12/04/2026',    
    price: 'Gratuito'
  },
   { 
    id: 3, 
    title: 'A Flor do Buriti', 
    genre: 'Drama - 2h 03m', 
    rating: '12', 
    image: 'https://br.web.img3.acsta.net/img/f2/13/f2139e4e045ae6650268f967368000b1.jfif',
    synopsis: 'A Flor do Buriti acompanha os últimos 80 anos dos Krahô na comunidade da aldeia Pedra Branca, no Tocantins. Em 1940, duas crianças desse povo indígena encontraram um boi perigoso perto da sua aldeia, no meio da floresta em plena escuridão. Era o ponto inicial de um terrível massacre, cometido por dois fazendeiros da região, onde morreram dezenas de indígenas. Durante a Ditadura brasileira, no ano de 1969, os filhos dos sobreviventes são coagidos, obrigados e forçados a integrar uma unidade militar. Hoje, os Krahô continuam sua árdua caminhada pela resistência sobre a sua terra que ainda sangra sob diante de velhas e novas ameaças.',
    date: '12/04/2026',    
    price: 'Gratuito'
  },
   { 
    id: 4, 
    title: 'Yvy Pyte — Coração da Terra (2023)', 
    genre: 'Documentario - 1h 50m', 
    rating: '12', 
    image: 'https://meioamargo.com/wp-content/uploads/2024/01/yvy-pyte-coracao-da-terra-meio-amargo-poster-500x667.jpg',
    synopsis: 'Este documentário discorre bastante a respeito de si próprio. Enquanto narrador em off, um dos dois diretores, Alberto Alvares, informa que está em busca de suas raízes, retornando às terras onde nasceu. Afirma o desejo de erguer uma homenagem ao povo guarani, que luta para permanecer em terras demarcadas e tomadas pelos brancos. Revela cada intenção, justifica as escolhas, anuncia os próximos passos (as cidades que pretende visitar). Torna-se uma espécie de guia ao espectador.',
    date: '12/04/2026',    
    price: 'Gratuito'
  },
   { 
    id: 5, 
    title: 'A FEBRE (2019)', 
    genre: 'Mistério - 1h 38m', 
    rating: '12', 
    image: 'https://www.cineweb.com.br/img/uploads/filmes/a_febre/a_febre_interna.jpg',
    synopsis: 'A Febre é um filme brasileiro. Justino, um indígena de 45 anos, trabalha como vigilante no porto de cargas de Manaus...',
    date: '12/04/2026',    
    price: 'Gratuito'
  },
   { 
    id: 6, 
    title: 'A FEBRE (2019)', 
    genre: 'Mistério - 1h 38m', 
    rating: '12', 
    image: 'https://www.cineweb.com.br/img/uploads/filmes/a_febre/a_febre_interna.jpg',
    synopsis: 'A Febre é um filme brasileiro. Justino, um indígena de 45 anos, trabalha como vigilante no porto de cargas de Manaus...',
    date: '12/04/2026',    
    price: 'Gratuito'
  },
   { 
    id: 7, 
    title: 'A FEBRE (2019)', 
    genre: 'Mistério - 1h 38m', 
    rating: '12', 
    image: 'https://www.cineweb.com.br/img/uploads/filmes/a_febre/a_febre_interna.jpg',
    synopsis: 'A Febre é um filme brasileiro. Justino, um indígena de 45 anos, trabalha como vigilante no porto de cargas de Manaus...',
    date: '12/04/2026',    
    price: 'Gratuito'
  },
   { 
    id: 8, 
    title: 'A FEBRE (2019)', 
    genre: 'Mistério - 1h 38m', 
    rating: '12', 
    image: 'https://www.cineweb.com.br/img/uploads/filmes/a_febre/a_febre_interna.jpg',
    synopsis: 'A Febre é um filme brasileiro. Justino, um indígena de 45 anos, trabalha como vigilante no porto de cargas de Manaus...',
    date: '12/04/2026',    
    price: 'Gratuito'
  }
];

const featuredMovie = {
  title: 'A FEBRE (2019)', 
  genre: 'Mistério - 1h 38m', 
  rating: '12',
  image: 'https://www.cineweb.com.br/img/uploads/filmes/a_febre/a_febre_interna.jpg',
  synopsis: 'A Febre é um filme brasileiro. Justino, um indígena de 45 anos, trabalha como vigilante no porto de cargas de Manaus...',
  date: '12/04/2026',    
  price: 'Gratuito',
  director: 'Maya Da-Rin'
};

export default function CatalogContent() {
  //Controla qual filme está selecionado para o Modal
  const [selectedMovie, setSelectedMovie] = useState(null);

  //Fecha o modal
  const closeModal = () => setSelectedMovie(null);

  return (

    <div className="catalog-container padding-wrapper">
      
      <section className="now-playing">
        <h1 className="section-title">Em cartaz</h1>
        <div className="hero-banner" onClick={() => setSelectedMovie(featuredMovie)} style={{cursor: 'pointer'}}>
          <div className="hero-content">
            <img src="https://i.ytimg.com/vi/aF1fsR9vvBo/maxresdefault.jpg" alt="banner do filme" className="festival-logo" />
          </div>
        </div>
      </section>

      <section className="catalog-list">
        <h1 className="section-title">Exibicoes Passadas</h1>
        
        <div className="controls">
          <div className="search-bar">
            <input type="text" placeholder="Pesquisar Filmes..." />
          </div>
          <div className="sort-bar">
            <h2>Ordenar:</h2>
            <select>
              <option>Mais recentes</option>
            </select>
          </div>
        </div>

        <div className="movies-grid">
          {movies.map(movie => (
            <div key={movie.id} className="movie-card" onClick={() => setSelectedMovie(movie)} style={{cursor: 'pointer'}}>
              <img src={movie.image} alt={movie.title} className="movie-poster" />
              <div className="movie-info">
                <h3>{movie.title}</h3>
                <div className="movie-tags">
                  <span className="genre">{movie.genre}</span>
                  <span className="rating">{movie.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {selectedMovie && (
        <div className="modal-overlay" onClick={closeModal}>
             <button className="close-btn" onClick={closeModal}>X</button>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedMovie.image} alt={selectedMovie.title} className="movie-poster" />
            
           
            
            <div className="modal-header">
              <h2>{selectedMovie.title}</h2>
            </div>

            <div className="modal-body">
              <p><strong>Data de exibição:</strong> {selectedMovie.date}</p>
              <p><strong>Valor da entrada:</strong> {selectedMovie.price}</p>
              <br/>
              <p><strong>Sinopse:</strong><br/>{selectedMovie.synopsis}</p>
              <br/>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}