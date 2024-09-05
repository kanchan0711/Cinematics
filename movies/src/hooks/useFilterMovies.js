import  { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addgetGenreMovieList } from '../utils/filterSlice';


const useFilterMovies = (genreId, lang) => {
    const dispatch = useDispatch()
    console.log(genreId,lang)
    
    const getFilterMovies = async () => {
      const data = await fetch(
        // "https://api.themoviedb.org/3/discover/movie?api_key=" +
        //   { API_key } +
        //   "&with_genres=28"
        `https://api.themoviedb.org/3/discover/movie?api_key=38913ed3b726655f529384dbaf20542b&with_original_language=${lang}&with_genres=${genreId}`

      );
      const json = await data.json()
      // dispatch(getFilterMovies(json))
      console.log(json.results)
      dispatch(addgetGenreMovieList(json.results))
    };
  
    useEffect(()=>{
      getFilterMovies()
    },[genreId, lang])
}

export default useFilterMovies;
