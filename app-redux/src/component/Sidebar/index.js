import React from 'react'
import { useSelector } from 'react-redux';
import "./style.css"

// this is methode normal without redux
/*export default function Sidebar(props) {
    return (
        <div className="sidebar">
            <ul>
                <li>home</li>
                <li>about</li>
                <li>contact</li>
                <li>blog</li>
                <li>hello {props.isChanged && props.name}  </li>
            </ul>
        </div>
    ); */

// this is methode with redux toolkit
export default function Sidebar() {

    const { email } = useSelector((state) => state.user.userData); 

    return (
        <div className="sidebar">
            <ul>
                <li>home</li>
                <li>about</li>
                <li>contact</li>
                <li>blog</li>
                <li>hello {email} </li>
            </ul>
        </div>
    );
}
