import React from 'react'
import '../styles/Carrusel.css'



const Carrusel = () => {
    return (
        <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade content-box centercarousel"
        data-bs-ride="carousel"
        
      >
        <div className="carousel-inner  ">
          <div 
            className="carousel-item active "            
          >
            <a href="/" target='_blank' rel='noreferrer' >
              <img src = 'https://www.mueblescocinazaragoza.es/wp-content/uploads/2019/01/catalogo-cocinas-zaragoza.jpg'
                
                className=" d-block w-100  tamimg"
                alt="Cocina"                                   
              />
            </a>          
          </div>
          <div 
            className="carousel-item"            
          >
            <a href="/" target='_blank ' rel='noreferrer'>
              <img
                src="https://www.frigicoll.es/blog/wp-content/uploads/2020/03/img-post-HEADER-5.jpg"
                className=" d-block w-100  tamimg"
                alt="Escritorio"                                   
              />
            </a>          
          </div>
          <div 
            className="carousel-item"            
          >
            <a href="/" target='_blank' rel='noreferrer' >
              <img
                src="https://webtrabajos.com/wp-content/uploads/2020/04/Fabricaci%C3%B3n-De-Muebles.jpg"
                className=" d-block w-100  tamimg"
                alt="Lijadora"                                   
              />
            </a>          
          </div>
          <div 
            className="carousel-item"            
          >
            <a href="/" target='_blank' rel='noreferrer'  >
              <img
                src="https://siptedesign.com.co/images/tendencias-fabrica-de-closets.jpg"
                className=" d-block w-100  tamimg"
                alt="closets"                                   
              />
            </a>          
          </div>
        </div>
  
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon sombra " aria-hidden="true"></span>
          <span className="visually-hidden ">Previous</span>
        </button>
        
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon sombra" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    );
};

export default Carrusel;
