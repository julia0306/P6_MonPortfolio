import image from "../../Assets/Images/travail.webp";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import "../../Assets/style/footer.scss"

function Footer() {
    return (
        <div className="footer">
            {/* J'instaure un lien pour rediriger l'utilisateur vers la page d'accueil s'il clique sur le logo de Kasa */}
            <Link to="/" aria-label="retourner à la page d'accueil">
                <img 
                    src={image} 
                    alt='Kasa'
                    height="122px"
                    width="122px" 
                    className='footer__logo'
                    loading="lazy"/>
            </Link>
            <span className="footer__text">© 2023 | Julia Taylor</span>
            <span className="footer__text">Tous droits réservés</span>
        </div>
    )
}

Footer.propTypes ={
    image: PropTypes.string
  }

export default Footer