import React  from 'react'
import { useSelector } from 'react-redux'
import MovieCastCart from './MovieCastCart'

const MovieCast = () => {
    const Cast = useSelector(Store => Store.movieDetails.movieCast)
    const movieCast = Cast.cast
    console.log(Cast.cast)
   
    if (!movieCast) {
      return null; // Return nothing if movieCast is null or undefined
  }
  return (
<> 
    <h1 className='text-3xl m-4 font-bold'>Movie Cast</h1>
    <div className='flex  items-center justify-center gap-4 overflow-y-scroll'>
      {/* <MovieCastCart poster={profile_path}  charactor={character} name={name} /> */}
      {
      movieCast.map((cast) =>
      <MovieCastCart key={movieCast.id} poster={cast.profile_path}  charactor={cast.character} name={cast.name}/>
      )
      }
    </div>
</>
  )
}

export default MovieCast
