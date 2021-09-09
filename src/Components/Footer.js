import React from 'react'
import "../styles/Footer.css"
// import Facebook from '../assets/logosRedes/fb1.png'
// import Instagram from '../assets/logosRedes/insta2.png'
// import Youtube from '../assets/logosRedes/youtube3.png'

const Footer = () => {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    {/* #Columna 1 */}
                    <div className="col-md-4 col-sm-6">
                        <h4>Acerca de nosotros</h4>
                        <ul className="list-unstyled" >
                            <li>Politicas de privacidad</li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                     {/* #Columna 2 */}
                     <div className="col-md-4 col-sm-6">
                        <h4>Contactenos</h4>
                        <ul className="list-unstyled" >
                            <li>CarpinteriaWG@gmail.com</li>
                            <li>(+57)3114273790</li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                     {/* #Columna 3 */}
                     <div className="col-md-4 col-sm-6">
                        <h4>Ubicación</h4>
                        <ul className="list-unstyled" >
                            <li>Taller : Diagonal 46#34A</li>
                            <li>04, itagui-Medellin, Colombia</li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
                {/* Footer botom */}
                <div className="footer-bottom">
                    <p className="text-xs-center">
                        &copy;{new Date().getFullYear()} Carpinteria Wilson Gonzalez Web App - All Rights Reserved
                    </p>
                </div>
            </div>
        </div>

    );
};

export default Footer
