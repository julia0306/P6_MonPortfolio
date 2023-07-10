import PropTypes from 'prop-types'

function Tag({tagName}) {
    return (
        <div className="tag">
            <img src={tagName} alt={tagName} title={tagName}/>
        </div>
    )
}

Tag.propTypes ={
    text: PropTypes.string,
}

export default Tag