import { Navigate } from 'react-router-dom';
import allProjects from '../../Data/Projects.json';
import { useParams } from 'react-router-dom';
import Carousel from '../../Components/Carousel/carousel';
import TextZone from '../../Components/Text-zone/text-zone';
import Tag from '../../Components/Tag/tag';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import "../../Assets/style/project.scss";
import { Link } from 'react-router-dom';


function Project() {
    const location = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);

    const { id } = useParams();
    const selectedProject = allProjects.find(project => project.id === id);
    const {pictures} = selectedProject || [];
    const {description} = selectedProject || {} ;
    const {introduction} = selectedProject || {};
    const {technologies} = selectedProject || {};
    const {skills} = selectedProject || {};
    const {title} = selectedProject || {};
    const {link} = selectedProject || {};
    const {problématiques} = selectedProject || {};
    const {alt} = selectedProject || {}


    if (!selectedProject) {
        return <Navigate to="/error" />;
      } else {
    return (
        <main>
            <div className="project__individual">
                <div className='section__header'>
                    <h2>
                        {title}
                    </h2>
                    <Link to={link} aria-label="Accéder à Github">
                        <i className="fa-brands fa-github"></i>
                    </Link>
                </div>
                <Carousel 
                    pictures={pictures}
                    alt={alt}
                />
                <div className="tags">
                    {technologies.map((technology, index) => (
                        <Tag 
                            key={`${technology.title}-${index}`} 
                            source={technology.image}
                            title={technology.title} 
                        />
                    ))}
                </div>
                <Link to={link} aria-label="voir le projet sur Github"><button className="linkToProject__button">Cliquer ici pour voir le projet</button></Link>
                <TextZone
                    title ="Introduction"
                    text={introduction}
                    link={link}
                />
                <TextZone
                    title = "Description"
                    text={description}
                />
                <TextZone
                    title = "Problématiques rencontrées"
                    text={problématiques}
                />
                <div className='Skills'>
                    <TextZone 
                        title = "Compétences"
                        textItems={skills.map((skill, index) => (
                            <div className='project__skills' key={`${skill}-${index}`}>
                                {skill}
                            </div>
                        ))}
                    />
                </div>

            </div>
        </main>
    )
}
}
export default Project