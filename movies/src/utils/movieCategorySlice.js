import { createSlice } from "@reduxjs/toolkit";

const movieCategory = createSlice({
    name: "category",
    initialState:{
        category: "nowPlaying"

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
        changeCategory : (state, action) => {
            state.category = action.payload
        }
        
    }
})

export const {changeCategory} = movieCategory.actions
export default movieCategory.reducer;