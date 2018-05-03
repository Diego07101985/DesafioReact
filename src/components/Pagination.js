import React from 'react';
import { NavLink } from 'react-router-dom';

const Pagination = ({ currentPage, paginateMovie, pages }) => {
    let prevLink = parseInt(currentPage, 10) - 1;
    let nextLink = parseInt(currentPage, 10) + 1;
    return (
        <div className="text-center">
            <nav>
                <ul className="pager">
                    <li>
                        {prevLink > 0 ? // Disable previous page link if showing the first page
                            <NavLink to={'/filmes/?page=' + prevLink}
                                onClick={() => paginateMovie('/filmes/?page=' + prevLink)}
                            >Previous</NavLink>
                            :
                            <span>Previous</span>
                        }
                    </li>
                    <li>
                        {nextLink <= pages ? // Disable next page link if showing the last page
                            <NavLink to={'/filmes/?page=' + nextLink}
                                onClick={() => paginateMovie('/filmes/?page=' + nextLink)}

                            >Next</NavLink>
                            :
                            <span>Next</span>
                        }
                    </li>
                </ul>
            </nav>
        </div>
    )
};

export default Pagination;
