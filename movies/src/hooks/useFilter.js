import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addGenres } from '../utils/filterSlice';
import { API_OPTIONS } from '../utils/Constant';

const useFilter = () => {
    const dispatch = useDispatch();

    const getGenre = async() => {
        const data = await fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', API_OPTIONS)
       const json = await data.json();
       console.log(json) 
       dispatch(addGenres(json.genres))
    }
  

    useEffect(() => {
        getGenre()
    },[])
}

export default useFilter
