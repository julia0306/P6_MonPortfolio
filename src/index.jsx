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
import Curriculum from './Pages/Curriculum/curriculum';
import Contact from './Pages/Contact/contact';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Router basename='Portfolio'>
  <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/projects" element={<Projects/>} />
      <Route path="/project/:id" element={<Project/>} />
      <Route path="/skills" element={<Skills/>} />
      <Route path="/curriculum" element={<Curriculum/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="*" element={<Error/>} />
    </Routes>
    <Footer/>
  </Router>
</React.StrictMode>
);
