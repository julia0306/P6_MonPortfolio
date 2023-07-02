import Gallery from "../../Components/Gallery/gallery";

function Projects() {
  return (
    <main>
      {/* Voir si poss de supprimer la balise section et la remplacer par "main" */}
      <section className="section">
        <div className= "section__header">
            <h2>Projets OpenClassrooms</h2>
            <a href="https://github.com/julia0306">
              <i className="fa-brands fa-github"></i>
            </a>
        </div>
        <Gallery/>
      </section>
    </main>
  );
}

export default Projects;
