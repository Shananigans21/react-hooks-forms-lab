// PasswordInput.jsx
import React, { useState } from 'react';

function PasswordInput() {
  const [password, setPassword] = useState("");

  // Handles the change event to track typing
  function handleChange(event) {
    setPassword(event.target.value);
    console.log("Entering password...");
  }

  return (
    <div>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={handleChange} // Tracks the password input
          placeholder="Enter your password"
        />
      </label>
    </div>
  );
}

export default PasswordInput;
