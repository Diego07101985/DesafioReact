import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// Actions
import * as movieActions from '../actions/movieActions';
// Child components
import MovieForm from '../components/MovieForm';

class AddMoviePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formStatus: null
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        if (!this.props.movieForm.syncErrors) {
            let movie = this.props.movieForm.values;

            this.props.actions.addMovie(movie);
            this.setState({ formStatus: 'success' });
        } else {
            this.setState({ formStatus: 'error' });
        }
    }

    render() {
        return (
            <div className="add-merchant">
                <h1 className="text-center text-capitalize">Adicione um filme</h1>
                <MovieForm onSubmit={this.handleSubmit} formStatus={this.state.formStatus} />
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        movieForm: state.form.movie,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(movieActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddMoviePage);
