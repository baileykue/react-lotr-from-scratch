import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('checks for main component text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome/i);
  expect(linkElement).toBeInTheDocument();
});
