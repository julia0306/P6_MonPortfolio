import { useState } from 'react';
import PropTypes from 'prop-types';
import "../../Assets/style/collapsible.scss"

const Collapsible = ({className, title, content}) => {
  const [isRotated, setIsRotated] = useState(true);
  const [isExpanded, setIsExpanded] = useState (false);
  const [isClosedOnOpening, setIsClosedOnOpening] = useState (true)

  const handleCollapsibleToggle = () => {
    setIsRotated(!isRotated);
    setIsExpanded(!isExpanded);
    setIsClosedOnOpening(false);
  };

    return (
    <div className={className}>
      <div className="collapsibles__individual__container">
        <div className="collapsibles__individual__titleZone">
          <h4 className="collapsibles__individual__title">
            {title}
          </h4>
          <button className="collapsibles__individual__icon" aria-label ="Voir plus de contenu" onClick={handleCollapsibleToggle}>
            <i className={`fa-sharp fa-solid fa-chevron-up ${!isRotated ? 'rotate-down' : 'rotate-up'}`} />
          </button>
        </div>
        <div className={`${isClosedOnOpening ? 'collapsibles__individual__content--not-displayed' : (isExpanded ? 'collapsibles__individual__content--expanded' : 'collapsibles__individual__content--collapsed')}`}>
          <div className='collapsibles__individual__sizer'>
            {content}
          </div>
        </div>
      </div>
    </div>
    )
    }

Collapsible.propTypes ={
  className: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.array
}
    

export default Collapsible
