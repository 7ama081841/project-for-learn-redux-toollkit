import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
/*
export const userSlice = createSlice({
    name: "user",
    initialState: {
        name: "",
        email: "",
    },
    // actions
    reducers: {
        // yelzem tetekteb kima heya reducers
        addUser: (state, action) => {
            // haka nbadel el state
            state.name = action.payload.name;
            state.email = action.payload.email;
            return state;
        },
    },
});
*/

// -------------- redux toolkit with api -----------------------------------

// methode 1
/*export const userSlice = createSlice({
    name: "user",
    initialState: {
        userData: {
            name: "",
            email: "",
        },
        // yelzemni na3mel loading 5ater thama 5edma m3a el server
        loading: null ,
        errer: false,
    },
    // actions
    reducers: {
        // yelzem tetekteb kima heya reducers
        addUser: (state, action) => {
            // haka nbadel el state
            state.name = action.payload.name;
            state.email = action.payload.email;
            
        },
        // startUser te5dem m3a el loading
        startUser: (state) => {
            state.loading = true;
        },
        // succesUser tjibli el data mn api
        succesUser: (state, action) => {
            state.userData = action.payload;
            state.loading = null;
        },
        errerUser : (state) => {
            state.loading = null
            state.errer = true
        }
    },
});*/

// methode 2

// createAsyncThunk te5demli el function mta3 el action wel dispatch
export const addUser = createAsyncThunk("user/add", async (user) => {
    const res = await axios.post("http://localhost:5000/api/users", user);
    return res.data;
});

export const userSlice = createSlice({
    name: "user",
    initialState: {
        userData: {
            name: "",
            email: "",
        },
        // yelzemni na3mel loading 5ater thama 5edma m3a el server
        loading: null,
        errer: false,
    },
    // actions
    reducers: {
        // el createAsyncThunk t5alini nesta8na 3ala reducers
    },
    // yelzemni na3mel object extraReducers
    extraReducers: {
        // yelzem n7ot fih Array
        [addUser.pending]: (state) => {// el Array lezem tkoun kima el key eli fel object  
            state.loading = true;
        },
        [addUser.fulfilled]: (state, action) => {
            state.userData = action.payload;
            state.loading = null;
        },
        [addUser.rejected]: (state) => {
            state.loading = null;
            state.errer = true;
        },
    },
});

export const { startUser, succesUser, errerUser } = userSlice.actions;

export default userSlice.reducer;
