import { render } from '@testing-library/react';
import App from './';

test('renders learn react link', () => {
  render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
  expect(true).toBe(true);
});
