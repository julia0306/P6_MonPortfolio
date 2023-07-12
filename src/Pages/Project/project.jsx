import { Navigate } from 'react-router-dom';
import allProjects from '../../Data/Projects.json';
import { useParams } from 'react-router-dom';
import Carousel from '../../Components/Carousel/carousel';
import TextZone from '../../Components/Text-zone/text-zone';
import Tag from '../../Components/Tag/tag';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import "../../Assets/style/project.scss"


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
    const {problématiques} = selectedProject || {}

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
                    <a href={link}>
                        <i className="fa-brands fa-github"></i>
                    </a>
                </div>
                <Carousel 
                    pictures={pictures}
                />
                <div className="tags">
                    {technologies.map((technologies, index) => (
                        <Tag 
                            key={`${technologies}-${index}`} 
                            tagName={technologies} 
                        />
                    ))}
                </div>
                <TextZone
                    title ="Introduction"
                    text={introduction}
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