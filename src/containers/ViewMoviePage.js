import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// Actions
import * as movieActions from '../actions/movieActions';
// Child components
import MovieView from '../components/MovieView';

class ViewMoviePage extends React.Component {

    componentDidMount() {
        if (this.props.location.search !== "") {
            this.props.actions.pageMovies(this.props.location.pathname + this.props.location.search)
        } else {
            this.props.actions.getMovies();
        }
    }
    render() {
        return (

            !this.props.ajaxLoading ?
                <p className="text-center alert alert-info">Carregando Filme...</p>
                :
                !this.props.currentMovie ?
                    <p className="text-center alert alert-danger">Filme não encontrado.</p>
                    :
                    <div className="add-merchant">
                        <MovieView movie={this.props.currentMovie} />
                    </div>

        )
    }
}

function findCurrentMovie(movies, id) {
    return movies.results.find(movie => {
        return movie.id === parseInt(id, 10);
    });
}

function mapStateToProps(state, ownProps) {
    debugger;
    let currentMovie = state.movies.count ? findCurrentMovie(state.movies, ownProps.match.params.pageNo) : null;
    return {
        currentMovie,
        merchantForm: state.form.merchant,
        ajaxLoading: state.ajaxLoading,
        goBack: ownProps.history.goBack
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(movieActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewMoviePage);
