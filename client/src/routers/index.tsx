import React from 'react';
import Checkout from '../pages/checkout/App';
import Cart from "../pages/cart/App";
import { Route } from 'react-router-dom';

const routers = [
    {
        path: '/cart',
        title: '장바구니',
        component: Cart
    },
    {
        path: '/checkout',
        title: '주문하기',
        component: Checkout
    }
];

export default (): JSX.Element[] => {
    const router = routers.map((route, idx) => {
        return <Route path={route.path} component={route.component} key={idx} />
    });
    return router;
};