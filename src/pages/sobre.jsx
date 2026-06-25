import React from 'react';
import './css/Sobre.css'
import fotoHistoria from '../assets/historia.jfif'
import claudio from '../assets/claudio.png'
import carlo from '../assets/carlo.jpeg'

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

      <section className="autores-section">
        <div className="text-content">
         
        <div className="text-box">
             <h1 className="section-title">Quem Está por Trás</h1>
            <p className='paragraph'>
<h2>Carlo Cury:</h2> Arquiteto de formação, atua como artista plástico e ceramista desde 2012. É o responsável pela curadoria das peças, elaboração das expografias, produção das réplicas arqueológicas e pela condução das oficinas de cerâmica.            </p>
          </div> 
          <img src={carlo} alt="carlo" className="imagem-pessoa" />
        </div>
        <div className="text-content">
        <div className="text-box">
            <p className='paragraph'>
<h2>Claudio Luiz Dias:</h2> Engenheiro Agrônomo, organiza e participa ativamente das expedições pelo Brasil e pelo exterior para conhecer etnias, museus e espaços culturais, viabilizando a ampliação da coleção. É dele também a responsabilidade pelo registro visual e escrito das atividades desenvolvidas.            </p>
          </div> 
          <img src={claudio} alt="claudio" className="imagem-pessoa" />
        </div>
      </section>

      <section className="texto-princiapl-section">
        <h1 className="section-title">Valores e Visão</h1>
        <p className='paragraph'>
Além de seus mantenedores, a maloca funciona como sede colaborativa para diversos coletivos culturais da região, incluindo o Grupo Ubuntu Caraguatatuba Cerâmica e Artes, o Grupo Tradições e Saberes Artesanais e o Grupo Caraguatatubense de Estudos de Questões Indígenas (GCE-TG).
O Espaço Hartãt acredita na sustentabilidade cultural e no apoio comunitário. Isso se reflete de forma prática em sua loja física: toda a renda obtida com a venda de ornamentos e artesanatos é integralmente revertida para a compra de novos materiais, estimulando de forma direta o fazer tradicional das aldeias. Mais do que uma exposição, o local é um ponto de intercâmbio vivo que abraça a inclusão, recebendo desde pacientes da saúde municipal e professores em atividades de formação, até a promoção de vivências imersivas com os próprios indígenas.        </p>
      </section>

      <section className="texto-princiapl-section">
        <p className='paragraph'>
      As visitas ao acervo e a participação nas atividades são totalmente gratuitas e podem ser realizadas mediante agendamento prévio.
      </p>
      </section>
      
    </div>
  );
}

export default Sobre;