import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addGenres } from '../utils/filterSlice';
import { API_OPTIONS } from '../utils/Constant';

const useFilter = () => {
    const dispatch = useDispatch();

    const geners = useSelector((store) => store.filterGenres.geners); 

    const getGenre = async() => {
        const data = await fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', API_OPTIONS)
       const json = await data.json();
       console.log(json) 
       dispatch(addGenres(json.genres))
    }
  

    useEffect(() => {
        if(!geners)getGenre()
    },[])
}

export default useFilter
