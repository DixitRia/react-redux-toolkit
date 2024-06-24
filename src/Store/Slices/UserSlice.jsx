import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"users",
    initialState:[],
    reducers:{
        // main reducer ha iske andar humare micro reducers ayege
        addUsers(state,action){
            state.push(action.payload)
        },

        removeUsers(state,action){
        //    state.pop(action.payload)
        state.splice(action.payload,1)
        // let userIndexNum = state.indexOf(action.payload)
        // state.splice(userIndexNum,1)
        },

        clearAllUsers(state,action){
            return [];
        },
    },
});

export default userSlice.reducer;
export const{addUsers,removeUsers,clearAllUsers} = userSlice.actions;