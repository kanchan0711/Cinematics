import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/Constant';
import { useDispatch } from 'react-redux';
import { addsearchMovies } from '../utils/searchSlice';

const useSearchMovies = (searchMovieName) => {
  console.log(searchMovieName)

  const dispatch = useDispatch()

       const getSearchMovies = async () => {
    if (searchMovieName) {
      const data = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${searchMovieName}&include_adult=false&language=en-US&page=1`, 
        API_OPTIONS
      );
      const json = await data.json();
      console.log(searchMovieName);
      console.log(json.results);
      dispatch(addsearchMovies(json.results))
    }
  };

  useEffect(() => {
    getSearchMovies();
  }, [searchMovieName]);  // useEffect now depends on the `searchMovieName` state
}

export default useSearchMovies
