import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: "filter",
    initialState:{
        filterMovies: "nowPlaying"

    },
    reducers:{
        // addnowPlaying: (state)=>{
        //     state.nowPlaying = !state.nowPlaying
        // },
        // addupComing: (state)=>{
        //     state.upComilng = !state.upComilng
        // },
        // addTranding: (state)=>{
        //     state.tranding = !state.tranding
        // },
        // addPopular: (state)=>{
        //     state.Popular = !state.Popular
        // }
        changeFilter : (state, action) => {
            state.filterMovies = action.payload
        }
        
    }
})

export const {changeFilter} = filterSlice.actions
export default filterSlice.reducer;