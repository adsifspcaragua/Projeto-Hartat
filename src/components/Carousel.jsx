import { useEffect, useRef, useState } from 'react'
import './css/Carousel.css'

function Carousel({ content }) {
    //Expected content format: [ { image: 'image-url', text: 'content-text (opt.)', button: 'button-text (opt.)' } ]

    const [index, setIndex] = useState(0)
    const carouselContentRef = useRef(null)

    function scrollToItem(newIndex) {
        const carousel = carouselContentRef.current
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

    const autoScrollTimeout = useRef(null)

    useEffect(() => {
        autoScrollTimeout.current = setTimeout(nextItem, 5000)
        return () => clearTimeout(autoScrollTimeout.current)
    }, [index])
    

    return(
        <div className='carousel'>
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
        </div>
    )
}

export default Carousel