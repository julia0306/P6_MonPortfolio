import ComicPanel from "../../Components/Comic-panels/comicPanels"
import TextZone from "../../Components/Text-zone/text-zone";
import contents from "../../Data/about.json"


function Home() {
    return (
        <main>
            <div className="welcome__message">
                <TextZone
                title= "Bonjour et bienvenue sur mon site portfolio. Je suis Julia Taylor et je suis développeuse web front-end."
                text= "De nationalité britannique, je suis expatriée en France depuis de longues années maintenant. J'y ai réalisé l'ensemble de mes études, en commençant par une licence en langues étrangères appliquées, en bifurquant par une année de médecine, en transitant par un master en enseignement et en aboutissant dans le domaine du développement web.Passionnée et curieuse, intéressée et ayant toujours envie d'apprendre, je vois dans ce secteur un terreau fertile pour continuer à me cultiver."
                text2= "Au-delà de mon cursus, cette brève introduction me semble pouvoir se compléter par l'histoire ci-desous. Ce récit n'a malheureusement jamais été publié; son auteur (dont l'imagination est parfaitement débordante !) n'a même jamais été identifié... Elle a toutefois le mérite de me présenter de manière plus détaillée. "
                />
            </div>
            <div className="fullwidth__container">
                {contents.map((content) => (
                    <ComicPanel key={content.id}
                        image={content.image}
                        alt={content.alt}
                        title={content.title}
                        text={content.text}
                    />
                ))}
            </div>
        </main>
    );
}
 
export default Home