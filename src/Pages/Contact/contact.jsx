import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import '../../Assets/style/contact.scss';
import { Link } from 'react-router-dom';
import contactImage from '../../Assets/Images/contact.webp'
import contactImage2 from '../../Assets/Images/contact2.webp'

export const Contact = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const message = form.current.message.value.trim();
    if (!message) {
      alert('Veuillez entrer un message.');
      return;
    }

    emailjs
      .sendForm('julia.taylor3', 'template_0i5csdp', form.current, 'ZFQmeAAC_IiLiKMZt')
      .then(
        (result) => {
          alert('Votre message a bien été envoyé');
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <main className="form">
      <div className='section__header no__margin'>
        <h2>Me contacter par message</h2>
        <img 
          src={contactImage}
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
            src={contactImage2}
            alt="Entrer en relation via les réseaux professionnels"
          />
        </div>
        <div className="socialNetworks__links">
          <Link to="https://www.linkedin.com/in/julia-tlr/" aria-label="visiter le profil Linkedin"><i className="fa-brands fa-linkedin"></i></Link>
          <Link to="https://github.com/julia0306" aria-label="visiter le profil Github"><i className="fa-brands fa-square-github"></i></Link>
        </div>
    </main>
  );
};

export default Contact;