import { useEffect } from "react";
import { API_OPTIONS } from "../utils/Constant";
import { useDispatch } from "react-redux";
import { addmovieTrailer } from "../utils/moviesSlice";
import { useParams } from "react-router-dom";


const useMovieTrailer = (id) =>{
    // console.log(movieId)

    const dispatch = useDispatch();
  const getMoviesVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json.results[19]);

    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData ? filterData[0] : json.results[0];
    console.log(trailer);
    dispatch(addmovieTrailer(trailer));
  };

  useEffect(() => {
    getMoviesVideos();
  }, [id]);


    

}

export default useMovieTrailer;