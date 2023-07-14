import PropTypes from 'prop-types';

function TextZone({title, text, text2, text3, textItems}) {
    return (
        <div className="textZone">
            <h2>{title}</h2>
            <p>{text}</p>
            <p>{text2}</p>
            <p>{text3}</p>
            <div className= "textItems">{textItems}</div>
        </div>
    )
}
TextZone.propTypes ={
    title: PropTypes.string,
    text: PropTypes.string,
    text2: PropTypes.string,
    text3: PropTypes.string,
    textItems: PropTypes.array
}

export default TextZone