import { useEffect, useState, useRef } from 'react'
import './css/Home.css'
import Carousel from '../components/Carousel'

import CarloCury from '../assets/logo/CarloCury.svg'
import Ubuntu from '../assets/logo/Ubuntu.svg'
import TSA from '../assets/logo/TSA.svg'
import GCE from '../assets/logo/GCE.svg'
import { useNavigate } from 'react-router-dom'
import HorizontalScrollList from '../components/HorizontalScrollList'

function Home() {
    const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2173.626266592157!2d-45.39332926689689!3d-23.61906604998831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cd63000dfd49ad%3A0xc121f69cd63fe898!2sPonto%20de%20Cultura%20-%20Espa%C3%A7o%20Hart%C3%A3t-%20Acervo%20Ind%C3%ADgena!5e0!3m2!1spt-BR!2sbr!4v1779816037160!5m2!1spt-BR!2sbr" 

    const carouselContent = [
        { image: 'https://files.catbox.moe/yjr0fg.png', text: 'O maior acervo de peças indígenas de todo o Litoral Norte', button: 'Saiba mais' },
        { image: 'https://picsum.photos/1001', button: 'Click Me!' },
        { image: 'https://picsum.photos/1002', text: 'Hello world!' },
        { image: 'https://picsum.photos/1000', text: 'Lorem ipsum dolor sit amet porro dest martire der mador longdom', button: 'Click Me!' }
    ]

    const highlightsContent = [
        { image: 'https://picsum.photos/1000', title: 'Hello title!', description: 'This is a description of this super cool item you are seeing right now' }
    ]
   
    //Navigation
    const navigate = useNavigate()
    const locationRef = useRef(null)
    const scrollToLocation = () => {
        const scrollOptions = { behavior: 'smooth', block: 'center' }
        const location = locationRef.current
        
        location.scrollIntoView(scrollOptions)
    }

    return(
        <main className='page-display home-page'>
            <Carousel 
                content={carouselContent}
            />

            <nav className="navigation-buttons">

                <button onClick={() => navigate('/programacao')}> 
                    <i className="fa-regular fa-calendar" /> 
                    Programação 
                </button>

                <button onClick={() => navigate('/acervo')}> 
                    <i className="fa-regular fa-image" /> 
                    Acervo virtual 
                </button>

                <button onClick={scrollToLocation}>
                    <i className="fa-solid fa-location-dot" /> 
                    Visite-nos 
                </button>
            </nav>

            <div className="sections padding-wrapper">
                <section className="about">
                    <h1> Sobre o projeto </h1>
                    
                    <p> 
                        O Espaço Hartãt conta com um acervo indígena privado com mais de 
                        duas mil peças de 60 etnias brasileiras e outras culturas da América
                        Latina, como Peru, Equador, Costa Rica, Colômbia e México. O acervo
                        inclui tanto obras originais, quanto réplicas criadas por ceramistas
                        com base em estudos arqueológicos das culturas já extintas. 
                    </p>

                    <button> Saiba mais </button>

                    <div className="image-placeholder" />
                </section>

                <section className="highlights">
                    <h1> Destaques </h1>
                    <HorizontalScrollList />
                </section>

                <section className="introduction-video">
                    <h1> Conheça o espaço </h1>

                    <iframe 
                        src="https://www.youtube.com/embed/Eie84qbGSmo" 
                        width={321}
                        title="Espaço Hartãt - Turismo em Caraguatatuba" 
                        allow="picture-in-picture; web-share" 
                        allowFullScreen
                    />
                </section>

                <section className="location" ref={locationRef}>
                    <h1> Onde estamos </h1>

                    <p>
                        Endereço: <br/>
                        Rua Bartolomeu Bueno da Silva, 1231 - Martim de Sá <br/>
                        Caraguatatuba, SP - 11662-300 <br/>
                        <br/>
                        Contato: <br/>
                        TEL: +55 (12) 98195-0786 <br/>
                        E-mail: ubuntucaragua@gmail.com <br/> 
                        <br/>
                        Horário de atendimento: <br/>
                        Segunda à domingo, das 9h às 12h e das 14h às 17h
                    </p>

                    <iframe 
                        src={mapUrl}
                        allowFullScreen 
                        loading="lazy" 
                    />
                </section>

                <section className="related-groups">
                    <h1> Grupos sediados </h1>

                    <div className="group-display">

                        <div className="group-item">
                            <img src={CarloCury} title='Carlo Cury Cerâmica' loading='lazy' />
                            <span> Carlo Cury Cerâmica </span>
                        </div>

                        <div className="group-item">
                            <img src={Ubuntu} loading='lazy' />
                            <span> Ubuntu Cerâmica e Artes </span>
                        </div>

                        <div className="group-item">
                            <img src={TSA} title='Tradições e Saberes Artesanais' loading='lazy' />
                            <span> Tradições e Saberes Artesanais </span>
                        </div>

                        <div className="group-item">
                            <img src={GCE} title='Grupo Caraguatatubense de Estudos de Questões Indígenas' loading='lazy' />
                            <span> Grupo Caraguatatubense de Estudos de Questões Indígenas </span>
                        </div>
    
                    </div>
                </section>
            </div>
        </main>
    )
}

export default Home