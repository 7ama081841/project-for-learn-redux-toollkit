import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {addUser}  from "../../redux/api";
import "./style.css";

// this is normal methode without redux
/*export default function Form(props) {
    return (
        <form onSubmit={props.addUser}>
            <div className="form-group">
                <input
                    type="text"
                    placeholder="enter your name"
                    onChange={(e) => props.setName(e.target.value)}
                />
                {/* na3mel el props kima haka }
            </div>
            <div className="form-group">
                <input
                    type="email"
                    placeholder="enter your email"
                    onChange={(e) => props.setEmail(e.target.value)}
                />
            </div>
            <div className="form-group">
                <input type="submit" placeholder="add user" />
            </div>
        </form>
    );*/

// this is methode with redux toolkit
/*export default function Form() {
    // na3mel useState lel redux
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    // this is function work with redux tollkit
    const dispatch = useDispatch();

    const sumit = (e) => {
        e.preventDefault();
        // call function from slice
        dispatch(addUser({ name, email })); // yelzemni n7otou f object {}
    };

    return (
        <form onSubmit={sumit}>
            <div className="form-group">
                <input
                    type="text"
                    placeholder="enter your name"
                    onChange={(e) => setName(e.target.value)}
                />
                {/* ne5ou el setName bark mn 8ir el props /}
            </div>
            <div className="form-group">
                <input
                    type="email"
                    placeholder="enter your email"
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="form-group">
                <input type="submit" placeholder="add user" />
            </div>
        </form>
    );
}*/

// this is methode with redux toolkit with api 
// ----------------- methode 1 -------------------------------------------------
export default function Form() {
    // na3mel useState lel redux
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    // this is function work with redux tollkit
    const dispatch = useDispatch();

    const sumit = (e) => {
        e.preventDefault();
        // call function from slice
        // moula7tha ken bech njib donne mn api mene5demch bel dispatch
        addUser({ name, email }, dispatch); // yelzemni n7otou f object {}
    };

    return (
        <form onSubmit={sumit}>
            <div className="form-group">
                <input
                    type="text"
                    placeholder="enter your name"
                    onChange={(e) => setName(e.target.value)}
                />
                {/* ne5ou el setName bark mn 8ir el props */}
            </div>
            <div className="form-group">
                <input
                    type="email"
                    placeholder="enter your email"
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="form-group">
                <input type="submit" placeholder="add user" />
            </div>
        </form>
    );
}
