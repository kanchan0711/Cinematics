import  { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { API_OPTIONS } from '../utils/Constant';
import { addMovieDetails, removeMovieDetails } from '../utils/movieDetailsSlice';


const useMovieDetails = () => {
console.log("get movies")
    const dispatch = useDispatch();
  const location = useLocation();
  const { id } = useParams();


  const getMovieDetails = async () => {
    const data = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, API_OPTIONS);
    const json = await data.json();
    dispatch(addMovieDetails(json));
  };

  useEffect(() => {
    if (!id) return; 
    getMovieDetails();

    const unlisten = () => {
      if (location.state && location.state.from === 'pop') {
        dispatch(removeMovieDetails());
      }
    };

    

    // Cleanup on unmount
    return () => {
      unlisten();
      dispatch(removeMovieDetails());
    };
  }, [dispatch, id, location.state]);


}

export default useMovieDetails;
