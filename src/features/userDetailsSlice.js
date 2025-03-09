import { createSlice,createAsyncThunk} from "@reduxjs/toolkit";

//create action
export const createUser=createAsyncThunk("createUser",async (data,{rejectWithValue})=>{
    const response=await fetch('https://67cc5a84dd7651e464ebb3ae.mockapi.io/crud',
        {
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(data)
        });
    try{
        const result=await response.json();
        return result
    }catch(err){
        return rejectWithValue(err.response);
    }
})

//read action
export const showuser=createAsyncThunk("showUser",async(args,{rejectWithValue})=>{
    const response=await fetch('https://67cc5a84dd7651e464ebb3ae.mockapi.io/crud');
    try{
        const result=await response.json();
        return result;
    }catch(err){
        return rejectWithValue(err);
    }
})
//edit user
export const editUser=createAsyncThunk("editUser",async({id,updatedData},{rejectWithValue})=>{
    const response=await fetch(`https://67cc5a84dd7651e464ebb3ae.mockapi.io/crud/${id}`,{
        method:"PUT",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(updatedData)

    })
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    try{
        const result=await response.json();
        return result;
    }catch(e){
        rejectWithValue(e.message)
    }
})
//delete action
export const deleteUser=createAsyncThunk("deleteUser",async(id,{rejectWithValue})=>{
    const response=await fetch(`https://67cc5a84dd7651e464ebb3ae.mockapi.io/crud/${id}`,{
        method:"DELETE",
            headers:{
                "Content-Type":"application/json",
            },

    })
    try{
        const result=await response.json();
        return result;
    }catch(e){
        rejectWithValue(e)
    }
})


export const userDetailsSlice=createSlice({
    name:"userDetails",
    initialState:{
        users:[],
        loading:false,
        error:null,
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
            .addCase(createUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(createUser.fulfilled, (state, action) => {
                state.loading = false;
                state.users.push(action.payload);
            })
            .addCase(createUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(showuser.pending, (state) => {
                state.loading = true;
            })
            .addCase(showuser.fulfilled, (state, action) => {
                state.loading = false;
                state.users=action.payload;
            })
            .addCase(showuser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(deleteUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(deleteUser.fulfilled, (state, action) => {
                state.loading = false;
                const{id}=action.payload;
                console.log(id)
                if(id)state.users=state.users.filter((user)=>user.id!==id)

            })
            .addCase(deleteUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    }
})
export default userDetailsSlice.reducer;