import i18next from 'i18next';
import React from 'react';
import ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import commonEN from './assets/translations/en.json';
import commonNL from './assets/translations/nl.json';
import './index.scss';
import reportWebVitals from './reportWebVitals';

i18next.init({
    interpolation: { escapeValue: false },
    lng: 'nl',
    resources: {
        en: {
            common: commonEN,
        },
        nl: {
            common: commonNL,
        },
    },
});

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <I18nextProvider i18n={i18next}>
                <App />
            </I18nextProvider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
