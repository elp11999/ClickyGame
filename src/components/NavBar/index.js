//
// NavBar UI Component
//
// index.js
//

// Import the React library
import React from "react";

// Import the CSS for the NavBar component
import "./style.css";

// Function to construct the NavBar component of the UI
function NavBar(props) {
    console.log(props);
    return (
        <div className="container">
            <div className="row-fluid clicky-nav-bar">

                <div className="col clicky-nav-bar-name">
                    <a href="/clickygame/"><span className="clicky-name">Clicky Game</span></a>
                </div>
                <div className="col clicky-nav-bar-msg">
                    <span className="clicky-msg">{props.message}</span>
                </div>
                <div className="col clicky-nav-bar-results clearfix">
                    <span className="clicky-results">Score: {props.score} | Top Score: {props.topScore}</span>
                </div>

            </div>
        </div>
    );
}

// Export the NavBar UI component
export default NavBar;
