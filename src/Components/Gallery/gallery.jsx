import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import TurningCard from "../../Components/TurningCard/turningCard";


function Gallery({ works }) {
  return (
    <div className="gallery">
      {works.map((work) => (
        <Link key={work.id} to={`/project/${work.id}`}>
          <TurningCard
            image={work.cover}
            alt={work.alt}
            title={work.title}
            info={work.info}
          />
        </Link>
      ))}
    </div>
  );
}

Gallery.propTypes ={
  image: PropTypes.string,
  alt: PropTypes.string,
  info: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string
}

export default Gallery;