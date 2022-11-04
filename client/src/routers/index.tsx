import React from 'react';
import { Route } from 'react-router-dom';

import Items from '../pages/Items/App';
import Cart from '../pages/cart/App';
import Checkout from '../pages/checkout/App';

const routers = [
    {
        path: '/',
        title: '',
        exact: true,
        component: Items
    },
    {
        path: '/cart',
        title: '장바구니',
        exact: true,
        component: Cart
    },
    {
        path: '/checkout',
        title: '주문하기',
        exact: true,
        component: Checkout
    },
    {
        path: '*',
        exact: false,
        render: () => <div>404</div>
    }
];

export default (): JSX.Element[] => {
    const router = routers.map((route, idx) => {
        return <Route
            path={route.path}
            exact={route.exact}
            component={route.component}
            key={idx}
            render={route.render}
        />
    });
    return router;
};