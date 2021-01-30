import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './core/components/Navbar';
import Admin from './pages/Admin';
import Catalog from './pages/Catalog';
import Home from './pages/Home';

const Routes = () => (
    <BrowserRouter>
    <Navbar />
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/Catalog">
                <Catalog />
            </Route>
            <Route path="/Admin">
                <Admin />
            </Route>
        </Switch>
    </BrowserRouter>

    );

export default Routes; 