import React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './modules/reducers';
import logger from 'redux-logger';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root') as Element);
const store = createStore(rootReducer, applyMiddleware(logger));

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);

reportWebVitals();
