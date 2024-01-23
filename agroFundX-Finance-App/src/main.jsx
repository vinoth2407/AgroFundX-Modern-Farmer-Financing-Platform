import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Hellow_world from './components/Hello_world.jsx'

import Main_Page from './components/Main_Page.jsx'
import Routing from './components/Routing.jsx'
import Login from './components/Login.jsx'
import Contact from './components/Contact_Us.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Routing/>
  </React.StrictMode>,
)
