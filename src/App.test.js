import { render, screen } from '@testing-library/react';
import App from './App';

test('renders firs screen', () => {
  render(<App />);
  const linkElement = screen.getByText(/hepsiburada/p);
  expect(linkElement).toBeInTheDocument();
});
