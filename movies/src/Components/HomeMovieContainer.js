import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

const HomeMovieContainer = () => {
  const movies = useSelector((store) => store.movies);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();      
  useUpcomingMovies();
  return (
    <div>
      <MovieList title={"Now playing"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
      <MovieList title={"Popular"} movies={movies.popularMovies} />
      <MovieList title={"Up Coming"} movies={movies.upcomingMovies} />
    </div>
  );
};

export default HomeMovieContainer;
