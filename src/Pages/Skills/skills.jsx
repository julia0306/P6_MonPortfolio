import { Link } from "react-router-dom";
import TurningCard from "../../Components/TurningCard/turningCard";
import Image from "../../Assets/Images/Skillsmap.png";
import Collapsible from "../../Components/Collapsible/collapsible";
import works from "../../Data/Projects.json";

function Skills() {
    return (
            <main className="skills__main">
              {/* Voir si poss de supprimer la balise section et la remplacer par "main" */}
                <section className="section">
                    <div className= "section__header">
                        <h2>Compétences linguistiques</h2>
                            <img 
                                src="https://i.ibb.co/GxQ0zPy/languages.png"
                                alt= "languages"
                            />
                    </div>
                    <div className="fc__skills">
                        <TurningCard
                            image="https://i.ibb.co/4f6n3M0/English.png" 
                            alt="English"
                            info= "Langue maternelle"
                        
                        />
                        <TurningCard
                            image="https://i.ibb.co/gdcXwxb/German.png" 
                            alt="German"
                            info= "Niveau C1"
                        
                        />
                        <TurningCard
                            image="https://i.ibb.co/xLfz9LX/Japanese.png" 
                            alt="Japanese"
                            info= "Notions"
                        />
                    </div>

                </section>
                <section className="section technical__skills">
                    <div className= "section__header header__spacer">
                        <h2 id="test">Compétences techniques</h2>
                        <img 
                            src="https://i.ibb.co/JcH0Yrx/Computer-desk-school-education-workplace-icon.png" 
                            alt="technical skills"
                        />
                    </div>
                    <div className="textZone">
                        <h3>Accès aux projets ayant validé les compétences</h3>
                        <img src={Image} alt="roadmap de formation"/>
                    </div> 
                    <div className= "skills__buttons">
                    <Link to="/" ><button className="skills__button skills__button__1"></button></Link>
                    <Link to="/project/1" title="Voir le projet"><button className="skills__button skills__button__2"></button></Link>
                    <Link to="/project/2" title="Voir le projet"><button className="skills__button skills__button__3"></button></Link>
                    <Link to="/project/3" title="Voir le projet"><button className="skills__button skills__button__4"></button></Link>
                    <Link to="/project/4" title="Voir le projet"><button className="skills__button skills__button__5"></button></Link>
                    <Link to="/project/5" title="Voir le projet"><button className="skills__button skills__button__6"></button></Link>
                    <Link to="/project/6" title="Voir le projet"><button className="skills__button skills__button__7"></button></Link>
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
                </section>
                <section className="section">
                    <div className= "section__header header__spacer">
                        <h2>Soft skills</h2>
                        <img 
                            src="https://i.ibb.co/JcH0Yrx/Computer-desk-school-education-workplace-icon.png" 
                            alt="technical skills"
                        />
                    </div>
                    <div className="fullwidth__container fc__skills">

                    </div>
                </section>
            </main>
    )
}
 
export default Skills