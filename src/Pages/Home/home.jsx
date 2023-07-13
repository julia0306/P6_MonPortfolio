import ComicPanel from "../../Components/Comic-panels/comicPanels"
import TextZone from "../../Components/Text-zone/text-zone";
import contents from "../../Data/about.json";
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import "../../Assets/style/home.scss"


function Home() {
    const location = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);
    return (
        <main>
            <div className="welcome__message">
                <TextZone
                title= "Bonjour et bienvenue sur mon site portfolio."
                text="Je suis Julia Taylor et je suis développeuse web. Je termine actuellement une première formation certifiante, d'une durée de 6 mois, chez OpenClassrooms. Celle-ci m'a permis de consolider les connaissances que j'avais en HTML et CSS, de découvrir davantage en profondeur le Javascript et de m'initier également au développement back-end. Cette formation ayant confirmé l'orientation que je souhaite donner à ma carrière professionnelle, je suis actuellement à la recherche d'une alternance qui me permettra d'approfondir mes compétences en développement full-stack, le tout en acquérant une première expérience professionnelle dans ce domaine."
                text2= "De nationalité britannique, je suis expatriée en France depuis de longues années maintenant. J'y ai réalisé l'ensemble de mes études, en commençant par une licence en langues étrangères appliquées, en bifurquant par une année de médecine, en transitant par un master en enseignement et en aboutissant dans le domaine du développement web. Passionnée et curieuse, intéressée et ayant toujours envie d'apprendre, je vois dans ce secteur un terreau fertile pour continuer à me cultiver." text3="Au-delà de mon cursus, cette brève introduction me semble pouvoir se compléter par l'histoire ci-dessous. Ce récit n'a malheureusement jamais été publié ; son auteur (dont l'imagination est parfaitement débordante !) n'a même jamais été identifié... Elle a toutefois le mérite de me présenter de manière plus détaillée."
                />
            </div>
            <div className="fullwidth__container">
                {contents.map((content) => (
                    <ComicPanel key={content.id}
                        image={content.image}
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