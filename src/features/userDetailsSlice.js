import { createSlice } from "@reduxjs/toolkit";

export const userDetailsSlice=createSlice({
    name:"userDetails",
    initialState:{
        users:[],
        loading:false,
        error:null,
    }
})



export default userDetailsSlice.reducer;