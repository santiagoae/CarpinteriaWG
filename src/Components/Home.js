import React from 'react'
import Carrusel from './Carrusel'
import '../styles/Home.css'
import Cards from './Cards'


const Home = () => {
    return (
        <div className='box'>
            <Carrusel />
            <Cards />
        </div>
    )
}

export default Home
