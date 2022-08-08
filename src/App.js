
import MovieList from './components/MovieList/MovieList';
import { useEffect, useState } from 'react';
import MovieListHeading from './components/MovieListHeading/MovieListHeading';
import SearchBox from './components/SearchBox/SeachBox';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

function App() {
    const [movies, setMovies] = useState([])
    const [searchValue, setSearchValue] = useState('')

    useEffect(() => {
        const getMovieRequest = async (resp) => {
            const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=ddd1d67b`
            const response = await fetch(url)
            const responseJSON = await response.json()

            if (responseJSON.Search) {
                setMovies(responseJSON.Search)
            } else {
                setMovies('')
            }
        }

        getMovieRequest(searchValue);
    }, [searchValue])

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
