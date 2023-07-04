
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
                    <div className="fullwidth__container skills">
                        <div className="skills__details">
                            <img 
                                src="https://i.ibb.co/4f6n3M0/English.png" 
                                alt="English" />
                            <span>Langue maternelle</span>
                        </div>
                        <div className="skills__details">
                            <img 
                                src="https://i.ibb.co/gdcXwxb/German.png" 
                                alt="German" />
                            <span>Niveau C1</span>
                        </div>
                        <div className="skills__details">
                            <img 
                                src="https://i.ibb.co/xLfz9LX/Japanese.png" 
                                alt="Japanese" />
                            <span>Notions</span>
                        </div>
                    </div>
                </section>
                <section className="section">
                    <div className= "section__header">
                        <h2>Compétences techniques</h2>
                        <img 
                            src="https://i.ibb.co/JcH0Yrx/Computer-desk-school-education-workplace-icon.png" 
                            alt="technical skills"
                        />
                    </div>
                    <div className="fullwidth__container skills">

                    </div>
                </section>
            </main>
    )
}
 
export default Skills