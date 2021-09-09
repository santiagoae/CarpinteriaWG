import React, {useState, useEffect} from 'react';
import './styles/App.css';
import Header from './Components/Header'
import Footer from './Components/Footer'
<<<<<<< HEAD
import Home from './Components/Home'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import Login from './Components/Login'
import Productos from './Components/Productos'
import Materiales from './Components/Materiales'
=======
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Components/Home';
import Productos from './Components/Productos';
import Materiales from './Components/Materiales';
import Login from './Components/Login' 
import fire from './firebaseConfig'

>>>>>>> a1389af3f5ef9651184331b684174cc4b1be66ef

function App() {
  const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [hasAccount, setHasAccount] = useState (false);

    const clearInputs = () => {
        setEmail('');
        setPassword('');    
    }

    const clearErrors = () => {
        setEmailError('');
        setPasswordError('');
    }

    const handleLogin = () => {
        clearErrors();
        fire
            .auth()
            .signInWithEmailAndPassword(email,password)
            .catch(err => {
                switch(err.code){
                    case 'auth/invalid-email':
                    case 'auth/user-disabled':
                    case 'auth/user-not-found':
                        setEmailError(err.message);
                        break;
                    case 'auth/wrong-password':
                        setPasswordError(err.message);
                        break;
                    
                }
            })
    }
    
    const handleSignup = () => {
        clearErrors();
        fire
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .catch(err => {
                switch(err.code){
                    case 'auth/email-already-in-use':
                    case 'auth/invalid-email':                    
                        setEmailError(err.message);
                        break;
                    case 'auth/wrong-password':
                        setPasswordError(err.message);
                        break;
                    
                }
            })
    }

    const handleLogout = () => {
        fire.auth().signOut();
    }

    const authListener = () => {
        fire.auth().onAuthStateChanged(user => {
            if(user){
                clearInputs();
                setUser(user);
            }
            else
            setUser('');
        })
    }

    // useEffect(() => {
    //     authListener()
    // })        

    const login = <Login 
                  email={email} 
                  setEmail={setEmail}
                  password={password}
                  setPassword={setPassword}
                  handleLogin={handleLogin}
                  handleSignup={handleSignup}
                  hasAccount={hasAccount} 
                  setHasAccount={setHasAccount}
                  emailError={emailError}
                  passwordError={passwordError}
                  /> 

  return (
    <div className="App fondo">
      <Router >
        
                    
        <Header /> 
          <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/Productos' component={Productos}></Route>
            <Route exact path='/Materiales' component={Materiales}></Route>
<<<<<<< HEAD
=======
            <Route exact path='/Login' component={Login}></Route>
>>>>>>> a1389af3f5ef9651184331b684174cc4b1be66ef
            {/* <Route path='/nuestrosServicios' component={NS}></Route>
            <Route path='/zonaYoutube' component={Zona}></Route>
            <Route path='/ticBlogs' component={Ticblogs}></Route> */}
          </Switch>
<<<<<<< HEAD
        <Footer />
        {/* <Login/>       */}
=======
        <Footer />     
          
>>>>>>> a1389af3f5ef9651184331b684174cc4b1be66ef
      </Router>
    </div>
  );
  
}


export default App;
