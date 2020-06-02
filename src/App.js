
import './App.css';
import Header from './components/header/header';
import About from './components/about/about';
import Resume from './components/resume/resume';
import Portfolio from './components/portfolio/portfolio';
import Testimonials from './components/testimonials/testimonials';
import Contactus from './components/contactus/contact';
import Footer from './components/footer/footer';
import React, { Component } from 'react';

class App extends Component{
  render(){
    return(
      <div className="App">
        <Header/>
        <About/>
        <Resume/>
        <Portfolio/>
        <Testimonials/>
        <Contactus/>
        <Footer/>
      </div>
    );
  }
}

export default App;
