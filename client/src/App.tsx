import React, { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import Header from './components/Header';
import Cart from './pages/cart/App';
import Checkout from './pages/checkout/App';

const App: React.FC = () => {
    return (
        <Router>
            <Header />
            <div id="wrapper">
                <div id="container">
                    <Switch>
                        <Route path="/cart">
                            <Cart />
                        </Route>
                        <Route path="/checkout">
                            <Checkout />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
};

export default App;
