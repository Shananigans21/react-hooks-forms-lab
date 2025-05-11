// App.js

import React from 'react';
import './App.css';

// Importing custom components
import PasswordInput from './PasswordInput';
import SubmitButton from './SubmitButton';

// Root component that renders the password input and submit button
function App() {
  return (
    <div className="App">
      <h1>Password Security Monitor</h1>

      {/* Component to handle password input and track typing */}
      <PasswordInput />

      {/* Component to handle mouse interactions with the submit button */}
      <SubmitButton />
    </div>
  );
}

export default App;
