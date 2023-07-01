import Card from "../Card/card";
import { Link } from "react-router-dom";
import allProjects from "../../Data/Projects.json";

function Gallery() {
    return (
        <div className="gallery">
            {allProjects.map((project) => (
                <Link  key={project.id} to={`/project/${project.id}`}>
                    <Card 
                    cover={project.cover}
                    title={project.title}
                    />
                </Link>
            ))}
        </div>
    )
}

export default Gallery