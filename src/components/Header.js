import React from "react";

// Header component receives dark mode state, toggle function,
// the search input value, and a change handler as props
function Header({ isDarkMode, onDarkModeClick, searchTerm, onSearchChange }) {
  return (
    <header>
      <h2>Shopster</h2>
      <button onClick={onDarkModeClick}>
        {isDarkMode ? "Dark" : "Light"} Mode
      </button>
      
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </header>
  );
}

export default Header;
