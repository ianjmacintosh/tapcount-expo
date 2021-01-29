import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from './Counter';

test('renders a counter that starts at 0', () => {
  render(<Counter count={0} setCount={() => {}} />);
  const count = screen.getByTestId('count');

  expect(count).toHaveTextContent(/^0$/);
});