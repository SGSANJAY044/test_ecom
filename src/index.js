import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import { Toastr } from "@sparrowengg/twigs-react";
import { Provider } from 'react-redux'
import './utils/Notification'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Toastr duration={10000} />
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
