import PropTypes from 'prop-types';
import "../../Assets/style/tag.scss"

function Tag({source, title}) {
    return (
        <div className="tag">
            <img 
                src={source} 
                alt={title} 
                title={title}
            />
        </div>
    )
}

Tag.propTypes ={
    source: PropTypes.string,
    title: PropTypes.string

}

export default Tag