import logo from "../../Assets/Images/logo.webp"
import { Link } from "react-router-dom"

function Footer() {
    return (
        <div className="footer">
            {/* J'instaure un lien pour rediriger l'utilisateur vers la page d'accueil s'il clique sur le logo de Kasa */}
            <Link to="/">
                <img 
                    src={logo} 
                    alt='Kasa'
                    height="180px"
                    width="180px" 
                    className='footer__logo'/>
            </Link>
            <span className="footer__text">© 2023 | Julia Taylor</span>
            <span className="footer__text">Tous droits réservés</span>
        </div>
    )
}

export default Footer