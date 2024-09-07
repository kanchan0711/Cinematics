import React from 'react'
import { IMG_CDN_URL } from '../utils/Constant'

const MovieCastCart = ({poster, charactor, name }) => {
    console.log(poster, charactor, name)
  return (
    <>
   <div>
   <div className=" w-[120px] h-[320px] m-3 shadow-lg rounded-md">
      <img
        className="w-[120px] h-[175px] object-cover flex-shrink-0 rounded-t-md"
        src={IMG_CDN_URL + poster}
        alt="Movie"
      />
     
      
      <div className="p-2">
        <p className="font-bold">{charactor}</p>
        <p className='text-sm'>{name}</p>
      </div>
    </div>
    
   </div>
    </>
  )
}

export default  MovieCastCart
