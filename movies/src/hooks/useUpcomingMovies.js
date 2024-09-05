import { useDispatch } from "react-redux"
import { API_OPTIONS } from "../utils/Constant"
import { addUpcomingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
    const dispatch = useDispatch();

    const getUpcomingMovies = async() =>{
        // const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS)
        const data = await  fetch('https://api.themoviedb.org/3/discover/movie?api_key=38913ed3b726655f529384dbaf20542b&with_genres=27', API_OPTIONS)

        // fetch('https://api.themoviedb.org/3/search/keyword?query=%22horror%22&page=1', API_OPTIONS)
        const json = await data.json();
        // console.log(json)
        dispatch(addUpcomingMovies(json.results))

    }

    useEffect(() =>{
        getUpcomingMovies();
    })
}

export default useUpcomingMovies;