import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ProSidebarProvider } from 'react-pro-sidebar';

import { Provider } from 'react-redux';
import {store} from './redux/store'
import 'bootstrap/dist/css/bootstrap.min.css';
// #region import translation 
import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import translation from "./translate/translation"
//#endregion 
const root = ReactDOM.createRoot(document.getElementById('root'));

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: translation,
    lng: localStorage.getItem("xx-l"),
    fallbackLng: "en"
  });
// #endregion

root.render(
  <Provider store={store}>
    <ProSidebarProvider>
       <App />
    </ProSidebarProvider>
</Provider>,
);

 
