import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import FilterMovies from "./FilterMovies";

const HomeMovieContainer = () => {
  const movies = useSelector((store) => store.movies);

  
  return (
    <div className="flex m-8">
      <div className="w-3/12">
      <FilterMovies/>
      </div>
      <div className="w-9/12">
      <MovieList title={"Now playing"} movies={movies.nowPlayingMovies} />
      {/* <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
      <MovieList title={"Popular"} movies={movies.popularMovies} />
      <MovieList title={"Up Coming"} movies={movies.upcomingMovies} /> */}
    </div>
    </div>
  );
};

export default HomeMovieContainer;
