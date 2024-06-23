import {createSlice} from "@reduxjs/toolkit";

const users = createSlice({
    name:"user",
    initialState:[],
    reducers:{
        // main reducer ha iske andar humare micro reducers ayege
        addUsers(state,action){},
        removeUsers(state,action){},
        deleteUsers(state,action){},
    }
})
export {users};
