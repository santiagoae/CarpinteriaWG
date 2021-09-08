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
                    </div>
                </div>
            </nav>
    )
}

export default Header
