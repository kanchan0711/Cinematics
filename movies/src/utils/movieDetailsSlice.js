import { createSlice } from "@reduxjs/toolkit";

const movieDetailsSlice = createSlice({
    name: "movieDetails",
    initialState: [],
    reducers : {
        addMovieDetails: (state, action) =>{
                state.push(action.payload); 
              },
        removeMovieDetails: (state, action) => {
                return state.filter(movie => movie.id !== action.payload.id);
              },

        }
    
})


export const { addMovieDetails, removeMovieDetails } = movieDetailsSlice.actions;
export default movieDetailsSlice.reducer;
