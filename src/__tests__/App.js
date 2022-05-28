import { render, screen } from '@testing-library/react';
import { App } from '../App';

test('renders Title', () => {
  render(<App />);
  const title = screen.getByText(
    "Hi, I'm Damon, and on occasion, I like to build things."
  );
  expect(title).toBeInTheDocument();
});
