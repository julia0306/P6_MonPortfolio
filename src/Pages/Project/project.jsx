import { Navigate } from 'react-router-dom';
import allProjects from '../../Data/Projects.json';
import { useParams } from 'react-router-dom';
import Carousel from '../../Components/Carousel/carousel';
function Project() {
    const { id } = useParams();
    const selectedProject = allProjects.find(project => project.id === id);
    const {title} = selectedProject || {};
    const {pictures} = selectedProject || {}

    if (!selectedProject) {
        return <Navigate to="/error" />;
      } else {
    return (
        <main>
            <div className="section">
                <Carousel 
                    pictures={pictures}
                />
                <div className="project">
                    <div className="project__info">
                        <h1 className="project__title">{title}</h1>
                    </div>
                </div>
            </div>
        </main>
    )
}
}
export default Project