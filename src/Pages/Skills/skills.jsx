import { Link } from "react-router-dom";
import TurningCard from "../../Components/TurningCard/turningCard";
import SkillMap1300 from "../../Assets/Images/Skills.webp";
import SkillMap1000 from "../../Assets/Images/Skills1000.webp";
import SkillMap600 from "../../Assets/Images/Skills600.webp";
import SkillMap400 from "../../Assets/Images/Skills400.webp"
import Collapsible from "../../Components/Collapsible/collapsible";
import ComicPanel from "../../Components/Comic-panels/comicPanels";
import projects from "../../Data/Projects.json";
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
                <div>
                    <div className= "section__header no-top-margin">
                        <h2>Compétences linguistiques</h2>
                            <img 
                                src="https://i.ibb.co/GxQ0zPy/languages.png"
                                alt= "languages"
                            />
                    </div>
                    <div className="skills__languages">
                        <TurningCard
                            image="https://i.ibb.co/2F9wBmR/english.webp" 
                            alt="anglais"
                            info= "Langue maternelle"
                        />
                        <TurningCard
                            image="https://i.ibb.co/QK59KVq/german.webp" 
                            alt="allemand"
                            info={
                                <div>
                                  Compétence professionnelle
                                  <br />
                                  <br/>
                                  Niveau C1
                                  <br/>
                                  8 ans de pratique 
                                </div>
                              }
                        
                        />
                        <TurningCard
                            image="https://i.ibb.co/YfhZVZ6/japanese.webp" 
                            alt="japonais"
                            info={
                                <div>
                                  Notions
                                  <br/>
                                  <br/>
                                  2 ans de pratique
                                </div>
                              }
                        />
                    </div>
                </div>
                <div className="skills__technical">
                    <div className= "section__header">
                        <h2 id="test">Compétences techniques</h2>
                        <img 
                            src="https://i.ibb.co/JcH0Yrx/Computer-desk-school-education-workplace-icon.png" 
                            alt="compétences techniques"
                        />
                    </div>
                    <div className="skills__map">
                        <div className="textZone">
                            <h3>Liens vers les projets ayant validé les compétences</h3>
                            <div className="image-container">
                            <img
                                src={SkillMap1300}
                                alt="roadmap de formation"
                                srcSet={`${SkillMap1300} 1300w, ${SkillMap1000} 1000w, ${SkillMap600} 600w, ${SkillMap400} 400w`}
                                sizes="(max-width: 00px) 400px, (max-width: 780px) 600px, (max-width: 1200px) 1000px, (min-width: 1025px) 100vw"
                                max-width="1300px"
                                max-height="480px"
                            />
                                <div className="skills__buttons">
                                    <Link to="/project/1" title="Voir le projet Booki">
                                        <button className="skills__button skills__button__2" aria-label='voir le projet "Booki"'></button>
                                    </Link>
                                    <Link to="/project/2" title="Voir le projet Sophie Bluel">
                                        <button className="skills__button skills__button__3" aria-label='voir le projet "Sophie Bluel"'></button>
                                    </Link>
                                    <Link to="/project/3" title="Voir le projet Menu Maker">
                                        <button className="skills__button skills__button__4" aria-label='voir le projet "Menu Maker"'></button>
                                    </Link>
                                    <Link to="/project/4" title="Voir le projet Nina Carducci">
                                        <button className="skills__button skills__button__5" aria-label='voir le projet "Nina Carducci"'></button>
                                    </Link>
                                    <Link to="/project/5" title="Voir le projet Kasa">
                                        <button className="skills__button skills__button__6" aria-label='voir le projet "Kasa"'></button>
                                    </Link>
                                    <Link to="/project/6" title="Voir le projet Mon vieux Grimoire">
                                        <button className="skills__button skills__button__7" aria-label='voir le projet "Mon Vieux Grimoire"'></button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="collapsibles__zone">
                        <h3>Les compétences en détail</h3>
                            {projects.map((project) => (
                                <div className={project.className} 
                                key={project.id}>
                                    <div className="collapsibles__individual">
                                            <Collapsible
                                            title={project.skillsTitle}
                                            content={project.skills.map((skill, index) => (
                                                <p key={`${skill}-${index}`}>{skill}</p>
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
                            alt="compétences transversales"
                        />
                    </div>
                    <div className="skills__soft__container">
                        {skills.map((skill, index) => (
                            <ComicPanel
                                key={`${skill.title}-${index}`}
                                src={skill.image}
                                alt={skill.alt}
                                imageTitle={skill.title}
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