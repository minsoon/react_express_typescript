import React from 'react';
import {
    BrowserRouter as Router,
    Switch
} from 'react-router-dom';
import Header from './components/Header';
import Routers from './routers'

const App: React.FC = () => {
    return (
        <Router>
            <Header />
            <div id="wrapper">
                <div id="container">
                    <Switch>
                        { Routers() }
                    </Switch>
                </div>
            </div>
        </Router>
    );
};

export default App;
