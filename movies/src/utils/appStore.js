import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./moviesSlice"
import categoryRducer from "./movieCategorySlice"
import movieDetalsReducer from "./movieDetailsSlice"
import filterReducer from "./filterSlice"
import searchReducer from "./searchSlice"
// import filterSlice from "./filterSlice";


const appStore = configureStore({
    reducer:{
        movies : moviesReducer, 
        category: categoryRducer,
        movieDetails: movieDetalsReducer,
        filterGenres: filterReducer,
        searchData: searchReducer,
    }
})

export default appStore;