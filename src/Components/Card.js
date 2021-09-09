import React from 'react'
//import './Cards'

const Card = (props) => {
    return (
        <div>
            <div>
                <div className="card text-center fondoCards textoCards">
                    <img src={props.img} className="tamImg" alt="..."/>
                    <div className="card-body">
                        <h2 className="card-title">{props.nom}</h2>                        
                        <p className="card-text" align="center"><strong>{props.des}</strong></p>                        
                        <a href={props.red} target="_blank" rel="noreferrer" className="btn btn-outline-light btn-dark">Compra ya!!</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card