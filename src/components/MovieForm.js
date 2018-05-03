import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { NavLink } from 'react-router-dom';

// Merchant form
let MovieForm = ({ onSubmit, submitting, formStatus }) => {
    return (
        <div className="row">
            <div className="col-sm-6 col-lg-4 col-sm-push-3 col-lg-push-4">
                <form onSubmit={onSubmit} noValidate>
                    <Field name="title" component={renderField} type="text"
                        id="titlee" label="Titulo" />
                    <Field name="original_title" component={renderField} type="text"
                        id="original_title" label="Titulo Original" />
                    <Field name="image" component={renderField} type="url"
                        id="image" label="Imagem Url" />
                    <Field name="slug" component={renderField} type="text"
                        id="slug" label="Slug" />
                    <Field name="synopsis" component={renderField} type="text"
                        id="synopsiss" label="Synopsis" />
                    <Field name="duration_in_seconds" component={renderField} type="text"
                        id="duration_in_seconds" label="Duração em segundos" />
                    <Field name="likes" component={renderField} type="text"
                        id="likes" label="Curtidas" />
                    <Field name="published" component={renderField} type="checkbox"
                        id="published" label="Publicado"
                    />
                    <button type="submit" className="btn btn-primary merchant-submit" disabled={submitting}>Submit</button>
                </form>
                {formStatus === 'success' &&
                    <p className="alert alert-success">
                        Filme foi salvo com sucesso
                    <NavLink to="/filmes/1"> Retorna para a lista de filmes</NavLink>
                    </p>}
                {formStatus === 'error' &&
                    <p className="alert alert-danger">Não foi possivel salvar o filme. Por favor verifique os campos.</p>}
            </div>
        </div>
    )
};

// Render schema for each field
const renderField = ({
    input,
    label,
    type,
    id,
    meta: { touched, error }
}) => (
        // Render schema for checkbox
        (type === 'checkbox')
            ?
            <div className="checkbox">
                <label>
                    <input {...input} type={type} />
                    {label}
                </label>
                {touched &&
                    (error &&
                        <span className="error-text">
                            {error}
                        </span>)}
            </div>
            :
            // Render schema for inputs
            <div className="form-group">
                <label htmlFor={id}>
                    {label}
                </label>
                <input {...input} id={id} type={type} className="form-control" />
                {touched &&
                    (error &&
                        <span className="error-text">
                            {error}
                        </span>)}
            </div>
    );

// Form validation
function validate(formProps) {
    const errors = {};

    if (!formProps.title) {
        errors.title = 'Por favor insira um Titulo';
    }
    debugger;
    if (!formProps.image) {
        errors.image = 'Por favor insira uma url de imagem';
    }

    return errors;
}

MovieForm = reduxForm({
    form: 'movie',
    validate,
    enableReinitialize: true
})(MovieForm);

export default MovieForm;
