//
// NavBar UI Component
//
// index.js
//

// Import the React library
import React from "react";

// Import the CSS for the SuperHero Card components
import "./style.css";

// Function to construct the SuperHero Card components of the UI
function SuperHeroCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} width="150" height="200" onClick={() => props.selectHero(props.id)}/>
      </div>
    </div>
  );
}

// Export the SuperHero Card UI component
export default SuperHeroCard;
