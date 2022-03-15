import React, { useEffect, Children, cloneElement } from "react";
import './carousel.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

export const Carousel = ({ children }) => {
    const [pages, setPages] = React.useState([])
    const [offset, setOffset] = React.useState(0)


    const PAGE_WIDTH = 350

    let currentPage = (offset / PAGE_WIDTH * -1) + 1 

    const handleArrowRight = () => {
        setOffset((prev) => {
            const newOffset = prev - PAGE_WIDTH
            const maxOffset = -(PAGE_WIDTH * (pages.length - 1))
            return Math.max(newOffset, maxOffset)
        })
    }

    const handleArrowLeft = () => {
        setOffset((prev) => {
            const newOffset = prev + PAGE_WIDTH
            return Math.min(newOffset, 0)
        })
    }

    useEffect(() => {
        setPages(
            Children.map(children, (child) => {
                return cloneElement(child, {
                    style: {
                        height : '100%',
                        minWidth : `${PAGE_WIDTH}` + 'px',
                        maxWidth : `${PAGE_WIDTH}` + 'px',
                    }
                    
                })
            })
        ) 
    }, [children])

    useEffect(() => { 
        if(pages.length > 1) {
            for (let i = 1; i < children.length; i++) {
                handleArrowRight()
            }
        } else handleArrowLeft()

    },[pages])

    return (
        <div className="carousel-container">
            <i className="bi bi-arrow-left" onClick={() => handleArrowLeft()}></i>
            <div className="carousel-window" style = {{width : `${PAGE_WIDTH}` + 'px'}}>
                <div className = 'carousel-window-counter'> {currentPage} / {children.length}</div>
                <div className="carousel-window-items" style = {{transform :  `translateX(${offset}px)`}}>
                    {pages}
                </div>
            </div>
            <i className="bi bi-arrow-right" onClick={() => handleArrowRight()}></i>
        </div>
    )
}