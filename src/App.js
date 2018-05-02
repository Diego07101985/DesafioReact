import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
// Container components
import MerchantsPage from './containers/MerchantsPage';
import EditMerchantPage from './containers/EditMerchantPage';
import AddMerchantPage from './containers/AddMerchantPage';
import BidsPage from './containers/BidsPage';
// Assets
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';

const App = () => {
    return (
        <Router>
            <div className="App">
                <div className="App-header">
                    <nav className="main-nav">
                        <h1>Desafio  de Filmes</h1>
                        <ul className="main-nav-option">
                            <li><NavLink activeClassName="selected" to="/filmes/1">Merchant list</NavLink></li>
                            <li><NavLink activeClassName="selected" to="/add">Add merchant</NavLink></li>
                        </ul>
                    </nav>
                </div>

                <div className="container">
                    <Route path="/filmes/:pageNo?" component={MerchantsPage} />
                    <Route path="/filmes/?page=:pageNo?" component={MerchantsPage} />
                    <Route path="/add" component={AddMerchantPage} />
                    <Route path="/edit/:id" component={EditMerchantPage} />
                    <Route path="/bids/:id" component={BidsPage} />
                </div>
            </div>
        </Router>
    );
};

export default App;
