import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { API_OPTIONS } from '../utils/Constant';
import { addmovieDetails,  } from '../utils/movieDetailsSlice';

const useMovieDetails = (id) => {
  const dispatch = useDispatch();
  const location = useLocation();

  const getMovieDetails = async () => {
    if (id === undefined) return; // Check if id exists
    try {
      const data = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, API_OPTIONS);
      const json = await data.json();
      dispatch(addmovieDetails(json));
      console.log(json);
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }
  };

  useEffect(() => {
    if (!id) return; // Exit early if id is undefined
    getMovieDetails();

    // const unlisten = () => {
    //   if (location.state && location.state.from === 'pop') {
    //     dispatch(removeMovieDetails());
    //   }
    // };

    // Cleanup on unmount
    // return () => {
    //   unlisten();
    //   dispatch(removeMovieDetails());
    // };
  }, [dispatch, id, location.state]);
};

export default useMovieDetails;
