import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Hellow_world from './components/Hello_world.jsx'
import Main_Page from './components/Main_Page.jsx'
import Routing from './components/Routing.jsx'
import Login from './components/Login.jsx'
import Contact from './components/Contact_Us.jsx'
import { ChakraProvider, theme } from '@chakra-ui/react'
import { ThemeProvider, createMuiTheme } from '@mui/material'
import LoanTracker from './components/LoanTracker.jsx'
import AppliedLoans from './components/LoanApplied.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
    <ThemeProvider theme={createMuiTheme}>
    <Routing/>
    {/* <AppliedLoans/> */}
    </ThemeProvider>
    </ChakraProvider>
  </React.StrictMode>,
)
