import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
// Container components
import MovieListPage from './containers/MovieListPage';
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
                            <li><NavLink activeClassName="selected" to="/filmes">Lista de filmes</NavLink></li>
                            <li><NavLink activeClassName="selected" to="/add">Adicionar Filme</NavLink></li>
                        </ul>
                    </nav>
                </div>

                <div className="container">
                    <Route exact path="/filmes/?page=:pageNo?" component={MovieListPage} />
                    <Route exact path="/filmes/filme/:pageNo?" component={ViewMoviePage} />
                    <Route exact path="/filmes" component={MovieListPage} />
                    <Route exact path="/add" component={AddMoviePage} />
                    <Route exact path="/edit/:id" component={EditMoviePage} />
                </div>
            </div>
        </Router>
    );
};

export default App;
