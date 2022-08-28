import React from "react";
import Snowfall from 'react-snowfall'

import "./styles.css";

export function AboutScreen(){
    return(
        <div className="projectScreenContainer">
            <div className="AboutScreen">
            A web developer is a programmer
            who develops World Wide Web applications
            using a client–server model. 
            The applications typically use HTML,
            CSS and JavaScript in the client, PHP,
            ASP.NET (C#), Python, Node. js, Go or
            Java in the server, and http for 
            communications between client and 
            server.
            </div>

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