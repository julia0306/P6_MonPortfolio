import PropTypes from 'prop-types'

// je passe mes props en paramètres afin de les récupérer de manière dynamique
function ComicPanel({image, title, text}) {
    return (
            <div className="comicPanel">
                <div className='comicPanel__image'>
                    <img 
                        src={image} 
                        alt={title} 
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
    image: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string
}

export default ComicPanel