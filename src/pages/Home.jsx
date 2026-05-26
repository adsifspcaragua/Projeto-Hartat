import { useEffect, useState } from 'react'
import './css/Home.css'

function Home() {
    const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2173.626266592157!2d-45.39332926689689!3d-23.61906604998831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cd63000dfd49ad%3A0xc121f69cd63fe898!2sPonto%20de%20Cultura%20-%20Espa%C3%A7o%20Hart%C3%A3t-%20Acervo%20Ind%C3%ADgena!5e0!3m2!1spt-BR!2sbr!4v1779816037160!5m2!1spt-BR!2sbr" 

    const [ carouselContent, setCarouselContent ] = useState([])
    const [ selectedCarouselItem, setSelectedCarouselItem ] = useState(0)

    useEffect(() => {
        setCarouselContent([
            { image: 'https://placehold.co/600x400/000000/FFF', text: 'Hello World!', button: { text: 'Click me!', url: '' }},
            { image: 'https://placehold.co/600x400/000000/FFF', text: 'Hello World!', button: { text: 'Click me!', url: '' }},
            { image: 'https://placehold.co/600x400/000000/FFF', text: 'Hello World!', button: { text: 'Click me!', url: '' }}
        ])
    }, [])

    return(
        <>
            <section className="carousel">
                <div className="carousel-ui">
                    <i className="fa-solid fa-angle-left fa-3x" />
                    <div className="carousel-indicators"></div>
                    <i className="fa-solid fa-angle-right fa-3x" />
                </div>

                { carouselContent.map((i, index) => <image></image>) }
            </section>

            <section className="navigation-buttons">
                <button> <i className="fa-regular fa-calendar" /> Programação </button>
                <button> <i className="fa-regular fa-image" /> Acervo virtual </button>
                <button> <i className="fa-solid fa-location-dot" /> Visite-nos </button>
            </section>

            <section className="about padding-wrapper">
                <div className='text-content'>
                    <h1> Sobre o projeto </h1>
                    <p> 
                        O Espaço Hartãt conta com um acervo indígena privado com mais de 
                        duas mil peças de 60 etnias brasileiras e outras culturas da América
                        Latina, como Peru, Equador, Costa Rica, Colômbia e México. O acervo
                        inclui tanto obras originais, quanto réplicas criadas por ceramistas
                        com base em estudos arqueológicos das culturas já extintas. 
                    </p>

                    <button> Saiba mais </button>
                </div>

                <div className="image-placeholder" />
            </section>

            <section className="highlights padding-wrapper">
                <h1> Destaques </h1>
            </section>

            <section className="introduction-video padding-wrapper">
                <h1> Conheça o espaço </h1>

                <iframe 
                    src="https://www.youtube.com/embed/Eie84qbGSmo" 
                    title="Espaço Hartãt - Turismo em Caraguatatuba" 
                    allow="picture-in-picture; web-share" 
                    allowFullScreen
                />
            </section>

            <section className="location padding-wrapper">
                <div className="text-content">
                    <h1> Onde estamos </h1>

                    <div className="subsection">
                        <p>
                            Endereço: <br />
                            Rua Bartolomeu Bueno da Silva, 1231 - Martim de Sá < br/>
                            Caraguatatuba, SP - 11662-300
                        </p>
                    </div>

                    <div className="subsection">
                        <p>
                            Contato: < br/>
                            TEL: +55 (12) 98195-0786 <br />
                            E-mail: ubuntucaragua@gmail.com
                        </p>
                    </div>

                    <div className="subsection">
                        <p>
                            Horário de atendimento: <br />
                            Segunda à domingo, das 9h às 12h e das 14h às 17h
                        </p>
                    </div>
                </div>

                <iframe 
                    src={mapUrl}
                    allowFullScreen 
                    loading="lazy" 
                />
            </section>

            <section className="groups padding-wrapper">
                <h1> Grupos sediados </h1>
             </section>
        </>
    )
}

export default Home