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
    title: 'A FEBRE (2019)', 
    genre: 'Mistério - 1h 38m', 
    rating: '12', 
    image: 'https://www.cineweb.com.br/img/uploads/filmes/a_febre/a_febre_interna.jpg',
    synopsis: 'A Febre é um filme brasileiro. Justino, um indígena de 45 anos, trabalha como vigilante no porto de cargas de Manaus...',
    date: '12/04/2026',    
    price: 'Gratuito'
  },
   { 
    id: 3, 
    title: 'A FEBRE (2019)', 
    genre: 'Mistério - 1h 38m', 
    rating: '12', 
    image: 'https://www.cineweb.com.br/img/uploads/filmes/a_febre/a_febre_interna.jpg',
    synopsis: 'A Febre é um filme brasileiro. Justino, um indígena de 45 anos, trabalha como vigilante no porto de cargas de Manaus...',
    date: '12/04/2026',    
    price: 'Gratuito'
  },
   { 
    id: 4, 
    title: 'A FEBRE (2019)', 
    genre: 'Mistério - 1h 38m', 
    rating: '12', 
    image: 'https://www.cineweb.com.br/img/uploads/filmes/a_febre/a_febre_interna.jpg',
    synopsis: 'A Febre é um filme brasileiro. Justino, um indígena de 45 anos, trabalha como vigilante no porto de cargas de Manaus...',
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

    <div className="catalog-container">
      
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
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedMovie.image} alt={selectedMovie.title} className="movie-poster" />
            
            <button className="close-btn" onClick={closeModal}>X</button>
            
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