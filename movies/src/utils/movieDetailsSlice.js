import { createSlice } from "@reduxjs/toolkit";

const movieDetailsSlice = createSlice({
  name: "movieDetails",
  initialState: {
    movieDetails: [],
    movieCast: [],
  },
  reducers: {
        addmovieDetails:(state, action) => {
                state.movieDetails = action.payload
        },
        addmovieCast:(state, action) => {
                        state.movieCast = action.payload
        },
  },
});

export const { addmovieDetails, addmovieCast } =
  movieDetailsSlice.actions;
export default movieDetailsSlice.reducer;
