import React from 'react'
// import { BG_IMG } from '../utils/Constant'

const SearchBar = () => {
  return (
    <div className='bg-[#032541]'>
      <div className='pt-10 px-28 text-white'>
        <h1 className='text-4xl font-bold'>Want to book movie ticket?</h1>
        <p className='text-gray-400 text-2xl'>Book Your Ticket now...</p>
      </div>


    <div className='flex justify-center '>
      {/* <img  className=" object-cover" src={BG_IMG} alt="" /> */}

      <form className="relative  w-10/12 grid grid-cols-12 rounded-md pt-16 pb-16"
      onSubmit={(e) => e.preventDefault()}
      >
        <input
        // ref={searchText}
          className=" bg-white col-span-10 w-full p-3  "
          type="text"
          placeholder="What would you like to watch today"
        />

        <button className=" bg-gradient-to-r from-blue-500 to-purple-600 col-span-2  text-white relative z-10 font-bold text-lg">
          search
        </button>
      </form>
      </div>
    </div>
   
  )
}

export default SearchBar
