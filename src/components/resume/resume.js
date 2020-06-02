import React, {Component}from 'react';

export default class resume extends Component
{
    render(){
        return(
            <section id="resume">
                <div className="row education">
                    <div className="three columns header-col">
                        <h1><span>Educacion</span></h1>
                    </div>
                    <div className="nine columns main-col">
                        <div className="row item">
                            <div className="twelve columns">
                            <h3>Universidad Nacional de San Antonio Abad del Cusco</h3>
                            <p className="info">Ing. Informatica y de Sistemas <span>•</span>{" "}<em className="date">Agosto 2019</em></p>
                            <p>
                                Curse mis estudios en la Universidad Nacional de San Antonio Abad del Cusco en la Facultad de Ing. Electrica, Electronica, Informatica y Mecanica, en la Escuela Profesional 
                                de Ing. Informatica y de Sistemas.
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row work">
                    <div className="three columns header-col">
                        <h1><span>Trabajos</span></h1>
                    </div>
                    <div className="nine columns main-col">
                        <div className="row item">
                            <div className="twelve columns">
                                <h3>Pale Consultores</h3>
                                <p className="info"> Administrador de Base de Datos <span>•</span>{" "}<em className="date">Marzo 2019 - Present</em></p>
                                <p>
                                Los Administradores de Bases de Datos somos responsables del manejo, mantenimiento, desempeño y de la confiabilidad de bases de datos. Asimismo, estámos a cargo de la mejora y diseño de nuevos modelos de las mismas.
                                </p>
                            </div>
                        </div>
                        <div className="row item">
                            <div className="twelve columns">
                                <h3>Centro de Computo - UNSAAC</h3>
                                <p className="info">Desarrollador Front End <span>•</span>{" "}<em className="date">Septiembre 2019 - Marzo 2020</em></p>
                                <p>
                                Desarrollador front end necesita tener un ojo crítico para el diseño. Es cierto que se buscan desarrollador que cuenten con nociones básicas del diseño UI (interfaz de usuario) y UX (experiencia de usuario) para crear aplicaciones atractivas y fáciles de usar.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row skill">
                    <div className="three columns header-col">
                        <h1><span>Habilidades</span></h1>
                    </div>
                    <div className="nine columns main-col">
                        <p>
                        Las competencias informáticas son el conjunto de conocimientos, habilidades, disposiciones y conductas que capacitan a los individuos para saber cómo funcionan las TIC, para qué sirven y cómo se pueden utilizar para conseguir objetivos específicos.
                        </p>
                        <div className="bars">
                            <ul className="skills">
                                <li><span className="bar-expand photoshop" /><em>Python</em></li>
                                <li><span className="bar-expand illustrator" /><em>JavaScripts</em></li>
                                <li><span className="bar-expand wordpress" /><em>CSS</em></li>
                                <li><span className="bar-expand css" /><em>SQL Server</em></li>
                                <li><span className="bar-expand html5" /><em>HTML5</em></li>
                                <li><span className="bar-expand jquery" /><em>Git Hub</em></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

        );
    }
}