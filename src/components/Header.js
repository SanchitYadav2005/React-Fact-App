import React from "react"
import logo from "./logo.png";

console.log(logo)
export default function Header(){
    return(
        <nav className="nav-bar">
            <img src={logo} alt="logo"/>
            <h1>React Facts</h1>
            <h2>React Course project-1</h2>
        </nav>
    )
}