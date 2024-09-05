import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: "filterGenres",
    initialState: {
        geners: [],
        getGenreId: 28,
        getGenreName: "Action",
        getGenreMovieList: [],
        getMoviesLang: "en",
    },
    reducers:{
        addGenres:(state, action) => {
            state.geners = action.payload;
        },
        addgetGenreId: (state, action) => {
            state.getGenreId = action.payload;
        },
        addgetGenreName: (state, action) => {
            state.getGenreName = action.payload;
        },
        addgetGenreMovieList: (state, action) => {
            state.getGenreMovieList = action.payload;
        },
        clearGenreMovieList: (state) => {
            state.getGenreMovieList = [];
          },
        addgetMoviesLang: (state, action) => {
            state.getMoviesLang = action.payload;
        }
    }
})

export const {clearGenreMovieList, addGenres,addgetGenreId , addgetGenreName, addgetGenreMovieList , addgetMoviesLang} = filterSlice.actions
export default filterSlice.reducer;
