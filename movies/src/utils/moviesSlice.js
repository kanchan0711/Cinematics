import { createSlice } from '@reduxjs/toolkit';

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        popularMovies:null,
        topRatedMovies: null,
        upComingMovies: null,
        movieTitle: null,
        movieTrailer: null,
    },
    reducers : {
        addnowplayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies:(state, action)=>{
            state.popularMovies = action.payload;
        },
        addTopRatedMovies:(state, action) => {
            state.topRatedMovies = action.payload
        },
        addUpcomingMovies:(state, action) =>{
            state.upComingMovies = action.payload
        },
        addmovieTrailer:(state, action)=>{
            state.movieTrailer = action.payload;

        },
        addmovieTitle:(state, action) => {
            state.movieTitle = action.payload
        }
     
    },
});

export const { addnowplayingMovies, addmovieTrailer, addPopularMovies, addTopRatedMovies, addUpcomingMovies, addmovieTitle} = moviesSlice.actions;

export default moviesSlice.reducer;