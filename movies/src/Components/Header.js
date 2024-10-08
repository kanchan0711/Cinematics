 import React from 'react'
import { SUPPORTED_CATEGORIES } from '../utils/Constant'
import { useDispatch } from 'react-redux';
import { changeCategory} from "../utils/movieCategorySlice"
import { Link } from 'react-router-dom';
import { addmovieTitle } from '../utils/moviesSlice';


const Header = () => {
  const dispatch = useDispatch();

  const handleCategoryClick=(identifier, name) => {
    // dispatch(changeCategory(e.target.name
    // ));
    // console.log(e.target.name)
    dispatch(changeCategory(identifier))
    dispatch(addmovieTitle(name))
    // console.log(identifier)
    
  }
  return (
    <>
      <div className='flex justify-between items-center px-8 py-[0.7%] shadow-md bg-[#032541] text-white '>
 
        <div className='flex font-bold text-lg gap-5 items-center '> 
        <p className="text-3xl bg-gradient-to-r from-[#8bcda3] via-[#57c3bc] to-[#01b3e4] bg-clip-text text-transparent">
        CINEMATICS
</p>
          <p className='text-3xl'> </p>
       <Link to = {"/"}><p className=''>Home</p></Link> 
       <Link to={"/category"}>Category</Link>
       </div>
       <div>
        <div>
          {/* <select className="py-2 px-3 m-2 border-none bg-gray-600 text-white rounded-sm" onChange={handleCategoryClick}>
          {SUPPORTED_CATEGORIES.map((Category) => (
            <option key={Category.identifier} value={Category.identifier} >
              {Category.name}
              </option>
          ))}
          </select> */}
          <Link to={"/"}>
           <button className='border border-[#0075f2] text-[#0075f2] px-5 py-2 rounded-full font-bold hover:bg-[#0075f2] hover:text-white '>
            Search
        </button>
        </Link>
        <button className='border border-[#0075f2] text-[#0075f2] px-5 py-2 rounded-full font-bold hover:bg-[#0075f2] hover:text-white'>
            Dark
        </button>
       </div>
      </div>
    </div>




    <div className='bg-white flex justify-center gap-16 font-bold text-[#032541]  '>

    {SUPPORTED_CATEGORIES.map((Category) => (
            <Link to={"movies/nowPlaying"}><p key={Category.identifier} value={Category.identifier} className='py-2 hover:text-[#01b4e4] cursor-pointer ' onClick={() => handleCategoryClick(Category.identifier, Category.name)}>
              {Category.name}
              </p>
              </Link>
          ))}
         
    </div>
    </>
  )
}

export default Header
