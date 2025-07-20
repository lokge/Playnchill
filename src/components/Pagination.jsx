import React, { useEffect } from 'react';

const Pagination = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    //Скрываю пагинацию
    if (totalPages <= 1) return null;

    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    const nextPage = () => {
        if (parseInt(currentPage) < parseInt(totalPages)) {
            onPageChange(parseInt(currentPage) + 1);
        }
    }

    const prevPage = () => {
        if (parseInt(currentPage) != 1) {
            onPageChange(parseInt(currentPage) - 1);
        }
    }

    return (
        <div className='pagination__row'>
            <button onClick={() => prevPage()} type='button' className='pagination__btn'>Назад</button>
            
            <div className="pagination__row-pages">
            {
                pageNumbers.map((number) => (
                    <button
                    key={number}
                    onClick={() => onPageChange(number)}
                    className={`pagination__row-btn ${number == currentPage ? 'active' : ''}`}>
                        {number}
                    </button>
                ))
            }
            </div>

            <button onClick={() => nextPage()} type='button' className='pagination__btn'>Вперед</button>
        </div>
    );
};

export default Pagination;