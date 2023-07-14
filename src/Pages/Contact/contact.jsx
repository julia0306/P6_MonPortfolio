import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
// J'import emailjs pour instaurer facilement un formulaire de contact fonctionnel 
import emailjs from '@emailjs/browser';
// J'importe la feuille de style qui correspond à cette page
import '../../Assets/style/contact.scss';
// J'importe les deux icones visibles au niveau du titre
import contactIcon from '../../Assets/Images/contact.webp'
import contactIcon2 from '../../Assets/Images/contact2.webp'

export const Contact = () => {
  const location = useLocation();
  const form = useRef();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const sendEmail = (e) => {
    e.preventDefault();

// J'implémente un message d'erreur en cas d'essai d'envoi d'un formulaire vide . La méthode 'trim' permet de s'assurer que le champ ne contienne pas uniquement des espaces
  const message = form.current.message.value.trim();
  if (!message) {
    alert('Veuillez entrer un message.');
    return;
  }
// J'utilise la structure proposée par emailjs
  emailjs
    .sendForm('julia.taylor3', 'template_0i5csdp', form.current, 'ZFQmeAAC_IiLiKMZt')
    .then(
      (result) => {
        alert('Votre message a bien été envoyé');
        console.log(result);
      },
      (error) => {
        console.log(error);
      }
    );
};

  return (
    <main className="form">
      <div className='section__header no__margin'>
        {/* Formulaire de contact */}
        <h2>Me contacter par message</h2>
        <img 
          src={contactIcon}
          alt="Entrer en contact par message"
        />
      </div>
      <form ref={form} className="form__container" onSubmit={sendEmail}>
        <div className="form__container__input">
          <label htmlFor="name">Nom</label>
          <input type="text" name="user_name" id="name" autoComplete="name" />
        </div>
        <div className="form__container__input">
          <label htmlFor="email">Email</label>
          <input type="email" name="user_email" id="email" autoComplete="email" />
        </div>
        <div className="form__container__input">
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" />
        </div>
        <input type="submit" value="Envoyer" />
      </form>
        <div className="section__header">
          <h2>Me contacter sur les réseaux </h2>
          <img 
            src={contactIcon2}
            alt="Entrer en relation via les réseaux professionnels"
          />
        </div>
        {/* Liens Github et Linkedin*/}
        <div className="socialNetworks__links">
          <Link 
            to="https://www.linkedin.com/in/julia-tlr/" 
            aria-label="visiter le profil Linkedin"
          >
            <i className="fa-brands fa-linkedin"></i>
          </Link>
          <Link 
            to="https://github.com/julia0306" 
            aria-label="visiter le profil Github"
          >
            <i className="fa-brands fa-square-github"></i>
          </Link>
        </div>
    </main>
  );
};

export default Contact;