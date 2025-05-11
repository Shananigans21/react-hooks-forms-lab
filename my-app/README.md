# React Password Security Monitor

This project is a small React app created to practice working with events in React. It features a password input field and a submit button that log user activity to the console—ideal for implementing anti-bot measures.

##  Project Setup

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Install Dependencies

```bash
npm install
```

###  Run the App

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

###  Run Tests

```bash
npm test
```

This launches the test runner in interactive watch mode. Tests include checks for proper rendering and logging of user interactions with input and button elements.

## Features

- Password input field that logs `"Entering password..."` when the user types.
- Submit button that logs:
  - `"Mouse Entering"` on hover.
  - `"Mouse Exiting"` on mouse leave.

These events are tracked for the purpose of simulating anti-botting behavior.

## Component Structure

```
src/
├── App.js            // Renders PasswordInput and SubmitButton
├── PasswordInput.jsx // Handles password typing
├── SubmitButton.jsx  // Handles mouse enter/leave
├── App.test.js       // Contains basic rendering tests
└── index.js
```

##  Testing Notes

- Event handlers are implemented and can be tested with `console.log` outputs.
- You can mock `console.log` in tests using `jest.spyOn(console, 'log')`.

## Screenshots

_(Add screenshots of your UI here if available.)_

##  Code Comments

- All major components and event handlers are commented to help future developers or security engineers understand the purpose and flow of data.

##  Learn More

To learn more about React or Create React App, check out:
- [React Documentation](https://reactjs.org/)
- [Create React App Docs](https://create-react-app.dev/)
