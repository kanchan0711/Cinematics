import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addmovieCast } from '../utils/movieDetailsSlice';
import { API_key } from '../utils/Constant';

const useMovieCast = (id) => {
    const dispatch = useDispatch()
    const getMovieCast = async () =>{
        const data = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_key}&language=en-US`);
        const json = await data.json()
        console.log(json);
        dispatch(addmovieCast(json))
    }

    useEffect(() =>{
        getMovieCast()
    },[id])
}

export default useMovieCast
