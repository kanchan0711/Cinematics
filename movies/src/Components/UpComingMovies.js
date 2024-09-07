import React from "react";
import MovieCart from "./MovieCart";
import { useSelector } from "react-redux";

const UpComingMovies = () => {
  const movies = useSelector((store) => store.movies);
  const searchData = useSelector((store) => store.searchData);

  return (
    <>
      {searchData.showSearchMovies ? (
         <>
         <h2 className="text-center mx-10 py-8 font-bold text-3xl  ">
           Your Movies
         </h2>
         <div className="flex  items-center justify-center flex-wrap gap-4 mx-4">
           {searchData.searchMovies?.map((movie) => (
             <MovieCart key={movie.id} movie={movie} />
           ))}
         </div>
       </>
      ) : (
        <>
          <h2 className="text-center mx-10 py-8 font-bold text-3xl  ">
            Up Coming Movies
          </h2>
          <div className="flex  items-center justify-center gap-4 overflow-y-scroll">
            {movies.upComingMovies?.map((movie) => (
              <MovieCart key={movie.id} movie={movie} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default UpComingMovies;
