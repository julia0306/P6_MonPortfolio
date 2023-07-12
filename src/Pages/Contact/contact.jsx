import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import '../../Assets/style/contact.scss';

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
      <form ref={form} className="form__container" onSubmit={sendEmail}>
        <div className="form__container__input">
          <label>Nom</label>
          <input type="text" name="user_name" autoComplete="name" />
        </div>
        <div className="form__container__input">
          <label>Email</label>
          <input type="email" name="user_email" autoComplete="email" />
        </div>
        <div className="form__container__input">
          <label>Message</label>
          <textarea name="message" />
        </div>
        <input type="submit" value="Envoyer" />
      </form>
    </main>
  );
};

export default Contact;