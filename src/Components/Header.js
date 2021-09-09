import React from 'react'
import logo from '../assets/favicon/logo-02.png'
import '../styles/Header.css'


const Header = () => {
    
    return (
        
            
                
                <nav className="navbar navbar-expand-lg navContenedor">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">
                            <img
                                src={logo}
                                alt="logo"
                                align='center'
                            />
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#!navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link colorText" aria-current="page" href="/nuestrosServicios" >Nustros Servicios</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link colorText" href="/zonaYoutube">
                                        Productos
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link colorText" href="/ticBlogs">Materiales</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link colorText" href="/ticBlogs">Carrito de compra</a>
                                </li>                                
                            </ul>
                            <ul className='navbar-nav ml-auto'>
                                <li>
                                <a className="btn btn-light" href="/Login">Login</a>                                    
                                </li>
                            </ul>                            
                        </div>
                    </div>
                </nav>
                
                     

                
            
            
            
    )
}

export default Header