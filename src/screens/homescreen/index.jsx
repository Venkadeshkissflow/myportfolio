import React from "react";
import Snowfall from 'react-snowfall'

import "./styles.css";

export function HomeScreen(){
    return(
        <div className="homeScreen">
            <div className="selfDetails">
            <p className="neon name"> Haii, This is Venkadesh S</p>
            <p className="neon name"> web developer</p>
            </div>
            <div className="imageContainer">
            </div>
            <div className="backgroundImage"/>
            <Snowfall
                style={{
                    position: 'fixed',
                    width: '100vw',
                    height: '100vh'
                }}
            />
        </div>
    )
}