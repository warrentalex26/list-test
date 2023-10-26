import React from 'react';
import './Pagination.css';

function Pagination({ currentPage, hasNextPage, prevPage, onChange }) {
  if (currentPage === 1 && !hasNextPage && !prevPage) {
    return null;
  }
  let pages = [];
  if (prevPage !== null) {
    pages.push(currentPage - 1);
  }
  pages.push(currentPage);
  if (hasNextPage) {
    pages.push(currentPage + 1);
  }

  return (
    <div className="pagination-container">
      {prevPage !== null && (
        <button onClick={() => onChange(currentPage - 1)}>&laquo;</button>
      )}

      {pages.map(page => (
        <button
          key={page}
          className={page === currentPage ? 'active' : ''}
          onClick={() => onChange(page)}
        >
          {page}
        </button>
      ))}

      {hasNextPage && (
        <button onClick={() => onChange(currentPage + 1)}>&raquo;</button>
      )}
    </div>
  );
}

export default Pagination;
