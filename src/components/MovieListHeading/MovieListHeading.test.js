import { render, screen } from '@testing-library/react'
import React from 'react'
import MovieListHeading from './MovieListHeading'

const setup = () => {
  const utils = render(<MovieListHeading heading='Movies'/>)
  return {
    ...utils,
  }
}

test('MovieListHeading should have text', () => {
    setup()
    expect(screen.getByText('Movies')).toBeTruthy();
});
