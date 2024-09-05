import {useDispatch} from "react-redux"
import { API_OPTIONS } from '../utils/Constant'
import { addnowplayingMovies } from '../utils/moviesSlice'
import { useEffect } from "react";


const useNowPlayingMovies = () =>{
    const dispatch = useDispatch();

    const getNowPlayingMovies = async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS)
      
      // const data = await fetch('https://api.themoviedb.org/3/configuration/languages', API_OPTIONS)
      const json = await data.json();
      // console.log(json)
      dispatch(addnowplayingMovies(json.results));
      // dispatch(addnowplayingMovies(json))
  
    }
  
    useEffect(()=>{
      getNowPlayingMovies()
    })
}

export default useNowPlayingMovies;