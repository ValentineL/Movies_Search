
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './components/MovieList';
import React, { useEffect, useState } from 'react';
import './App.css';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SeachBox';

function App() {
    const [movies, setMovies] = useState([])
    const [searchValue, setSearchValue] = useState('')

    debugger

    const getMovieRequest = async (resp) => {
        const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=ddd1d67b`
        const response = await fetch(url)
        const responseJSON = await response.json()
        debugger
        if (responseJSON.Search) {
            setMovies(responseJSON.Search)
        } else {
            setMovies('')
        }
    }

    useEffect(() => {
        getMovieRequest(searchValue);
    }, [searchValue])


    debugger
    return (
        <div className="container-fluid movie-app">
            <div className='row d-flex align-items-center mt-4 mb-4'>
                <MovieListHeading heading='Movies' />
                <SearchBox
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                    />
            </div>
            {movies.length > 0&&
                <div className='row'>
                    <MovieList
                        movies={movies}
                    />
                </div>
            }
        </div>
    );
}

export default App;
