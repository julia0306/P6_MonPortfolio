import { useRef } from "react";
import emailjs from '@emailjs/browser';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const Contact = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault()
  
      emailjs.sendForm("julia.taylor3", "template_0i5csdp", form.current, "ZFQmeAAC_IiLiKMZt").then(
        (result) => {
          alert("Votre message a bien été envoyé");
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    };
  
    return (
        <main className="form__container">
        <form ref={form} className="form" onSubmit={sendEmail}>
            <div className="form__input">
                <label>Nom</label>
                <input type="text" name="user_name" />
            </div>
            <div className="form__input">
                <label>Email</label>
                <input type="email" name="user_email" />
            </div>
            <div className="form__input">
                <label>Message</label>
                <textarea name="message" />
            </div>
                <input type="submit" value="Envoyer" />

        </form>
      </main>
    );
  };
export default Contact