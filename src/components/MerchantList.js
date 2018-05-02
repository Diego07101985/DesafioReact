import React from 'react';
import { NavLink } from 'react-router-dom';
// Child components
import Pagination from './Pagination';

const MerchantList = ({ movies, onDeleteMovie, pages, currentPage }) => {
    debugger;
    return (
        !movies.length ?
            <p className="alert alert-warning text-center">Nenhum Filme foi encontrado.</p>
            :
            <div className="merchant-list">
                <div className="responsive-table">
                    <table className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>Titulo</th>
                                <th>Titulo Original</th>
                                <th>Avatar</th>
                                <th>Sinposi</th>
                                <th>Tempo em segundos</th>
                                <th>Curtidas</th>
                                <th>Publicado</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {movies.map(movie =>
                                <tr key={movie.id}>
                                    <td>{movie.title}</td>
                                    <td>{movie.original_title}</td>
                                    <td><img className="avatar img-responsive efeito" src={movie.image} alt="Filme Avatar" /></td>
                                    <td>{movie.synopsis}</td>
                                    <td>{movie.duration_in_seconds}</td>
                                    <td>{movie.likes}</td>
                                    <td className="premium">
                                        {
                                            movie.published ?
                                                <span className="glyphicon glyphicon-ok"></span>
                                                :
                                                <span className="glyphicon glyphicon-remove"></span>
                                        }
                                    </td>
                                    <td>
                                        <NavLink className="btn btn-primary btn-sm"
                                            to={'/edit/' + movie.id}>Edit</NavLink>
                                    </td>
                                    <td>
                                        <button className="btn btn-sm btn-danger"
                                            onClick={() => onDeleteMovie(movie.id)}>
                                            Delete
                                    </button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                { /* show pagination if there are more than 1 page */
                    pages > 1 && <Pagination pages={pages} currentPage={currentPage} />
                }
            </div>
    )
};

export default MerchantList;
