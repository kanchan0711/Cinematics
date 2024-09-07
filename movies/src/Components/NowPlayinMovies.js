import React from 'react'
import { useSelector } from 'react-redux';
import MovieCart from './MovieCart';

const NowPlayingMovies = () => {
    const movies = useSelector((store) => store.movies); // Fetch all movies // Fetch selected category from category slice
    const selectedCategory = useSelector((store) => store.category.category);

    // Map category identifier to the corresponding movies in the store
  const category = movies[selectedCategory]
  console.log(category)
  return (
    <>
    <h2 className="text-center mx-10 py-8 font-bold text-3xl  ">Now Playing Movies</h2>
    <div className='flex flex-wrap justify-center gap-4'>
        {category.map((movie) => 
            <MovieCart key={movie.id} movie={movie}  />
        )}
        </div>
    </>
  )
}

export default NowPlayingMovies
