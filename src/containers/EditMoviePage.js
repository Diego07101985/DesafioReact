import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// Actions
import * as movieActions from '../actions/movieActions';
// Child components
import MovieForm from '../components/MovieForm';

class EditMoviePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formStatus: null
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        // Check if form has any errors
        if (!this.props.movieForm.syncErrors) {
            // Add current merchant ID and bids to form fields
            let movie = this.props.movieForm.values
            this.props.actions.editMovie(this.props.match.params.id, movie);
            this.setState({ formStatus: 'success' });
        } else {
            this.setState({ formStatus: 'error' });
        }
    }

    render() {
        return (
            this.props.ajaxLoading ?
                <p className="text-center alert alert-info">Carregando Filmes...</p>
                :
                !this.props.currentMovie ?
                    <p className="text-center alert alert-danger">Filme não encontrado.</p>
                    :
                    <div className="add-merchant">
                        <h1 className="text-center text-capitalize">Editar Filme</h1>
                        <MovieForm onSubmit={this.handleSubmit} formStatus={this.state.formStatus}
                            initialValues={this.props.currentMovie} goBack={this.props.goBack} />
                    </div>
        )
    }
}

function findCurrentMovie(movies, id) {
    debugger;
    return movies.results.find(movie => {
        return parseInt(movie.id, 10) === parseInt(id, 10);
    });
}

function mapStateToProps(state, ownProps) {
    debugger;
    let currentMovie = state.movies.count ? findCurrentMovie(state.movies, ownProps.match.params.id) : null;
    return {
        currentMovie,
        movieForm: state.form.movie,
        ajaxLoading: state.ajaxLoading,
        goBack: ownProps.history.goBack
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(movieActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditMoviePage);
