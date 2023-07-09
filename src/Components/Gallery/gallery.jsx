import React from 'react';
import { Link } from 'react-router-dom';
import TurningCard from "../../Components/TurningCard/turningCard";


function Gallery({ works }) {
  return (
    <div className="gallery">
      {works.map((work) => (
        <Link key={work.id} to={`/project/${work.id}`}>
          <TurningCard
            image={work.cover}
            alt={work.title}
            title={work.title}
            info={work.info}
          />
        </Link>
      ))}
    </div>
  );
}

export default Gallery;