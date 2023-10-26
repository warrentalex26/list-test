import React, { useState } from "react";

function Search({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex justify-content-end mt-4">
      <input 
        type="text" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="Search..." 
        className="form-control me-2"
        style={{ maxWidth: '300px' }}
      />
      <button type="submit" className="btn btn-primary">Search</button>
    </form>
  );
}

export default Search;
