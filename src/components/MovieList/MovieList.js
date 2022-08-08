import '../MovieList/MovieList.css';

const MovieList = (props) => {
    return (
        <>
            {props.movies.map((movie, index) =>
            <div key={index} className='image-container d-flex movie-frame justify-content-start p-0 m-3'>
                <img src={movie.Poster} alt='movie'></img>
            </div>)}
        </>
    )
}
export default MovieList;
