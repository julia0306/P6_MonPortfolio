import { Link } from "react-router-dom";
import TurningCard from "../../Components/TurningCard/turningCard";
import Image from "../../Assets/Images/SkillsMap_finished.webp";
import Collapsible from "../../Components/Collapsible/collapsible";
import ComicPanel from "../../Components/Comic-panels/comicPanels";
import works from "../../Data/Projects.json";
import skills from "../../Data/skills.json";
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import "../../Assets/style/skills.scss"

function Skills() {
    const location = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);
    return (
            <main className="skills">
              {/* Voir si poss de supprimer la balise section et la remplacer par "main" */}
                <div>
                    <div className= "section__header">
                        <h2>Compétences linguistiques</h2>
                            <img 
                                src="https://i.ibb.co/GxQ0zPy/languages.png"
                                alt= "languages"
                            />
                    </div>
                    <div className="skills__languages">
                        <TurningCard
                            image="https://i.ibb.co/4f6n3M0/English.png" 
                            alt="English"
                            info= "Langue maternelle"
                        
                        />
                        <TurningCard
                            image="https://i.ibb.co/gdcXwxb/German.png" 
                            alt="German"
                            info= "Compétence professionnelle. Niveau C1"
                        
                        />
                        <TurningCard
                            image="https://i.ibb.co/xLfz9LX/Japanese.png" 
                            alt="Japanese"
                            info= "Notions"
                        />
                    </div>
                </div>
                <div className="skills__technical">
                    <div className= "section__header">
                        <h2 id="test">Compétences techniques</h2>
                        <img 
                            src="https://i.ibb.co/JcH0Yrx/Computer-desk-school-education-workplace-icon.png" 
                            alt="technical skills"
                        />
                    </div>
                    <div className="skills__map">
                        <div className="textZone">
                            <h3>Liens vers les projets ayant validé les compétences</h3>
                            <div className="image-container">
                                <img src={Image} alt="roadmap de formation" />
                                <div className="skills__buttons">
                                    <Link to="/project/1" title="Voir le projet">
                                        <button className="skills__button skills__button__2" alt='voir le projet "Booki"'></button>
                                    </Link>
                                    <Link to="/project/2" title="Voir le projet">
                                        <button className="skills__button skills__button__3" alt='voir le projet "Sophie Bluel"'></button>
                                    </Link>
                                    <Link to="/project/3" title="Voir le projet">
                                        <button className="skills__button skills__button__4" alt='voir le projet "Menu Maker"'></button>
                                    </Link>
                                    <Link to="/project/4" title="Voir le projet">
                                        <button className="skills__button skills__button__5" alt='voir le projet "Nina Carducci"'></button>
                                    </Link>
                                    <Link to="/project/5" title="Voir le projet">
                                        <button className="skills__button skills__button__6" alt='voir le projet "Kasa"'></button>
                                    </Link>
                                    <Link to="/project/6" title="Voir le projet">
                                        <button className="skills__button skills__button__7" alt='voir le projet "Mon Vieux Grimoire"'></button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="collapsibles__zone">
                        <h3>Les compétences en détail</h3>
                            {works.map((work) => (
                                <div className={work.className} 
                                key={work.id}>
                                    <div className="collapsibles__individual">
                                            <Collapsible
                                            title={work.skillsTitle}
                                            content={work.skills.map((skill) => (
                                                <p key={skill}>{skill}</p>
                                            ))}
                                            />
                                    
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
                <div className="skills__soft">
                    <div className= "section__header">
                        <h2>Soft skills</h2>
                        <img 
                            src="https://i.ibb.co/JcH0Yrx/Computer-desk-school-education-workplace-icon.png" 
                            alt="technical skills"
                        />
                    </div>
                    <div className="skills__soft__container">
                {skills.map((skill) => (
                    <ComicPanel key={skill.id}
                        image={skill.image}
                        alt={skill.title}
                        title={skill.title}
                        text={skill.text}
                    />
                ))}
            </div>
                </div>
            </main>
    )
}
 
export default Skills