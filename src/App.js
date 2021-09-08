import React from 'react';
import './styles/App.css';
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Components/Home'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './Components/Login'

function App() {
  return (
    <div className="App fondo">
      <Router >                 
        <Header />      
          <Switch>
            <Route exact path='/' component={Home}></Route>
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
