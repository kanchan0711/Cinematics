import React from 'react'
import { IMG_CDN_URL } from '../utils/Constant'

const MovieCart = ({movie}) => {
 console.log(movie)
  const {poster_path,original_title,vote_average } = movie
  

  return (
    // <></>
    <div className='m-4 w-[200px]'>
      <img className='w-[200px] h-[275px] object-cover flex-shrink-0 rounded-t-md' src={IMG_CDN_URL + poster_path } alt="Movie"  /> 
      <button className='w-[200px] p-1 bg-[#032541] text-white rounded-b-md hover:opacity-90'>Book Now</button>
      <div className='my-2'>
        <p className='font-bold'>{original_title}</p>
        <p>{vote_average}</p>
      </div>
    </div>
  )
}

export default MovieCart



