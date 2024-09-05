import React from "react";
import MovieCart from "./MovieCart";

const FilterMovies = ({title, filterMovies}) => {

  if (!filterMovies || filterMovies.length === 0) {
    return null}
  // const filterMovies = useSelector((store) => store.filterGenres.getGenreMovieList);
  // console.log(filterMovies)
  
  


  return (
    <div className=" bg-white rounded-2xl h-[138.7vh] overflow-y-scroll">
    <div>
    <div className="flex justify-center"> 
        {/* <h2 className="text-[#032541] font-bold text-3xl mt-5 ">{title}</h2> */}
        </div>
            <div className='flex flex-wrap justify-center'>
            {/* <Slider {...settings}> */}
              { (filterMovies.length === 0)? null:  ( filterMovies?.map((movie) => (
                    <MovieCart key={movie.id} movie={movie}  />
                )))}
                {/* </Slider> */}
            </div>
            </div>
            </div>
   
  );
};

export default FilterMovies;
