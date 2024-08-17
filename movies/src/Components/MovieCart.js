import React from 'react'
import { IMG_CDN_URL } from '../utils/Constant'

const MovieCart = ({posterPath}) => {
    // const movie_img = posterPath?.poster_path

  return (
    <div className=''>
      <img className='w-[150px] h-[225px] object-cover flex-shrink-0 ' src={IMG_CDN_URL + posterPath } alt="Movie"  /> 
    </div>
  )
}

export default MovieCart



