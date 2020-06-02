import React ,{Component} from 'react';

export default class footer extends Component{
    render(){
        return(
            <footer>
                <div className="row">
                    <div className="twelve columns">
                        <ul className="social-links">
                            <li><a href="https://web.facebook.com/libioarmando.quispehancco#" target="_blank"><i className="fa fa-facebook" /></a></li>
                            <li><a href="https://twitter.com/KanielOutis21" target="_blank"><i className="fa fa-twitter" /></a></li>
                            <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                            <li><a href="https://pe.linkedin.com/in/libio-armando-quispe-hancco-914483107" target="_blank"><i className="fa fa-linkedin" /></a></li>
                            <li><a href="https://www.instagram.com/libio10/tagged/" target="_blank"><i className="fa fa-instagram" /></a></li>
                            <li><a href="#"><i className="fa fa-dribbble" /></a></li>
                            <li><a href="https://secure.skype.com/portal/profile" target="_blank"><i className="fa fa-skype" /></a></li>
                        </ul>
                        <ul className="copyright">
                            <li>© Copyright 2020 </li>
                            <li>Design by{" "}<a title="Styleshout" href="http://www.styleshout.com/">Libio</a></li>
                        </ul>
                    </div>
                    <div id="go-top">
                    <a className="smoothscroll" title="Back to Top" href="#home">
                        <i className="icon-up-open" />
                    </a>
                    </div>
                </div>
            </footer>

        );
    }
}