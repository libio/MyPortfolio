import React, {Component} from 'react';

export default class testimonials extends Component{
    render(){
        return(
            <section id="testimonials">
                <div className="text-container">
                    <div className="row">
                        <div className="two columns header-col">
                            <h1><span>Client Testimonials</span></h1>
                        </div>
                        <div className="ten columns flex-container">
                            <div className="flexslider">
                                <ul className="slides">
                                    <li><blockquote>
                                        <p>
                                        La única forma de hacer un gran trabajo es amar lo que lo que haces. Si todavía no lo has encontrado, sigue buscando. No te rindas.
                                        </p>
                                        <cite>Steve Jobs</cite>
                                    </blockquote>
                                    </li>{" "}
                                    <li><blockquote>
                                        <p>
                                        El ordenador nació  para resolver problemas que antes no existian
                                        </p>
                                        <cite>Bill Gates</cite>
                                    </blockquote></li>{" "}
                                </ul>
                            </div>{" "}
                        </div>{" "}
                    </div>
                </div>
            </section>

        );
    }
}