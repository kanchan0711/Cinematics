import React from 'react'
import { SUPPORTED_CATAGORIES } from '../utils/Constant'

const Header = () => {
  return (
    <div>
      <div className='flex justify-between items-center px-[10%] py-[1.5%] shadow-md bg-white '>
       <p className='font-bold text-lg'>Home</p>
       <div>
        <div>
          <select name="Movies" id="">
          {SUPPORTED_CATAGORIES.map((cat) => (
            <option key={cat.identifier} value={cat.identifier}>
              {cat.name}
              </option>
          ))}
          </select>
        <button className='border border-[#0075f2] text-[#0075f2] px-5 py-2 rounded-full font-bold hover:bg-[#0075f2] hover:text-white'>
            login
        </button>
       </div>
      </div>
    </div>
    </div>
  )
}

export default Header
