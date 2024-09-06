import React from "react";
import { useSelector } from "react-redux";
import { SUPPORTED_CATEGORIES } from "../utils/Constant";
import UpComingMovies from "./UpComingMovies";

const HomeMovieContainer = () => {
  const movies = useSelector((store) => store.movies); // Fetch all movies
  const searchMovie = useSelector((store) => store.searchData); // Search state
  const selectedCategory = useSelector((store) => store.category.category); // Fetch selected category from category slice

  // Map category identifier to the corresponding movies in the store
  const categoryToMoviesMap = {
    nowPlaying: movies.nowPlayingMovies,
    popular: movies.popularMovies,
    topRated: movies.topRatedMovies,
    upComing: movies.upComingMovies,
  };
console.log(movies.nowPlayingMovies)
  // Get the movies for the current category
  const categoryMovies = categoryToMoviesMap[selectedCategory];

  return (
    <>
      {searchMovie.showSearchMovies ? ( null
        // If search is active, show search results
        // <MovieList title={"Your Movies"} movies={searchMovie.searchMovies} />
      ) : (
        // Otherwise, show movies based on selected category
        
        <UpComingMovies title={"UpComing Movies"} movies={movies.upComingMovies} />
      )}
      {/* <MovieList e={"nowPlaying"} movies={movies.nowPlayingMovies}/> */}
    </>
  );
};

export default HomeMovieContainer;












// import React from "react";
// import { useSelector } from "react-redux";
// import MovieList from "./MovieList";
// import { SUPPORTED_CATEGORIES } from "../utils/Constant";
// // import category from "./category";


// const HomeMovieContainer = () => {

  
  
// const movies = useSelector((store) => store.movies);
// const searchMovie = useSelector((store)=> store.searchData);
// // console.log(movies)
// const category = useSelector((store) => store.category);


  
//   return (
    // <>
    // {(searchMovie.showSearchMovies)? (
    //   <MovieList title={"Your Movies"} movies={searchMovie.searchMovies}/>

    // ):(<><MovieList title={"Now playing"} movies={movies.nowPlayingMovies} />
    //   <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
    // <MovieList title={"Popular"} movies={movies.popularMovies} />
    //   <MovieList title={"Up Coming"} movies={movies.upcomingMovies} /></>)}

    // </>

//        <>
//           {SUPPORTED_CATEGORIES.map((cat) => {
//             const categoryMovies = movies[category]; // Access movies dynamically
//             if (categoryMovies) {
//               return (
//                 <MovieList key={cat.identifier} title={cat.name} movies={categoryMovies} />
//               );
//             }
//             return null; // Return null if no movies are found for this category
//           })}
    

//     </>
//   );
// };

// export default HomeMovieContainer;
