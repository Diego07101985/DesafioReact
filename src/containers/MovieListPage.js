import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// Actions
import { deleteMovie, pageMovies, getMovies } from '../actions/movieActions';
// Child components
import MovieList from '../components/MovieList';


class MovieListPage extends React.Component {


    componentWillMount() {
        if (this.props.location.search !== "") {
            this.props.actions.pageMovies(this.props.location.pathname + this.props.location.search)
        } else {
            this.props.actions.getMovies();
        }
    }

    constructor(props) {
        super(props);
        this.deleteMovie = this.deleteMovie.bind(this);
        this.paginateMovie = this.paginateMovie.bind(this);
    }


    deleteMovie(id) {
        if (window.confirm('Voce esta certo que quer deletar')) {
            this.props.actions.deleteMovie(id);
        }
    }

    paginateMovie(url) {
        if (this.props.location.search !== "") {
            this.props.actions.pageMovies(this.props.location.pathname + this.props.location.search)
        }
    }

    render() {
        return (
            <div className="merchants">
                {
                    <MovieList movies={this.props.movies} pages={this.props.pages}
                        onDeleteMovie={this.deleteMovie} paginateMovie={this.paginateMovie} currentPage={this.props.currentPage} />
                }
            </div>
        )
    }
}


function mapStateToProps(state, ownProps) {
    let movies = '';
    let pageNo = ownProps.match.params.pageNo || 1;

    if (state.movies.length === 0)
        movies = state.movies;
    else
        movies = state.movies.results;

    return {
        movies: movies,
        pages: Math.ceil(state.movies.count / 10), // Determine number of pages for pagination
        currentPage: pageNo,
        ajaxLoading: true
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({ deleteMovie, pageMovies, getMovies }, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieListPage);
