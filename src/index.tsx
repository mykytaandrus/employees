import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import App from './components/App/App';
import './index.scss';

const root = ReactDOM.createRoot(document.querySelector('.root') as HTMLElement);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
