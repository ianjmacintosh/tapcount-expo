import { render, screen, within } from '@testing-library/react';
import Statistics from './Statistics';

// Fake timers using Jest
beforeEach(() => {
  jest.useFakeTimers("modern")
})

// Running all pending timers and switching to real timers using Jest
afterEach(() => {
  jest.runOnlyPendingTimers()
  jest.useRealTimers()
})

test('the speed is accurate', () => {
    render(<Statistics count={61} elapsedTime={180000} timeObject={{minutes:"03"}} />);

    const statistics = screen.getByTestId('statistics-component'),
      speed = within(statistics).getByTestId('speed'),
      count = within(statistics).getByTestId('count'),
      time = within(statistics).getByTestId('time');

    expect(speed).toHaveTextContent('20/min');
    expect(count).toHaveTextContent('61');
    expect(within(time).getByTestId('minutes')).toHaveTextContent('03');
  })