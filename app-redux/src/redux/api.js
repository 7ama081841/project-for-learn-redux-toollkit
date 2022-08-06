import { errerUser, startUser, succesUser } from "./userSlice";
import axios from "axios";
export const addUser = async (user , dispatch) => {
    dispatch(startUser());

    try {
        const res = await axios.post("http://localhost:5000/api/users", user );
        dispatch(succesUser(res.data));
    }catch (err) {
        dispatch(errerUser());
    }
}