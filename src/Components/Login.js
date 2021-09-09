import React , {useState, useEffect} from 'react'
import fire from '../firebaseConfig'
import Hero from './Hero'
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
    //     authListener();        
    // },[])

    
    return (
        
            
           <div>
               {user ? (
                <Hero handleLogout={handleLogout}/>
                ) : (
                    <section className='login'>
               
                    <div className="loginContainer">
                        <label >Username</label>
                        <input type="email" 
                         autoFocus required 
                         value={email} 
                         onChange={e => setEmail(e.target.value)} 
                        />
                        <p className="errorMsg">{emailError}</p>
                        <label>Passord</label>
                        <input type="password" 
                         required 
                         value={password} 
                         onChange={e => setPassword(e.target.value)} 
                        />
                        <p className="errorMsg">{passwordError}</p>
                        <div className="btnContainer">
                            {hasAccount ? (
                                <>
                                <button onClick={handleLogin}>Sign in</button>
                                <p>Dont have an account ? <span onClick={()=>setHasAccount(!hasAccount)}>Sign up</span></p>
                                </>
                            ) : (
                                 <>
                                 <button onClick={handleSignup}>Sign up</button>
                                 <p>Have an account ? <span onClick={()=>setHasAccount(!hasAccount)}>Sign in</span></p>
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
