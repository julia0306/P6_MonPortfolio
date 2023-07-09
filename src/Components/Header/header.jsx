import { Link, NavLink } from 'react-router-dom'
import Logo from '../../Assets/Images/logo.png'
 
function Header() {
    return (
        <header>
            {/* J'utilise "Link" (de React-router) pour naviguer entre les pages */}
            {/* Je redirige vers la page d'accueil au clic sur le logo */}
            <div className='header'>
                <Link to="/">
                        <   img src={Logo}
                            className='header__logo'
                            alt="logo"
                        />
                </Link>
                <h1>Julia Taylor
                    <span>Développeuse web frontend</span>
                </h1>
            </div>
            
            <nav className="navbar">
                {/* NavLink est un composant proche de Link, mais il permet d'appliquer du style au Link. Je l'utilise car je souhaite modifier lorsque le lien sera actif */}
                <NavLink
                    to="/"
                    // J'utilise une condition pour déterminer le className du lien. Je différencie le style s'il est actif
                    className={({isActive}) => isActive ? 'navbar__links navbar__links--active' : 'navbar__links'}>
                        <span>A propos</span>
                        <i className="fa-solid fa-house-user"></i>
                </NavLink>
                <NavLink
                    to="/skills" 
                    className={({isActive}) => isActive ? 'navbar__links navbar__links--active' : 'navbar__links'}>
                       Mes compétences
                </NavLink>
                <NavLink
                    to="/projects" 
                    className={({isActive}) => isActive ? 'navbar__links navbar__links--active' : 'navbar__links'}>
                       Mes projets
                </NavLink>
                <NavLink
                    to="/curriculum" 
                    className={({isActive}) => isActive ? 'navbar__links navbar__links--active' : 'navbar__links'}>
                       Mon parcours
                </NavLink>
                <NavLink
                    to="/contact" 
                    className={({isActive}) => isActive ? 'navbar__links navbar__links--active' : 'navbar__links'}>
                       Contact
                </NavLink>
            </nav>
        </header>
    )
}

export default Header