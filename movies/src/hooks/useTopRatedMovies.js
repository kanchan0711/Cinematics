import { useDispatch, useSelector } from "react-redux"
import { API_OPTIONS } from "../utils/Constant"
import { useEffect } from "react";
import { addTopRatedMovies } from "../utils/moviesSlice";


const useTopRatedMovies = () =>{
const dispatch = useDispatch();

const topRatedMovies = useSelector(store => store.movies.topRatedMovies)

    const getTopRatedMovies = async () =>{
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS)
        const json = await data.json();
        dispatch(addTopRatedMovies(json.results))
        console.log("top rated")
    }
    useEffect(() =>{
        if(!topRatedMovies) getTopRatedMovies();
    },)
}

export default useTopRatedMovies;