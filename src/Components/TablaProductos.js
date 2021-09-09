import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import firebase from 'firebase/app' //npm i firebase
import 'firebase/firestore';   // for cloud firestore

import { firebaseConfig } from './database';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();

function TablaProductos() {

  const [ listaFolio, setListaFolio ] = useState([])
  const [ codigo, setCodigo ] = useState('')
  const [ ciudad, setCiudad ] = useState('')
  const [ email, setEmail ] = useState('')

  useEffect(() => {
    getFolios()
  }, [])

  const getFolios = async () => {
    let obj;
    let lista = []
    const querySnapshot = await db.collection("Productos").get();
    querySnapshot.forEach((doc) => {
      obj = doc.data() 
      obj.id = doc.id 
      lista.push(obj)
    });
    setListaFolio(lista)
  }

  const addFolio = async() => {
    const obj = {codigo, ciudad, email }
    const dbRef = await db.collection("Productos").add(obj) 
    console.log(dbRef.id)
    clearInput()
    getFolios()
    
  }

  const clearInput = () => {
    setCodigo('')
    setCiudad('')
    setEmail('')
  }


  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
         <a className="navbar-brand" href="#f">
          ReactJs Firebase Bootstrap 5
         </a>
       </div>
     </nav>

     <div className="row p-2">
   
      <div className="col-md-4">
       <div className="card p-2">
          <input className="form-control mb-2" placeholder="Codigo" 
              onChange={e => setCodigo(e.target.value)}
              value={codigo}
          /> 
          <input className="form-control mb-2" placeholder="Ciudad"
              onChange={e => setCiudad(e.target.value)}
              value={ciudad}
          /> 
          <input className="form-control mb-2" placeholder="Email"
              onChange={e => setEmail(e.target.value)}
              value={email}
          /> 
          <button className="btn btn-primary"
             onClick={addFolio} >
              Aceptar
          </button>
      </div>
    </div>
  

      <div className="col-md-8">
      <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col"><img src={logo} className="App-logo" alt="logo"/></th>
              <th scope="col">Codigo</th>
              <th scope="col">Ciudad</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            {listaFolio.map((folio, index) => (
               <tr key={index}>
                 <td>{index + 1}</td>
                 <td>{folio.codigo}</td>
                 <td>{folio.ciudad}</td>
                 <td>{folio.email}</td>
              </tr> 
            )) }
             
          </tbody>
        </table>
    </div>
    </div>
    </div>
  );
}

export default TablaProductos;