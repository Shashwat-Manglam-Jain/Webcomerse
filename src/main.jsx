import React from 'react';
import ReactDOM from 'react-dom'; 
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';



ReactDOM.createRoot(document.getElementById('root')).render(
<Auth0Provider
    domain="dev-i5kfxg2ov6zu4dqd.us.auth0.com"
    clientId="hOrDjF5VIZ89VMcd9FRW9tAw1j64IJ5N"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Auth0Provider>
);
