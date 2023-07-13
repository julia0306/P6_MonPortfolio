import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../Assets/Images/logo.webp';
import "../../Assets/style/main.scss"

function Header() {
  useEffect(() => {
    const handleScroll = () => {
      const headerHeight = document.querySelector('header').offsetHeight;
      const navbar = document.querySelector('.navbar');
      const header = document.querySelector('.header');

      if (window.scrollY >= headerHeight) {
        navbar.classList.add('sticky');
        header.classList.add('not-displayed');
      } else {
        navbar.classList.remove('sticky');
        header.classList.remove('not-displayed');
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header>
      <div className='header'>
        <Link to="/">
          <img
            src={Logo}
            className='header__logo'
            alt="logo"
            height="180px"
            width="180px"
          />
        </Link>
        <h1>
          Julia Taylor
          <span>Développeuse web frontend</span>
        </h1>
      </div>

      <nav className="navbar">
        <NavLink
          to="/"
          activeClassName='navbar__links--active'
          className='navbar__links'>
          A propos
        </NavLink>
        <NavLink
          to="/skills"
          activeClassName='navbar__links--active'
          className='navbar__links'>
          Mes compétences
        </NavLink>
        <NavLink
          to="/projects"
          activeClassName='navbar__links--active'
          className='navbar__links'>
          Mes projets
        </NavLink>
        <NavLink
          to="/curriculum"
          activeClassName='navbar__links--active'
          className='navbar__links'>
          Mon parcours
        </NavLink>
        <NavLink
          to="/contact"
          activeClassName='navbar__links--active'
          className='navbar__links'>
          Contact
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;