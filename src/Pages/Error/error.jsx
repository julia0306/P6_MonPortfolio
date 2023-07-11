import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Error() {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);
    return (
        <main className='error'>
            <div className="error__div">
                <h1 className="error__title">404</h1>
                <p className= "error__info">Oups ! La page que vous demandez n'existe pas</p>
                <Link className= "error__link" to="/">Retourner sur la page d'accueil</Link>
            </div>
        </main>
    )
}
 
export default Error