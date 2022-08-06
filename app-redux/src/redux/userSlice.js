import {createSlice} from "@reduxjs/toolkit"
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
export const userSlice = createSlice({
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
});

export const { addUser, startUser, succesUser, errerUser } = userSlice.actions;

export default userSlice.reducer