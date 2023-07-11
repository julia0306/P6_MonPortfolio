import Gallery from "../../Components/Gallery/gallery";
import allProjects from "../../Data/Projects.json";
import TextZone from "../../Components/Text-zone/text-zone";
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Projects() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <main className="projects__main">
      <section className="projects__OC">
        <div className= "section__header">
            <h2>Projets OpenClassrooms</h2>
            <a href="https://github.com/julia0306">
              <i className="fa-brands fa-github"></i>
            </a>
        </div>
        <Gallery works={allProjects}/>
      </section>
      <section className="projects__personal">
        <div className= "section__header">
            <h2>Projets personnels</h2>
            <a href="https://github.com/julia0306">
              <i className="fa-brands fa-github"></i>
            </a>
        </div>
        <TextZone 
          text= "Dans cette section, vous trouverez prochainement mes projets personnels"
        />
      </section>
    </main>
  );
}

export default Projects;
