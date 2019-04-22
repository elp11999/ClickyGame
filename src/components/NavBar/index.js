import React from "react";
import "./style.css";

function NavBar(props) {
  return (
    <div className="container">
        <div className="row-fluid clicky-nav-bar">

            <div className="col clicky-nav-bar-name">
                <span className="clicky-name">Clicky Game</span>
            </div>
            <div className="col clicky-nav-bar-msg">
                <span className="clicky-msg">Click an image to begin!</span>
            </div>
            <div className="col clicky-nav-bar-results clearfix">
                <span className="clicky-results">Score: 0 | Top Score: 0</span>
            </div>

        </div>
    </div>
  );
}

export default NavBar;
