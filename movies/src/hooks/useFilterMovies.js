import  { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addgetGenreMovieList } from '../utils/filterSlice';
import { API_key } from '../utils/Constant';


const useFilterMovies = (genreId, lang) => {
    const dispatch = useDispatch()
    console.log(genreId,lang)
    
    const getFilterMovies = async () => {
      const data = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_key}&with_original_language=${lang}&with_genres=${genreId}`

      );
      const json = await data.json()
      dispatch(addgetGenreMovieList(json.results))
    };
  
    useEffect(()=>{
      getFilterMovies()
    },[genreId, lang])
}

export default useFilterMovies;
