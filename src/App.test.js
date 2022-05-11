import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Title', () => {
  render(<App />);
  const title = screen.getByText('UOS DTS Grade Calculator');
  expect(title).toBeInTheDocument();
});
