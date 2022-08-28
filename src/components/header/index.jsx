import React from "react";
import "./styles.css";

export function HeaderComponent(){
    return (
        <div className="headerOuterContainer">
            <div className="headerButton">Icon</div>
            <div className="profileOptions">
                <span className="headerButton" onClick={()=>{
                    window.location="/"
                }}>Home</span>
                <span className="headerButton" onClick={()=>{
                    window.location="/about"
                }}>About</span>
                <span className="headerButton" onClick={()=>{
                    window.location="/projects"
                }}>Projects</span>
                {/* <span className="headerButton" onClick={()=>{
                    window.location="/about"
                }}>Profile</span> */}
                <span className="headerButton" onClick={()=>{
                    window.location="/contact"
                }}>Contact</span>
            </div>
        </div>
    )
}