import { useState } from "react";

function TurningCard({ image, alt, info, title }) {
  const [isTurnedOver, setIsTurnedOver] = useState(false);
  const [isMouseOver, setIsMouseOver] = useState(false);

  const handleMouseEnter = () => {
    setIsMouseOver(true);
    setIsTurnedOver(true);
  };

  const handleMouseLeave = () => {
    setIsMouseOver(false);
    setIsTurnedOver(false);
  };

  return (
    <div>
        <div className={` ${!isMouseOver && isTurnedOver ? " turningCard not-displayed" : "turningCard "}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        
            style={{
                transition: "opacity 0s ease",
                display: !isTurnedOver ? "flex" : "none",
            }}
        >
            <img 
            src={image}
            alt={alt}
            style={{
                transition: "opacity 0s ease",
                display: !isTurnedOver ? "flex" : "none",
            }}
            />
            <div className='turningCard__title'>{title}</div>
        </div>
        <div className={` ${isMouseOver && isTurnedOver ? "turningCard " : "not-displayed"}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
        <div className={`turningCard__text`}>
            {info}
        </div>
        <button className="turningCard__button">En savoir plus</button>
        </div>
    </div>
  );
}

export default TurningCard;