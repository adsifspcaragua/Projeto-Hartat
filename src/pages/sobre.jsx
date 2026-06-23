import React from 'react';
import './css/Sobre.css'
import fotoHistoria from '../assets/historia.jfif'
function Sobre() {
  return (
    <div className="sobre-container">
    
      <section className="hero-section">
        <div className="hero-overlay">
          <h1 className="hero-title">Lugar de memória, arte e encontro. Aqui, mais de duas mil peças de 60 etnias brasileiras e de culturas da América</h1>
        </div>
      </section>

      <section className="texto-princiapl-section">
        <h1 className="section-title">Propósito</h1>
        <p className='paragraph'>
          O Espaço Hartãt é um Ponto de Cultura focado na valorização, divulgação, manutenção e preservação das culturas indígenas latino-americanas. Localizado em Caraguatatuba, São Paulo, o local possui uma estrutura em formato de maloca que abriga um acervo privado com cerca de 2.000 peças. A coleção reúne obras originais e réplicas arqueológicas de 60 etnias brasileiras e de culturas de povos do Peru, Equador, Costa Rica, Colômbia e México. O espaço democratiza o acesso à cultura por meio de exposições — com expografias que mudam a cada equinócio e solstício —, oficinas de arte e exibições audiovisuais do projeto Cine Hartãt. É um ambiente inclusivo criado para todos os públicos, com forte atuação no recebimento de estudantes da rede pública de ensino.
        </p>
      </section>

      <section className="texto-alternativo-section">
        <div className="text-content">
        <div className="text-box">
            <h1 className="section-title">Nossa Historia</h1>
            <p className='paragraph'>
              A raiz do acervo começou a ganhar forma em 2012, impulsionada por viagens nacionais e internacionais voltadas ao estudo e à aquisição de peças, a exemplo do encontro com a tradição da Cerâmica Tapajônica no Pará. Com o amadurecimento do projeto, a iniciativa passou a receber visitas de escolas a partir de 2018. Para acomodar a crescente coleção e expandir as atividades, o espaço expositivo atual foi construído e oficialmente inaugurado em 09 de agosto de 2022, data em que se celebra o Dia Internacional dos Povos Indígenas. O impacto e a seriedade do projeto culminaram em sua certificação oficial como Ponto de Cultura pelo Ministério da Cultura (MinC) no ano de 2024.
            </p>
          </div> 
          <img src={fotoHistoria} alt="historia" className="imagem-historia" />
        </div>
      </section>
    </div>
  );
}

export default Sobre;