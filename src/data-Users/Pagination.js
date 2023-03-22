import React from 'react';

const Pagination = ({ UsersPerPage, totalUsers, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalUsers / UsersPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className=''>
                {pageNumbers.map(number => (
                    <li key={number} className=' text-red-700'>
                        <a onClick={() => paginate(number)} href='!#' className='text-red-600 bg'>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;