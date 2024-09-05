import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "searchData",
    initialState:{
        searchMovieName: null,
        searchMovies: [],
        showSearchMovies: false,
    },
    reducers:{
        addsearchMovieName:(state, action) =>{
            state.searchMovieName = action.payload;
        },
        addsearchMovies:(state, action) => {
            state.searchMovies = action.payload
        },
        showSearchMovies:(state, action) =>{
            state.showSearchMovies = action.payload
        }
    }
})

export const {addsearchMovies, addsearchMovieName, showSearchMovies} = searchSlice.actions;
export default searchSlice.reducer;