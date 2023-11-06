

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Gallery from "../../Components/Gallery/gallery";
import OCProjects from "../../Data/Projects.json";
import PersonalProjects from "../../Data/Projects2.json";
import "../../Assets/style/projects.scss"

function Projects() {

  // pour bien revenir en haut de page lors de clics sur des liens internes
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <main className="projects">
      <div className="projects__OC">
        <div className= "section__header">
            <h2>
              Projets OpenClassrooms
            </h2>
            <a href="https://github.com/julia0306" aria-label="lien vers Github">
              <i className="fa-brands fa-github"></i>
            </a>
        </div>
        <Gallery 
          works={OCProjects}
        />
      </div>
      <div className="projects__OC">
        <div className= "section__header">
            <h2>
              Projets personnels
            </h2>
            <a href="https://github.com/julia0306" aria-label="lien vers Github">
              <i className="fa-brands fa-github"></i>
            </a>
        </div>
        <Gallery 
          works={PersonalProjects}
        />
      </div>
    </main>
  );
}

export default Projects;
