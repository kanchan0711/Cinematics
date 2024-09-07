import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addmovieCast } from '../utils/movieDetailsSlice';
import { useParams } from 'react-router-dom';

const useMovieCast = (id) => {
    const dispatch = useDispatch()
    const getMovieCast = async () =>{
        const data = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=38913ed3b726655f529384dbaf20542b&language=en-US`);
        const json = await data.json()
        console.log(json);
        dispatch(addmovieCast(json))
    }

    useEffect(() =>{
        getMovieCast()
    },[id])
}

export default useMovieCast
