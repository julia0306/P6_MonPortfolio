import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../Assets/Images/logo.webp';
import "../../Assets/style/main.scss"

function Header() {
  useEffect(() => {
    const handleScroll = () => {
      // Calcul de la hauteur du header
      const headerHeight = document.querySelector('header').offsetHeight;
      const navbar = document.querySelector('.navbar');
      const header = document.querySelector('.header');
      // Quand le scroll dépasse la hauteur du header, je n'affiche plus le header et je passe la barre de navigation en sticky
      if (window.scrollY >= headerHeight) {
        navbar.classList.add('sticky');
        header.classList.add('not-displayed');
      // Sinon, je retire ces réglages
      } else {
        navbar.classList.remove('sticky');
        header.classList.remove('not-displayed');
      }
    };
    // J'ajoute un écouteur d'événement pour gérer la fonction handleScroll
    window.addEventListener('scroll', handleScroll);
  })

  return (
    <header>
      <div className='header'>
        <Link to="/">
          <img
            src={Logo}
            className='header__logo'
            alt="en train de travailler sur PC"
            height="180px"
            width="180px"
          />
        </Link>
        <h1>
          Julia Taylor
          <span>Développeuse web junior</span>
        </h1>
      </div>

      <nav className="navbar">
        <NavLink
          to="/"
          className="navbar__links">
          A propos
        </NavLink>
        <NavLink
          to="/skills"
          className="navbar__links">
          Mes compétences
        </NavLink>
        <NavLink
          to="/projects"
          className="navbar__links">
          Mes projets
        </NavLink>
        <NavLink
          to="/curriculum"
          className="navbar__links">
          Mon parcours
        </NavLink>
        <NavLink
          to="/contact"
          className="navbar__links">
          Contact
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;