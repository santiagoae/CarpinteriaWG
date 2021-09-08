import React from 'react';
import './styles/App.css';
import Header from './Components/Header'
import Footer from './Components/Footer'
<<<<<<< HEAD
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Components/Home';
import Productos from './Components/Productos';
import Materiales from './Components/Materiales';
=======
import Home from './Components/Home'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './Components/Login'
>>>>>>> 2899ccca6648ed41b87c27eb6faebc0684c915bd

function App() {
  return (
    <div className="App fondo">
      <Router >                 
        <Header />      
          <Switch>
            <Route exact path='/' component={Home}></Route>
<<<<<<< HEAD
            <Route exact path='/Productos' component={Productos}></Route>
            <Route exact path='/Materiales' component={Materiales}></Route>
=======
>>>>>>> 2899ccca6648ed41b87c27eb6faebc0684c915bd
            {/* <Route path='/nuestrosServicios' component={NS}></Route>
            <Route path='/zonaYoutube' component={Zona}></Route>
            <Route path='/ticBlogs' component={Ticblogs}></Route> */}
          </Switch>
        <Footer />
        <Login/>      
      </Router>
    </div>
  );
  
}

export default App;
