//
// Header UI Component
//
// index.js
//

// Import the React library
import React from "react";

// Import the CSS for the Header component
import "./style.css";

// Function to construct the Header component of the UI
function Header(props) {
    return(
        <div>
            <div className="clicky-header">
              Click on an image to earn points, but don't click on any more than once!
            </div>
        </div>
    );

}

// Export the Header UI component
export default Header;