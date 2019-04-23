//
// Clicky Game
//
// This application is a memory game using React. A list of images will be displayed with click
// handlers registered to each. The user's score should be incremented when clicking an image for
// the first time. The user's score should be reset to 0 if an image clicked more than once.
// Each time an image is clicked, the images displayed will be shuffled in a random order.
//
// App.js
//

// Import the React library
import React from "react";

// Import the UI component libraries
import Wrapper from "./components/Wrapper";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import SuperHeroCard from "./components/SuperHeroCard";

// Import the Super-Hero(s) JSON configuration
import SuperHeros from "./SuperHeros.json";

class App extends React.Component {

  // Current game state object
  state = {
    superHeros: SuperHeros,
    selections: [],
    score: 0,
    topScore: 0,
    message: "Click an image to begin!"
  };

  // Function for an Image onclick
  selectHero = (id) => {
    console.log("selectHero: id=" + id);

    // Check for super-hero
    let superHero = this.state.selections.find((hero) => (hero.id === id) ? true : false );
    
    if (superHero) {
      // Has super-hero been clicked before (Game over!!!)
      this.setState({ score: 0 });
      this.setState({ selections: [] });
      this.setState({ message: "Click an image to begin!" });
    } else {
      // Super-hero has not been clicked before (Keep playing!!!)
      this.state.selections.push({id: id});
      this.setState({ score: this.state.selections.length });
      if (this.state.selections.length > this.state.topScore)
        this.setState({ topScore: this.state.selections.length });
    }    
    
    // Shuffle the super-hero images
    this.setState({ superHeros: SuperHeros });
  };

  // Function to update the DOM
  render() {
    return (
      <Wrapper>
      <NavBar score={this.state.score} topScore={this.state.topScore} message={this.state.message} />
      <Header />
      {this.state.superHeros.map((item) => {
        return (
          <SuperHeroCard
            id={item.id}
            key={item.id}
            name={item.name}
            image={item.image}
            selectHero={this.selectHero}
          />
          );
      })}
      </Wrapper>
    ); 
  }
}

// Export this library
export default App;
