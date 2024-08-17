import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./moviesSlice"
// import gptReducer from "./gptSlice"
// import langReducer from "./configSlice";

const appStore = configureStore({
    reducer:{
        movies : moviesReducer,
        // gpt: gptReducer,
        // language: langReducer,
    }
})

export default appStore;