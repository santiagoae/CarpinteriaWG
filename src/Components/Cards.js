import React from 'react'
import Card from './Card'
import '../styles/Cards.css'
import c1 from '../assets/Cocinas/c2.jpg'
import c2 from '../assets/Cocinas/c3.jpg'
import c3 from '../assets/Cocinas/c4.jpg'

const cards =[
    {
        id:1,
        img:c1,
        nom:'Cocina integral color wengue',
        des:'$15.400.000',
        red:'https://www.psepagos.co/PSEHostingUI/CategoryDetails.aspx?ID=14'
    },   
    {
        id:2,
        img:c2,
        nom:'Cocina integral color Beige',
        des:'$16.600.000',
        red:'https://www.psepagos.co/PSEHostingUI/CategoryDetails.aspx?ID=14'
    },    
    {
        id:3,
        img:c3,
        nom:'Cocina integral color Gris',
        des:'$20.000.000',
        red:'https://www.psepagos.co/PSEHostingUI/CategoryDetails.aspx?ID=14'
        
    },
]

const Cards = () => {
    return (
        <div className='boxCards'>
            <div className='row tamCards '>

                {
                    cards.map(card=>(
                        <div className='col-md-4' key={card.id}>
                            <Card 
                                img={card.img}
                                nom={card.nom}
                                des={card.des}
                                red={card.red}
                            />
                        </div>
                    ))
                }
            
            </div>            
        </div>
    )
}

export default Cards