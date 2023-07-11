import { Navigate } from 'react-router-dom';
import allProjects from '../../Data/Projects.json';
import { useParams } from 'react-router-dom';
import Carousel from '../../Components/Carousel/carousel';
import TextZone from '../../Components/Text-zone/text-zone';
import Tag from '../../Components/Tag/tag';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';


function Project() {
    const location = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);

    const { id } = useParams();
    const selectedProject = allProjects.find(project => project.id === id);
    const {pictures} = selectedProject || {};
    const {description} = selectedProject || {} ;
    const {introduction} = selectedProject || {};
    const {technologies} = selectedProject || {};
    const {skills} = selectedProject || {};
    const {title} = selectedProject || {}
    const {link} = selectedProject || {}

    if (!selectedProject) {
        return <Navigate to="/error" />;
      } else {
    return (
        <main>
            <div className="section">
                <div className='section__header projects'>
                    <h1>{title}</h1>
                    <a href={link}><i className="fa-solid fa-link"></i></a>
                </div>
                <Carousel 
                    pictures={pictures}
                />
                <div className="tags">
                {technologies.map((technologies, index) => (
                    <Tag 
                    // Il n'y a pas d'id associée au tag. Pour la key, je fais donc une combinaison entre l'index et le nom du tag qui est une string
                        key={`${technologies}-${index}`} 
                        tagName={technologies} />
                        ))}
                </div>
                <TextZone
                    title ="Introduction"
                    text={introduction}/>
                <TextZone
                    title = "Description"
                    text={description}/>
                <div className='Skills'>
                <TextZone 
                    title = "Compétences"
                    textItems={skills.map((skill, index) => (
                        // Il n'y a pas d'id associée . Pour la key, je fais donc une combinaison entre l'index et le nom du tag qui est une string
                        <div className='skills' key={`${skill}-${index}`}>
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