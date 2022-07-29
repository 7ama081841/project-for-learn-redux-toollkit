import React from 'react'
import "./style.css"
import {useSelector} from "react-redux"

// this is normal methode without redux 
/*export default function Header( props) {
    return (
        <div className="header">
            <h1>logo</h1>
            <p>hello {props.isChanged && props.name} </p>
        </div>
    );*/

// this is methode with redux toolkit
export default function Header() {
    // yelzemni n3ayel el useSelector
    const {name} = useSelector((state) => state.user); 

    return (
        <div className="header">
            <h1>logo</h1>
            <p>hello {name} </p>
        </div>
    );
}
