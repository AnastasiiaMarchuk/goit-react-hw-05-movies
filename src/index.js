import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App/App';
import './styles/index.css';
import { GlobalStyles } from 'styles/GlobalStyles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
    <BrowserRouter basename="/goit-react-hw-05-movies">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
