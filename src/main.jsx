import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'core-js'
import './index.css'
// import { BrowserRouter } from "react-router-dom";
import {Provider} from 'react-redux'



ReactDOM.createRoot(document.getElementById('root')).render(
//   <BrowserRouter>
//   <App />
// </BrowserRouter>,
  <React.StrictMode>
  
    <App />
  
  </React.StrictMode>,
)