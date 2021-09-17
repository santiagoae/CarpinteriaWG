import React from 'react';
import './styles/App.css';
import Header from './Components/Header'
import Footer from './Components/Footer'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Components/Home';
import Materiales from './Components/Materiales';
import Login from './Components/Login' 
import Links from "./Components/Links";



function App() {
  

  return (
    <div className="App fondo">
      <Router >
        
                    
        <Header /> 
          <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/Productos' component={Links}></Route>
            <Route exact path='/Materiales' component={Materiales}></Route>
            <Route exact path='/Login' component={Login}></Route>
            {/* <Route path='/nuestrosServicios' component={NS}></Route>
            <Route path='/zonaYoutube' component={Zona}></Route>
            <Route path='/ticBlogs' component={Ticblogs}></Route> */}

          </Switch>          
        <Footer />
      </Router>
    </div>
  );
  
}


export default App;
