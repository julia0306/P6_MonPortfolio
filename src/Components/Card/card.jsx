import PropTypes from 'prop-types'

// je passe mes props en paramètres afin de les récupérer de manière dynamique
function Card({cover, title}) {
    return (
            <div className="cards">
                <img src={cover} alt={title} className="cards__cover" />
                <div className='cards__title'>{title}
                </div>
            </div>
    )
}

Card.propTypes ={
    cover: PropTypes.string,
    title: PropTypes.string,
}

export default Card
