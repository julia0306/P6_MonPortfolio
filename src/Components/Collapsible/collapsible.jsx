import { useState } from 'react'

// Je passe mes props en paramètres afin d'en récupérer la valeur de manière dynamique 
const Collapsible = ({className, title, content}) => {
  // On définit la valeur (bouléenne) des states suivants :
  const [isRotated, setIsRotated] = useState(true);
  const [isExpanded, setIsExpanded] = useState (false);
  const [isClosedOnOpening, setIsClosedOnOpening] = useState (true)

  const handleCollapsibleToggle = () => {
    // Cette fonction va faire permuter la valeur de chacun des states ci-dessous
    setIsRotated(!isRotated);
    setIsExpanded(!isExpanded);
    // La fonction, une fois lancée va définir "isClosedOnOpening" comme false. En effet, ce state permet simplement de ne pas afficher d'animation au moment du chargement initial de la page
    setIsClosedOnOpening(false);
  };

    return (
      // Grâce aux props, je récupère le className défini au niveau des pages qui affichent un collapsible ("About" et "Properties")
    <div className={className}>
      <div className="collapsibles__individual__container">
        <div className="collapsibles__individual__titleZone">
          {/* On récupère le titre défini au niveau des pages qui affichent un collapsible */}
          <h2 className="collapsibles__individual__title">{title}</h2>
          {/* Au clic, on appelle la fonction "handleCollapsibleToggle()" */}
          <button className="collapsibles__individual__icon" onClick={handleCollapsibleToggle}>
            {/* Si l'icône a séjà subi une rotation ('isRotated'), alors on lui redonne sa position initiale. Sinon, on lui fait subir une rotation de -180°  */}
            <i className={`fa-sharp fa-solid fa-chevron-up ${!isRotated ? 'rotate-down' : 'rotate-up'}`} />
          </button>
        </div>
        {/* Pour le contenu du collapsible, il doit être caché au chargement de la page. On définit "isClosedOnOpening comme "true". La condition "isClosedOnOpening" étant true, on applique le modificateur "--not-displayed" au contenu (display: none)
          Si le collapsible est déployé (isExpanded), on applique le modificateur "--expanded" (ensemble des propriétés relatives au contenu + animation); sinon, on applique le modificateur "--collapsed" (max height: 0 -> animation pour retour en position initiale)
         */}
        <div className={`${isClosedOnOpening ? 'collapsibles__individual__content--not-displayed' : (isExpanded ? 'collapsibles__individual__content--expanded' : 'collapsibles__individual__content--collapsed')}`}>
          <div className='collapsibles__individual__sizer'>
            {content}
          </div>
        </div>
      </div>
    </div>
    )
    }

export default Collapsible
