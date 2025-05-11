// SubmitButton.jsx
import React from 'react';

function SubmitButton() {
  // Handles the mouse enter event
  function handleEnter() {
    console.log("Mouse Entering");
  }

  // Handles the mouse leave event
  function handleLeave() {
    console.log("Mouse Exiting");
  }

  return (
    <div>
      <button
        onMouseEnter={handleEnter} // Tracks mouse entering
        onMouseLeave={handleLeave} // Tracks mouse leaving
      >
        Submit Password
      </button>
    </div>
  );
}

export default SubmitButton;
