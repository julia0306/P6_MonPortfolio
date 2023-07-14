import PropTypes from 'prop-types';
import "../../Assets/style/comicPanels.scss"

// je passe mes props en paramètres afin de les récupérer de manière dynamique
function ComicPanel({src, alt, title, imageTitle, text}) {
    return (
            <div className="comicPanel">
                <div className='comicPanel__image'>
                    <img 
                        src={src}
                        alt={alt}
                        title={imageTitle} 
                    />
                </div>
                <div >
                    <h3>
                        {title}
                    </h3>
                    <p className='comicPanel__text'>
                        {text}
                    </p>
                </div>
            </div>
    )
}

ComicPanel.propTypes ={
    src: PropTypes.string,
    alt: PropTypes.string,
    title: PropTypes.string,
    imageTitle: PropTypes.string,
    text: PropTypes.string
}

export default ComicPanel