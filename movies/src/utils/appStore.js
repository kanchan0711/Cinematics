import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./moviesSlice"
import filterReducer from "./filterSlice"


const appStore = configureStore({
    reducer:{
        movies : moviesReducer, 
        filter: filterReducer
       
    }
})

export default appStore;