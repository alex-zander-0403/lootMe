import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { Provider } from 'react-redux';
import { store } from './redux/store.ts';
import './index.css';
import { injectStore } from './services/axiosInstance.ts';

injectStore(store);

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>,
);
