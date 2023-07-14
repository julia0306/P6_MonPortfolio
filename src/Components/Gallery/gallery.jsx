import { Link } from 'react-router-dom';
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

export default Gallery;