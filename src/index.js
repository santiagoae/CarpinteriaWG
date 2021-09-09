import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'bootswatch/dist/superhero/bootstrap.min.css';


ReactDOM.render(
  <React.StrictMode>
    <Suspense>
      
        <App />
      
    </Suspense>    
  </React.StrictMode>,
  document.getElementById('root')
);


