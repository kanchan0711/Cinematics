import React from 'react';
import { useDispatch } from 'react-redux';
import { SUPPORTED_CATAGORIES } from '../utils/Constant';
import { changeFilter } from '../utils/filterSlice';

const FilterMovies = () => {
  const dispatch = useDispatch();

  const handleFilterClick=(filterIdentifier) => {
    // dispatch(changeFilter(e.target.name
    // ));
    // console.log(e.target.name)
    dispatch(changeFilter(filterIdentifier))
    console.log(filterIdentifier)
  }
 
  

  return (
    <div className='mt-20 items-center border border-[#0075f2] rounded-md'>
      <p className='text-center font-bold m-4 text-lg'>Filters</p>
      <div className='flex flex-wrap gap-2 m-5'>
        {SUPPORTED_CATAGORIES.map((filter) => (
          <div key={filter.identifier}>
            <button
              className='border text-sm border-[#0075f2] text-[#0075f2] px-4 py-1 rounded-full font-bold hover:bg-[#0075f2] hover:text-white'
              onClick={() => handleFilterClick(filter.identifier)}
            >
              {filter.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterMovies;

