import React from 'react';
import fundo from '../assets/fundo.png';
import destaque from '../assets/destaque.png';
import cocar from '../assets/cocar.png';
import artesanato from '../assets/artesanato.png';
import artesanato2 from '../assets/artesanato2.png';
import praia from '../assets/praia.png';
import './css/Blog.css';

const Blog = () => {
  return (
    <div className="blogContainer">
      <div className="blogHeader" style={{ backgroundImage: `url(${fundo})` }}>
        <h1 className="blogTitle">Hartãt Blog</h1>
      </div>
      
      <div className="blogBody">
        <div className="featuredPost">
          <img src={destaque} alt="Destaque" className="featuredImg" />
          <div className="featuredText">
            <h2>Exemplo de Título de Post em Destaque</h2>
            <p>O Espaço Hartãt conta com um acervo indígena privado com mais de duas mil peças de 60 etnias brasileiras e outras culturas da América Latina, como Peru, Equador, Costa Rica, Colômbia e México. O acervo inclui tanto obras originais, quanto réplicas criadas por ceramistas com base em estudos arqueológicos das culturas já extintas.</p>
            <button className="btnLeiaMais">Leia Mais</button>
          </div>
        </div>

        <div className="blogControls">
          <div className="searchContainer">
            <input type="text" placeholder="Pesquisar posts..." className="searchInput" />
          </div>
          <div className="sortContainer">
            <span className="sortLabel">Ordenar:</span>
            <select className="sortSelect">
              <option>Mais recentes</option>
            </select>
          </div>
        </div>

        <div className="postsGrid">
          <div className="postCard">
            <img src={cocar} alt="Post" className="postImg" />
            <div className="postContent">
              <h3>Exemplo de Título</h3>
              <p>O Espaço Hartãt conta com um acervo indígena privado com mais de duas mil peças de 60 etnias brasileiras e outras culturas da América Latina.</p>
              <a href="#" className="btnVerMais">Ver Mais</a>
            </div>
          </div>
          
          <div className="postCard">
            <img src={artesanato} alt="Post" className="postImg" />
            <div className="postContent">
              <h3>Exemplo de Título</h3>
              <p>O Espaço Hartãt conta com um acervo indígena privado com mais de duas mil peças de 60 etnias brasileiras e outras culturas da América Latina.</p>
              <a href="#" className="btnVerMais">Ver Mais</a>
            </div>
          </div>

          <div className="postCard">
            <img src={artesanato2} alt="Post" className="postImg" />
            <div className="postContent">
              <h3>Exemplo de Título</h3>
              <p>O Espaço Hartãt conta com um acervo indígena privado com mais de duas mil peças de 60 etnias brasileiras e outras culturas da América Latina.</p>
              <a href="#" className="btnVerMais">Ver Mais</a>
            </div>
          </div>

          <div className="postCard">
            <img src={praia} alt="Post" className="postImg" />
            <div className="postContent">
              <h3>Exemplo de Título</h3>
              <p>O Espaço Hartãt conta com um acervo indígena privado com mais de duas mil peças de 60 etnias brasileiras e outras culturas da América Latina.</p>
              <a href="#" className="btnVerMais">Ver Mais</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;