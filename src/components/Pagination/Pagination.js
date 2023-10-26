import React from 'react';
import './Pagination.css';

function Pagination({ currentPage, hasNextPage, prevPage, onChange }) {
  // Si no hay paginación, no mostramos el componente
  if (currentPage === 1 && !hasNextPage && !prevPage) {
    return null;
  }

  let pages = [];

  // Si hay página anterior, añadimos esa página
  if (prevPage !== null) {
    pages.push(currentPage - 1);
  }

  // Siempre añadimos la página actual
  pages.push(currentPage);

  // Si hay página siguiente, añadimos esa página
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
