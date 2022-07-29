import {createSlice} from "@reduxjs/toolkit"

export const userSlice = createSlice({
    name : "user",
    initialState : {
        name : "" ,
        email : ""
    },
    // actions
    reducers : {
        addUser : (state , action ) => {
            // haka nbadel el state
            state.name = action.payload.name
            state.email = action.payload.email
            return state
        }
    }
})

export const {addUser} = userSlice.actions;

export default userSlice.reducer