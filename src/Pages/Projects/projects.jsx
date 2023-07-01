import Gallery from "../../Components/Gallery/gallery";

function Projects() {
  return (
    <section className="section">
      <div className= "section__header">
          <h2>Projets OpenClassrooms</h2>
          <a href="https://github.com/julia0306">
            <i className="fa-brands fa-github"></i>
          </a>
      </div>
      <Gallery/>
    </section>
  );
}

export default Projects;
