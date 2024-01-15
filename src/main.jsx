import React from 'react';
import ReactDOM from 'react-dom/client';

//theme
import theme from '../theme';
import CreateGlobalStyle from "../global";
import { ThemeProvider } from 'styled-components';

//approutes
import { AppRoutes } from './routes/routes';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <ThemeProvider theme={theme}>

      <CreateGlobalStyle />

      <AppRoutes />

    </ThemeProvider>

  </React.StrictMode>,
)
