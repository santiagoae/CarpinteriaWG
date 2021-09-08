import React from 'react'
import logo from '../assets/favicon/logo-02.png'
import '../styles/Header.css'

const Header = () => {
    return (
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
                                    <button className="btn btn-light" type="submit" data-toggle='modal' data-target='#registrarModal'>Registrate</button>
                                    <button className="btn btn-light" type="submit">Logout</button>
                                </li>
                            </ul>                            
                        </div>
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
                            ...
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                        </div>
                    </div>
                </div>
            
            </div>
            
            
    )
}

export default Header
