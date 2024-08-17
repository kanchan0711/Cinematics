import React from 'react'
import MovieCart from './MovieCart'

const MovieList = ({ title, movies }) => {
    console.log(movies)
    if (!movies) return null;
    return (
        <div className=''>
            <h2 className="text-xl font-bold mb-4">{title}</h2>
            <div className='w-full flex overflow-x-scroll space-x-4 scrollbar-hide'>
                {movies?.map((movie) => (
                    <MovieCart key={movie.id} posterPath={movie.poster_path} />
                ))}
            </div>
        </div>
    )
}

export default MovieList
