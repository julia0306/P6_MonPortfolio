import Gallery from "../../Components/Gallery/gallery";
import allProjects from "../../Data/Projects.json";
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
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
            <h2>Projets OpenClassrooms</h2>
            <a href="https://github.com/julia0306">
              <i className="fa-brands fa-github"></i>
            </a>
        </div>
        <Gallery works={allProjects}/>
      </div>
    </main>
  );
}

export default Projects;
