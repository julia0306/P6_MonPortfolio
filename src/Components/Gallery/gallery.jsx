import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../Card/card';

function Gallery({ works }) {
  return (
    <div className="gallery">
      {works.map((work) => (
        <Link key={work.id} to={`/project/${work.id}`}>
          <Card
            cover={work.cover}
            title={work.title}
          />
        </Link>
      ))}
    </div>
  );
}

export default Gallery;