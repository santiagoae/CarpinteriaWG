import React from 'react';
import './styles/App.css';
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Components/Home'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import Login from './Components/Login'
import Productos from './Components/Productos'
import Materiales from './Components/Materiales'

function App() {
  return (
    <div className="App fondo">
      <Router >                 
        <Header />      
          <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/Productos' component={Productos}></Route>
            <Route exact path='/Materiales' component={Materiales}></Route>
            {/* <Route path='/nuestrosServicios' component={NS}></Route>
            <Route path='/zonaYoutube' component={Zona}></Route>
            <Route path='/ticBlogs' component={Ticblogs}></Route> */}
          </Switch>
        <Footer />
        {/* <Login/>       */}
      </Router>
    </div>
  );
  
}

export default App;
