import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.scss';
import Header from './Components/Header/header';
import Footer from './Components/Footer/footer';
import Home from './Pages/Home/home';
import Error from './Pages/Error/error';
import Skills from './Pages/Skills/skills';
import Projects from './Pages/Projects/projects';
import Project from './Pages/Project/project';
import Contact from './Pages/Contact/contact';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Router basename='Portfolio'>
  <Header/>
    <Routes>
      <Route path="/Portfolio/" element={<Home/>} />
      {/* Je crée une route dynamique pour afficher chacun des logements. Nous utiliseronts le hook useparams pour récupérer ces paramètres  */}
      <Route path="/Portfolio/projects" element={<Projects/>} />
      <Route path="/Portfolio/project/:id" element={<Project/>} />
      <Route path="/Portfolio/skills" element={<Skills/>} />
      <Route path="/Portfolio/contact" element={<Contact/>}/>
      {/* Je crée une route pour capturer toutes les routes qui ne sont pas mentionnées ci-dessus. Elles conduiront à ma page d'erreur */}
      <Route path="*" element={<Error/>} />
    </Routes>
    <Footer/>
  </Router>
</React.StrictMode>
);
