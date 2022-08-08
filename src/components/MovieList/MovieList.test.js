import { render } from '@testing-library/react'
import React from 'react'
import MovieList from './MovieList'

const movies = [
    {
        Poster: "https://m.media-amazon.com/images/M/MV5BZWI2NjliOTYtZjE1OS00YzAyLWJjYTQtYWNmZTQzMTQzNzVjXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
        Title: "Happy Gilmore",
        Type: "movie",
        Year: "1996",
        imdbID: "tt0116483"
    },
    {
        Poster: "https://m.media-amazon.com/images/M/MV5BZWU2NDkxYjktNWVlMS00MTM4LWJjMDAtOWYxZjJkZWFhYzAxXkEyXkFqcGdeQXVyMTA1NjE5MTAz._V1_SX300.jpg",
        Title: "Happy Feet",
        Type: "movie",
        Year: "2006",
        imdbID: "tt0366548"
    }
]

const setup = () => {
  const utils = render(<MovieList movies={movies} />)
  return {
    ...utils,
  }
}

test('MovieList should have children', () => {
    const { container } = setup()

    const movieFrames = container.getElementsByClassName('movie-frame');
    expect(movieFrames).toHaveLength(2)
});
