import React from 'react';
import ReactDOM from 'react-dom/client';

//pages
import { Home } from './pages/home'; 
import { SignIn } from './pages/signIn/index';
import { SignUp } from './pages/signUp/index'

//theme
import theme from '../theme';
import  CreateGlobalStyle  from "../global";
import { ThemeProvider } from 'styled-components';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <ThemeProvider theme = { theme }>

      <CreateGlobalStyle />
      
      < Home/>

    </ThemeProvider>

  </React.StrictMode>,
)
