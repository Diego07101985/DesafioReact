import React from 'react';
import { NavLink } from 'react-router-dom';
// Child components

const MovieView = ({ movie }) => {
    return (
        <div className="row">
            <div className="col-sm-10 col-lg-6 col-sm-push-3 col-lg-push-3">
                <h1>{movie.title}</h1>
                <h2>Titulo Original : {movie.original_title}</h2>
                <div>
                    <img className="avatar img-responsive efeito" src={movie.image} alt="Filme Avatar" />
                </div>
                <h3>Sinopse : {movie.synopsis}</h3>
                <h3>Duração em segundos : {movie.duration_in_seconds}</h3>
                <h5>Curtidas : {movie.likes}</h5>
                <h5>
                    Publicado :
                {movie.published ?
                        <span className="glyphicon glyphicon-ok"></span>
                        :
                        <span className="glyphicon glyphicon-remove"></span>
                    }
                </h5>
                <h5>Atores</h5>
                {
                    movie.actors.map((actor) =>
                        <li key={actor.id}>
                            <li> Nome  {actor.name}</li>
                            <li> Idade {actor.age}</li>
                        </li>
                    )
                }

                <NavLink className="btn btn-primary btn-sm"
                    to={'/edit/' + movie.id}>Edit</NavLink>
                <p className="alert alert-success">
                    Filme foi salvo com sucesso
                <NavLink to="/filmes/1"> Retorna para a lista de filmes</NavLink>
                </p>
            </div>
        </div >
    )
};

export default MovieView;
