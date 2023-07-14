import PropTypes from 'prop-types'

// je passe mes props en paramètres afin de les récupérer de manière dynamique
function ComicPanel({src, srcSet, sizes, title, alt, imageTitle, text}) {
    return (
            <div className="comicPanel">
                <div className='comicPanel__image'>
                    <img 
                        src={src}
                        srcSet={srcSet}
                        sizes={sizes} 
                        alt={alt}
                        title={imageTitle} 
                        loading="lazy"
                    />
                </div>
                <div >
                    <h3>{title}</h3>
                    <p className='comicPanel__text'>{text}</p>
                </div>
            </div>
    )
}

ComicPanel.propTypes ={
    src: PropTypes.string,
    srcSet:PropTypes.string,
    sizes:PropTypes.string,
    alt: PropTypes.string,
    imageTitle: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string
}

export default ComicPanel