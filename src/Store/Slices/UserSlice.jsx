import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"users",
    initialState:[],
    reducers:{
        // main reducer ha iske andar humare micro reducers ayege
        addUsers(state,action){
            state.push(action.payload)
        },
        removeUsers(state,action){},
        deleteUsers(state,action){},
    },
});

export default userSlice.reducer;
export const{addUsers} = userSlice.actions;