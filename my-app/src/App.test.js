import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

// Track typing logs
test('logs to console when typing in password input', () => {
  const logSpy = jest.spyOn(console, 'log');
  render(<App />);
  const inputElement = screen.getByPlaceholderText(/enter your password/i);
  fireEvent.change(inputElement, { target: { value: 'test123' } });
  expect(logSpy).toHaveBeenCalledWith('Entering password...');
  logSpy.mockRestore();
});

// Track mouse entering and leaving button
test('logs to console when hovering over and away from the submit button', () => {
  const logSpy = jest.spyOn(console, 'log');
  render(<App />);
  const buttonElement = screen.getByText(/submit password/i);

  fireEvent.mouseEnter(buttonElement);
  expect(logSpy).toHaveBeenCalledWith('Mouse Entering');

  fireEvent.mouseLeave(buttonElement);
  expect(logSpy).toHaveBeenCalledWith('Mouse Exiting');

  logSpy.mockRestore();
});
