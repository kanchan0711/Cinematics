import React from 'react'
import MovieCart from './MovieCart'

const MovieList = ({ title, movies }) => {
    // console.log(movies)
    if (!movies) return null;
    return (
        <div>
            <h2 className="text-center mb-8 font-bold text-3xl ">{title}</h2>
            <div className='flex flex-wrap items-center justify-center '>
                {movies?.map((movie) => (
                    <MovieCart key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    )
}

export default MovieList
