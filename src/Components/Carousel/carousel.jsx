import PropTypes from 'prop-types'
import { useState } from "react"

function Carousel({pictures, alt}){
    const slides = pictures || [];
    const [currentIndex, setCurrentIndex] = useState (0);
    const goToPrevious =() =>{
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length -1 : currentIndex -1;
        setCurrentIndex(newIndex)
    }
    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length -1;
        const newIndex = isLastSlide ? 0 : currentIndex +1;
        setCurrentIndex(newIndex)
    }
    return (
        <div className="carousel">
            <img 
                className="carousel__image" 
                src = {slides[currentIndex]} 
                alt={alt}
                height="500px"
                width="1713px"
                loading="lazy"/>
            <div className="carousel__arrows">
                <button aria-label="voir la photo précédente" alt="précédent" onClick={goToPrevious} className={` ${slides.length === 1 ? 'not-displayed' : ''}`}>
                    <i className="fa-solid fa-chevron-left" />
                </button>
                <button aria-label="voir la photo suivante" alt="suivant" onClick={goToNext} className={` ${slides.length === 1 ? 'not-displayed' : ''}`}>
                    <i className="fa-solid fa-chevron-right" />
                </button>
            </div>
            <div className={`carousel__navigation ${slides.length === 1 ? 'not-displayed' : ''}`}>
                {currentIndex + 1}/{slides.length}
            </div>
        </div>
    )
}

Carousel.propTypes ={
    pictures: PropTypes.array,
    alt: PropTypes.string
}

export default Carousel
