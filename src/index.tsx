import React from 'react';
import ReactDOM from 'react-dom/client';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

import App from './components/App';
import reportWebVitals from './reportWebVitals';

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    font-family: 'M PLUS 1p;
  }
`;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    <GlobalStyle />
    <App />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
