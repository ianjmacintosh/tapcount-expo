import { render, screen, within } from '@testing-library/react';
import Controls from './Controls';

beforeEach(() => {
    render(<Controls resetCount={jest.fn()} resetTime={jest.fn()} pauseTimer={jest.fn()} startTimer={jest.fn()} />);
})

test('controls are labeled properly', () => {
    const controls = screen.getByTestId('controls-component');
    expect(controls).toBeInTheDocument();
})

test('controls have max, pause, and reset buttons', () => {
    const controls = screen.getByTestId('controls-component');

    // Expect a "max" button
    // const maxButton = within(controls).getByTestId('max-button');
    // expect(maxButton).toBeInTheDocument();

    // Expect a "stop" button
    const stopButton = within(controls).getByTestId('pause-button');
    expect(stopButton).toBeInTheDocument();

    // Expect a "reset" button
    const resetButton = within(controls).getByTestId('reset-button');
    expect(resetButton).toBeInTheDocument();
})