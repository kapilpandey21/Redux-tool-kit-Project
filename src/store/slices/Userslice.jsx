import { createSlice } from "@reduxjs/toolkit";

let userSlice = createSlice({
    name:'user',
    initialState:[],
    reducers:{
        addUser(state, action){
        state.push(action.payload)
        },
        removeUser(state, action){
            state.splice(action.payload,1)
        },
        clearALLUsers(state, action){
            return  []
        },
    },
    extraReducers(builder){
        builder.addCase(userSlice.actions.clearALLUsers,()=>{
            return []
        })
    }
})

export default userSlice.reducer
export let {addUser,removeUser,clearALLUsers}= userSlice.actions