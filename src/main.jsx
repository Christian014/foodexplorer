import React from 'react';
import ReactDOM from 'react-dom/client';



//theme
import theme from '../theme';
import CreateGlobalStyle from "../global";
import { ThemeProvider } from 'styled-components';

import { AppRoutes } from './routes/routes';

import { AuthProvider } from './hooks/auth';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CreateGlobalStyle />
     
      <AuthProvider>

        <AppRoutes />
      
      </AuthProvider>

    </ThemeProvider>
  </React.StrictMode>,
)
