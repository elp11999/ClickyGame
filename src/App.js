import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";

class App extends React.Component {

  state = {
    friends
  };

  removeFriend = (id) => {
    console.log("removeFriend: started!!! id=" + id);
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };

  render() {
    return (
      <Wrapper>
        <h1 className="title">Friends List</h1>

        {this.state.friends.map((item) => {
          return (
            <FriendCard
              id={item.id}
              key={item.id}
              name={item.name}
              image={item.image}
              occupation={item.occupation}
              location={item.location}
              removeFriend={this.removeFriend}
            />
            );
        })}

      </Wrapper>
    ); 
  }
}

export default App;
