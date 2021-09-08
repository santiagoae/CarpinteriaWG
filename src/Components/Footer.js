import React from 'react'
import "../styles/Footer.css"
import Facebook from '../assets/logosRedes/fb1.png'
import Instagram from '../assets/logosRedes/insta2.png'
import Youtube from '../assets/logosRedes/youtube3.png'

const Footer = () => {
    return (
        <div>
                <div className='boxFooter' >
                    <div className='row tamBloque '>
                        <div className='col-md-3  '>
                            <a href="https://www.facebook.com/TicsBrothers/" target='_blanck' rel='noreferrer'>
                                <img src={Facebook} alt="FB" className='tamLogo btn btn-secondary btn-blue' /> 
                            </a>                                                   
                        </div>
                        <div className='col-md-3'>
                            <a href="https://www.instagram.com/ticsbrothers/" target='_blanck' rel='noreferrer'>
                                <img src={Instagram} alt="IG" className='tamLogo btn btn-secondary btn-blue' />    
                            </a>                            
                        </div>
                        <div className='col-md-3'>
                            <a href="https://www.youtube.com/channel/UCqgWl0JM3FrweIr__qcUDhA" target='_blanck' rel='noreferrer'>
                                <img src={Youtube} alt="YT" className='tamLogo btn btn-secondary btn-blue' />
                            </a>                            
                        </div>
                    </div>              
                </div>
                <h3 className='textoAbajo'>Siguenos en Nuestras Redes Sociales</h3>
           </div>
    )
}

export default Footer
