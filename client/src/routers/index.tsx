import React from 'react';
import App from '../pages/cart/App';
import Checkout from '../pages/checkout/App';
/**
 * hookrouter 사용하려하였으나..
 * react 버전이 안맞..
 */

const routes = {
    '': () => <App />,
    '/checkout': () => <Checkout />
};

export default routes;