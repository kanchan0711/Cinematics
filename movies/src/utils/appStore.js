import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./moviesSlice"
import filterReducer from "./filterSlice"
import movieDetalsReducer from "./movieDetailsSlice"


const appStore = configureStore({
    reducer:{
        movies : moviesReducer, 
        filter: filterReducer,
        movieDetails: movieDetalsReducer,
       
    }
})

export default appStore;