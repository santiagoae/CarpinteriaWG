import React from 'react'
import { SuspenseWithPerf, useAuth } from 'reactfire'
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

const SignInForm = () => {
    const auth = useAuth;
    const uiConfig = {
      signInFlow: "popup",
      signInOptions: [auth.FacebookAuthProvider.PROVIDER_ID],
      callbacks: {
        // FUNCION LUEGO DE QUE SE COMPLETO EL INICIO DE SESION
        signInSuccessWithAuthResult: (e) => {
          console.log(e);
        },
      },
    };
    return <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth()} />;
  };


const Auth = () => {
    return (
        <div>
            <SuspenseWithPerf 
                traceId='firebase-user-wait' 
                fallback={'Cargando...'}
            >
              <SignInForm />  
            </SuspenseWithPerf>
        </div>
    )
}

export default Auth


