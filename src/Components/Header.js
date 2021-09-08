import React from 'react'
import logo from '../assets/favicon/logo-02.png'
import '../styles/Header.css'
import Login from './Login'

const Header = () => {
    
    return (
<<<<<<< HEAD
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
                                <a className="nav-link colorText" href="/Productos">
                                    Productos
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link colorText" href="/Materiales">Materiales</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link colorText" href="/">Carrito de compra</a>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-light" type="submit">Search</button>
                        </form>
=======
        
            <div>
                
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
                            <ul className='ml-auto'>
                                <li >
                                    <button className="btn btn-light" type="submit">Login</button>
                                    <a href="#" className="btn btn-light" data-bs-toggle='modal' data-bs-target='#registrarModal'>Registrate</a>
                                    <button className="btn btn-light" type="submit">Logout</button>
                                </li>
                            </ul>                            
                        </div>
>>>>>>> 2899ccca6648ed41b87c27eb6faebc0684c915bd
                    </div>
                </nav>
                
                <div className="modal fade" id="registrarModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form id="registrarForm">
                                    <div className="form-group">
                                        <input type='text' id="registrarEmail" className='form-control' placeholder='Usuario' required />
                                    </div>
                                    <div className="form-group mt-3">
                                        <input type='password' id="registrarPassword" className='form-control' placeholder='Contraseña' required />
                                    </div>                                
                                    <button type="submit" className="btn btn-primary mt-3">Registrate</button>
                                </form>
                            </div>                    
                        </div>
                    </div>
                </div>        

                <login/>
            </div>
            
            
    )
}

export default Header
