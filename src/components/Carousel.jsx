import { useRef, useState } from 'react'
import './css/Carousel.css'

function Carousel({ content }) {
    //Expected content format: [ { image: 'image-url', text: 'content-text', button: 'button-text' } ]

    const [index, setIndex] = useState(0)
    const carouselContentRef = useRef(null)

    function scrollToItem(newIndex) {
        const carousel = carouselContentRef.current
        console.log(carousel)
        if (!carousel) { return }

        carousel.scrollTo({ left: newIndex * carousel.clientWidth, behavior: 'smooth'})
        setIndex(newIndex)
    }

    function previousItem() {
        if (index == 0) { scrollToItem(content.length - 1) }
        else { scrollToItem(index - 1) }
    }

    function nextItem() {
        if (index == content.length - 1) { scrollToItem(0) }
        else { scrollToItem(index + 1) }
    }

    return(
        <section className='carousel'>
            <div className="carousel-ui">
                <i className="fa-solid fa-angle-left fa-3x" onClick={previousItem} />
                <i className="fa-solid fa-angle-right fa-3x" onClick={nextItem} />
            </div>

            <div className='carousel-content' ref={carouselContentRef}>
                {
                    content.map(({ image, text, button }, index) => 
                        <div 
                            className='carousel-item' 
                            style={{ backgroundImage: `url(${image})` }}
                            key={index}
                        >
                            { text && <h1> {text} </h1>}
                            { button && <button> {button} </button>}
                        </div>
                    )
                }
            </div>
        </section>
    )
}

export default Carousel