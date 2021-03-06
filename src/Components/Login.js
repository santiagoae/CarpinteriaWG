import React , {useState, useEffect} from 'react'
import fire from '../firebaseConfig'
import Header from './Header'
import '../styles/Login.css'
  


const Login = () => {

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

    

    useEffect(() => {
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
        authListener();       
    },[])

    
    return (
        
            
           <div>
               {user ? (
                <Header handleLogout={handleLogout}/>
                ) : (
                    <section className='login'>
               
                    <div className="loginContainer">
                        <label >Usuario</label>
                        <input type="email" 
                         autoFocus required 
                         value={email} 
                         onChange={e => setEmail(e.target.value)} 
                        />
                        <p className="errorMsg">{emailError}</p>
                        <label>Contrase??a</label>
                        <input type="password" 
                         required 
                         value={password} 
                         onChange={e => setPassword(e.target.value)} 
                        />
                        <p className="errorMsg">{passwordError}</p>
                        <div className="btnContainer">
                            {hasAccount ? (
                                <>
                                <button onClick={handleLogin}>Iniciar sesion</button>                                                               
                                <p>Aun no tienes cuenta? <span onClick={()=>setHasAccount(!hasAccount)}>Registrate aqu??</span></p>
                                </>
                            ) : (
                                 <>
                                 <button onClick={handleSignup}>Registrate</button>                                                                  
                                 <p>Ya estas con nosotros? <span onClick={()=>setHasAccount(!hasAccount)}>Inicia sesion aqu??</span></p>
                                 </>
                            )}
                        </div>
                    </div>
                    
                </section> 
                )}
           </div> 
        
    )
}

export default Login
