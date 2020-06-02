import React, {Component} from 'react';

export default class header extends Component{
    render(){
        return(
            <header id="home">
                <nav id="nav-wrap">
                    <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                    <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
                        <ul id="nav" className="nav">
                            <li className="current"><a className="smoothscroll" href="#home">HOME</a></li>
                            <li><a className="smoothscroll" href="#about">SOBRE MI</a></li>
                            <li><a className="smoothscroll" href="#resume">CURRICULUM</a></li>
                            <li><a className="smoothscroll" href="#portfolio">TRABAJOS</a></li>
                            <li><a className="smoothscroll" href="#testimonials">TESTIMONIOS</a></li>
                            <li><a className="smoothscroll" href="#contact">CONTACTOS</a></li>
                        </ul>
                </nav>
                <div className="row banner">
                    <div className="banner-text">
                        <h1 className="responsive-headline">Soy Libio Armando.</h1>
                        <h3>
                            Soy un <span>fromtend developer</span>,{" "}
                            <span>illustrator</span> and <span>webdesigner</span> creating awesome
                            and effective visual identities for companies of all sizes around the
                            globe. Let's{" "}
                            <a className="smoothscroll" href="#about">start scrolling</a>and learn more{" "}
                            <a className="smoothscroll" href="#about">about me</a>.
                        </h3>
                        <hr />
                        <ul className="social">
                            <li><a href="https://web.facebook.com/libioarmando.quispehancco#" target="_blank"><i className="fa fa-facebook" /></a></li>
                            <li><a href="https://twitter.com/KanielOutis21" target="_blank"><i className="fa fa-twitter" /></a></li>
                            <li><a href="# " target="_blank"><i className="fa fa-google-plus" /></a></li>
                            <li><a href="https://pe.linkedin.com/in/libio-armando-quispe-hancco-914483107" target="_blank"><i className="fa fa-linkedin" /></a></li>
                            <li><a href="https://www.instagram.com/libio10/tagged/" target="_blank"><i className="fa fa-instagram" /></a></li>
                            <li><a href="#" target="_blank"><i className="fa fa-dribbble" /></a></li>
                            <li><a href="https://secure.skype.com/portal/profile" target="_blank"><i className="fa fa-skype" /></a></li>
                        </ul>
                    </div>
                </div>
                <p className="scrolldown">
                    <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
                </p>
            </header>

        );
    }
}