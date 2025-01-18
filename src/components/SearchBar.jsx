// import React, { useState } from "react";
// import "../App.css";

// const SearchBar = () => {
//   const [query, setQuery] = useState("");

//   const handleSearch = () => {
//     if (query.trim()) {
//       alert(`Searching for: ${query}`);
//     }
//   };

//   return (
//     <div className="search-container">
//       <input
//         type="text"
//         placeholder="Search for diseases or trials..."
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//       />
//       <button onClick={handleSearch}>Search</button>
//     </div>
//   );
// };

// export default SearchBar;


// import React, { useState } from "react";
// import "../App.css";

// const SearchBar = () => {
//   const [query, setQuery] = useState("");

//   const handleSearch = () => {
//     if (query.trim()) {
//       alert(`Searching for: ${query}`);
//     }
//   };

//   return (
//     <div className="search-container">
//       <input
//         type="text"
//         placeholder="Search for diseases or trials..."
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//       />
//       <button onClick={handleSearch}>🔍</button>
//     </div>
//   );
// };

// export default SearchBar;

// import React, { useState } from "react";
// import "./SearchBar.css";

// const SearchBar = () => {
//   const [query, setQuery] = useState("");

//   const handleSearch = () => {
//     if (query.trim()) {
//       alert(`Searching for: ${query}`);
//     }
//   };

//   return (
//     <div className="search-bar">
//       <input
//         type="text"
//         placeholder="Search for diseases or trials..."
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//       />
//       <button onClick={handleSearch}>Search</button>
//     </div>
//   );
// };

// export default SearchBar;

import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    if (query.trim()) {
      alert(`Searching for: ${query}`);
      // Add search functionality here
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        placeholder="Search for diseases, genes, or clinical trials..."
        className="search-input"
      />
      <button onClick={handleSearch} className="search-button">
        🔍 Search
      </button>
    </div>
  );
};

export default SearchBar;
