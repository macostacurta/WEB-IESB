import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {AuthContextProvider} from "./contexts/AuthContext.jsx";
import { ContatoContextProvider } from './contexts/ContatoContext.jsx';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <ContatoContextProvider>
        <App />
      </ContatoContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
);
