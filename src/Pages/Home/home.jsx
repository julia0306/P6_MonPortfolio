import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// J'importe les composants dont j'ai besoin
import ComicPanel from "../../Components/Comic-panels/comicPanels"
import TextZone from "../../Components/Text-zone/text-zone";
// J'importe les données au format JSON
import contents from "../../Data/about.json";
// j'importe la feuille de style
import "../../Assets/style/home.scss"


function Home() {
  // J'instaure la redirection vers le haut de la page lorsque l'utilisateur navigue de page en page 
    const location = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);

    return (
      <main>
          <div className="welcome__message">
              <TextZone
                title= "Bonjour et bienvenue sur mon site portfolio. Celui-ci vous présentera mon parcours de formation. Il se focalisera sur le parcours de "développeur intégrateur web" que j'ai suivi chez OpenClassrooms pendant une durée de 6 mois. Il sera, par ailleurs, complété par mes projets personnels au fil du temps et de mes réalisations. Axée sur une pédagogie de projets, la formation OpenClassrooms m'a permis de consolider les connaissances que j'avais en HTML et CSS. Par ailleurs, elle a été l'occasion pour moi de découvrir davantage en profondeur le Javascript et de m'initier également au développement back-end. Cette formation ayant confirmé l'orientation que je souhaite donner à ma carrière professionnelle, je suis actuellement à la recherche d'un poste en entreprise (ou au sein d'une association) qui me permettra d'approfondir mes compétences en développement, le tout en acquérant une première expérience professionnelle dans ce domaine."
                text2= "De nationalité britannique, je suis expatriée en France depuis de longues années maintenant. J'y ai réalisé l'ensemble de mes études, en commençant par une licence en langues étrangères appliquées, en bifurquant par une année de médecine, en transitant par un master en enseignement et en aboutissant dans le domaine du développement web. Passionnée et curieuse, intéressée et ayant toujours envie d'apprendre, je vois dans ce secteur un terreau fertile pour continuer à me cultiver." 
                text3="Au-delà de mon cursus, cette brève introduction me semble pouvoir se compléter par l'histoire ci-dessous. Ce récit n'a malheureusement jamais été publié ; son auteur (dont l'imagination est parfaitement débordante !) n'a même jamais été identifié... Elle a toutefois le mérite de me présenter de manière plus détaillée."
              />
          </div>
          <div className="fullwidth__container">
            {contents.map((content, index) => (
              <ComicPanel
                key={`${content}-${index}`}
                src={content.src}
                alt={content.alt}
                imageTitle={content.imageTitle}
                title={content.title}
                text={content.text}
              />
            ))}
          </div>
      </main>
    );
}
 
export default Home
