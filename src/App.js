import React, { Component } from "react";
import Header from "./components/Navigation/Header";
// import Footer from "./components/Footer";
import 'typeface-roboto'
import About from "./components/About/About";
import Contact from "./components/contact/Contact";
import Project from "./components/Projects/Project";
import Resume from "./components/Resume/Resume";

import "./app.scss"

function App() {
  return (
    <div className="app">
     <Header/>
   
     <div className="sections">
       <About/>
      <Project/>
       <Contact/>
       <Resume/>
     </div>
    
    </div>
  );
}

export default App;
