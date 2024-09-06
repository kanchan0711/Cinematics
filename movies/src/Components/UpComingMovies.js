import React from 'react'
import MovieCart from './MovieCart'

const UpComingMovies = ({ title, movies }) => {
    

    return (
        <div  className=' '>
            <h2 className="text-center mx-10 py-8 font-bold text-3xl  ">{title}</h2>
            <div className='flex  items-center justify-center gap-4 overflow-y-scroll'>
            
                {movies?.map((movie) => (
                    <MovieCart key={movie.id} movie={movie}  />
                ))}
               
            </div>
         </div>
    )
}

export default UpComingMovies
