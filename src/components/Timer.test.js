import { render, screen } from '@testing-library/react';
import Timer from './Timer';

test('renders a timer that starts at 00:00:00.00', () => {
  render(<Timer elapsedTime={0} />);
  const time = screen.getByTestId('time');

  expect(time).toHaveTextContent(/^00:00:00.0$/);
});

test('handles hours, minutes, and seconds properly', () => {
  render(<Timer elapsedTime={7322200} />);
  const time = screen.getByTestId('time');

  expect(time).toHaveTextContent(/02:02:02.2/)
});