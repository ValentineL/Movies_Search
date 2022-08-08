import { render, screen, fireEvent } from '@testing-library/react'
import React from 'react'
import App from './App'

const setup = () => {
  const utils = render(<App />)
  const input = utils.getByLabelText('text-input')
  return {
    input,
    ...utils,
  }
}

test('App should have text', () => {
    setup()
    expect(screen.getByText('Movies')).toBeTruthy();
});


test('App should have an input field', () => {
    const { getByRole } = setup();
    const button = getByRole('textbox');
    expect(button).toBeTruthy();
});

test('App should render movie frames when typing search criteria value', () => {
    const { input, container } = setup()

    fireEvent.change(input, { target: { value: 'Happy' } });
    const movieFrames = container.getElementsByClassName('movie-frame');
    expect(movieFrames).toBeTruthy()
});
