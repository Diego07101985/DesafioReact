import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
// Container components
import MoviePage from './containers/MoviePage';
import EditMoviePage from './containers/EditMoviePage';
import AddMoviePage from './containers/AddMoviePage';
import ViewMoviePage from './containers/ViewMoviePage';
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
                            <li><NavLink activeClassName="selected" to="/filmes/1">Lista de filmes</NavLink></li>
                            <li><NavLink activeClassName="selected" to="/add">Adicionar Filme</NavLink></li>
                        </ul>
                    </nav>
                </div>

                <div className="container">
                    <Route path="/filmes/" component={MoviePage} />
                    <Route path="/filmes/:pageNo?" component={ViewMoviePage} />
                    <Route path="/filmes/?page=:pageNo?" component={MoviePage} />
                    <Route path="/add" component={AddMoviePage} />
                    <Route path="/edit/:id" component={EditMoviePage} />
                </div>
            </div>
        </Router>
    );
};

export default App;
