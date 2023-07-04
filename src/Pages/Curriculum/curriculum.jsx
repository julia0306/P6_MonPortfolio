import studyIcon from "../../Assets/Images/studyIcon.png"
import workIcon from "../../Assets/Images/workIcon.png"

function Curriculum(){
    return(
<main>
    <div className="fullwidth__container curriculum">
    <ul className="vertical-timeline">
        <li className="vertical-timeline-element">
        <div className="vertical-timeline-element-content">
            <h3 className="vertical-timeline-element-title">Formation certifiante "Développeuse web"</h3>
            <h4 className="vertical-timeline-element-subtitle">OpenClassrooms</h4>
            <p>
            Développeur intégrateur web - titre RNCP : code NSF-326t
            </p>
            <p>
                Janvier 2023 - Juillet 2023 
            </p>
        </div>
        <div className="vertical-timeline-element-icon">
            <img src={studyIcon} alt="studies"/>
        </div>
        </li>
        <li className="vertical-timeline-element">
        <div className="vertical-timeline-element-content">
            <h3 className="vertical-timeline-element-title">Professeure des écoles</h3>
            <h4 className="vertical-timeline-element-subtitle">Académie de Rennes</h4>
            <p>
            Enseignement de la petite section au CM2, ainsi qu'en enseignement spécialisé
            </p>
            <p>
            Septembre 2015 - Aout 2022
            </p>
        </div>
        <div className="vertical-timeline-element-icon">
            <img src={workIcon} alt="work"/>
        </div>
        </li>
        <li className="vertical-timeline-element">
        <div className="vertical-timeline-element-content content3">
            <h3 className="vertical-timeline-element-title">Concours de Recrutement des Professeurs des Ecoles (CRPE)</h3>
            <h4 className="vertical-timeline-element-subtitle">Académie de Rennes</h4>
            <p>
            174ème / 998 présents
            </p>
            <p>
            Option Sciences
            </p>
            <p>
            Avril - Juillet 2015
            </p>
        </div>
        <div className="vertical-timeline-element-icon">
            <img src={studyIcon} alt="studies"/>
        </div>
        </li>
        <li className="vertical-timeline-element">
        <div className="vertical-timeline-element-content">
            <h3 className="vertical-timeline-element-title">Master Métiers de l'Enseignement, de l'Education et de la Formation</h3>
            <h4 className="vertical-timeline-element-subtitle">Ecole Supérieure du Professorat et de l'Education - Vannes et Rennes</h4>
            <p>
            2013-2015
            </p>
        </div>
        <div className="vertical-timeline-element-icon">
            <img src={studyIcon} alt="studies"/>
        </div>
        </li>
        <li className="vertical-timeline-element">
        <div className="vertical-timeline-element-content">
            <h3 className="vertical-timeline-element-title">Licence Langues Etrangères Appliquées - Parcours Commerce International</h3>
            <h4 className="vertical-timeline-element-subtitle">Université de Rennes II</h4>
            <p>
            2009 - 2012
            </p>
        </div>
        <div className="vertical-timeline-element-icon">
            <img src={studyIcon} alt="studies"/>
        </div>
        </li>
    </ul>
  </div>
</main>
    )
}

export default Curriculum