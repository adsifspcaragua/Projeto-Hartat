import { useEffect, useRef, useState } from 'react'
import './css/HorizontalScrollList.css'

function HorizontalScrollList({ items }) {
    const [scrollLeft, setScrollLeft] = useState(false)
    const [scrollRight, setScrollRight] = useState(false)
    const listRef = useRef(null)

    const nextItem = () => {
        const list = listRef.current
        const firstChild = list.children[0]
        const itemWidth = firstChild.offsetWidth

        const gap = parseFloat(getComputedStyle(list).gap)

        list.scrollBy({ left: itemWidth + gap, behavior: 'smooth' })
    }

    const previousItem = () => {
        const list = listRef.current
        const firstChild = list.children[0]
        const itemWidth = firstChild.offsetWidth

        const gap = parseFloat(getComputedStyle(list).gap)

        list.scrollBy({ left: (itemWidth + gap) * -1, behavior: 'smooth' })
    }

    const setScroll = () => {
        const list = listRef.current
        setScrollLeft(list.scrollLeft > 0)
        setScrollRight(list.scrollLeft < list.scrollWidth - list.clientWidth )
    }

    useEffect(setScroll, [])

    return(
        <div className="horizontal-scroll-list">
            <div className="scroll-list-ui">
                { scrollLeft && <i className="fa-solid fa-angle-left fa-2x" onClick={previousItem} />}
                { scrollRight && <i className="fa-solid fa-angle-right fa-2x" onClick={nextItem} /> }
            </div>

            <div className="scroll-list-items" ref={listRef} onScroll={setScroll}>
                <div className="item"> Hello world! </div>
                <div className="item"> Hello world! </div>
                <div className="item"> Hello world! </div>
                <div className="item"> Hello world! </div>
                <div className="item"> Hello world! </div>
                <div className="item"> Hello world! </div>
                <div className="item"> Hello world! </div>
                <div className="item"> Hello world! </div>
                <div className="item"> Hello world! </div>
                <div className="item"> Hello world! </div>
                <div className="item"> Hello world! </div>
                <div className="item"> Hello world! </div>
                <div className="item"> Hello world! </div>
                <div className="item"> Hello world! </div>
                <div className="item"> Hello world! </div>
            </div>
        </div>
    )
}

export default HorizontalScrollList