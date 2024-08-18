import React from 'react'

const FilterMovies = () => {
  return (
    <div className='mt-20 items-center border border-[#0075f2]  rounded-md '>
        <p className='text-center font-bold m-4 text-lg'>Filters </p>
      
      <div className='flex flex-wrap gap-2 m-5'>
        <div>
        <button className=' border text-sm border-[#0075f2] text-[#0075f2] px-4 py-1 rounded-full font-bold hover:bg-[#0075f2] hover:text-white'>Now PLaying</button>
        </div>
        <div>
        <button className=' border text-sm border-[#0075f2] text-[#0075f2] px-4 py-1 rounded-full font-bold hover:bg-[#0075f2] hover:text-white'>Up Coming</button>
        </div>
        <div>
        <button className=' border text-sm border-[#0075f2] text-[#0075f2] px-4 py-1 rounded-full font-bold hover:bg-[#0075f2] hover:text-white'>Tranding</button>
        </div>
        <div>
        <button className=' border text-sm border-[#0075f2] text-[#0075f2] px-4 py-1 rounded-full font-bold hover:bg-[#0075f2] hover:text-white'>Popular</button>
        </div>
      </div>
    </div>
  )
}

export default FilterMovies
