import { createSlice } from "@reduxjs/toolkit";

const theameSlice = createSlice({
    name: "searchData",
    initialState:{
        
        darkTheame: false,
    },
    reducers:{
        addDarkTheame:(state, action) =>{
            state.darkTheame =  !state.searchMovieName;
        },
    }
})

export const {darkTheame} =theameSlice.actions;
export default theameSlice.reducer;