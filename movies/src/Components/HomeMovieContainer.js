import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
// import category from "./category";


const HomeMovieContainer = () => {

  
  
const movies = useSelector((store) => store.movies);
const searchMovie = useSelector((store)=> store.searchData);
// console.log(movies)
const category = useSelector((store) => store.category);

  
  return (
    <div className="">
      <div className="">
      
      </div>
      <div className="">
    {(searchMovie.showSearchMovies)? (
      <MovieList title={"Your Movies"} movies={searchMovie.searchMovies}/>

    ):(<><MovieList title={"Now playing"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
    <MovieList title={"Popular"} movies={movies.popularMovies} />
      <MovieList title={"Up Coming"} movies={movies.upcomingMovies} /></>)}

      

      {/* <MovieList title={"Now playing"} movies={movies.nowPlayingMovies} />
<MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
<MovieList title={"Popular"} movies={movies.popularMovies} />
<MovieList title={"Up Coming"} movies={movies.upcomingMovies} /> */}
    </div>
    </div>
  );
};

export default HomeMovieContainer;
