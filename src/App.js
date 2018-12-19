import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Nav from "./components/Nav";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    score:0,
    hiscore:0
  };

  clickCard = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    let friends = this.state.friends;
    // .filter(friend => friend.id !== id)
    console.log(friends[id-1].clicked);
    console.log(friends[id-1]);
    console.log(friends);
    console.log(id);
    if (friends[id-1].clicked === false){
      friends[id-1].clicked=true;
      if(this.state.hiscore <= this.state.score){
        this.setState({
          score: this.state.score + 1,
          hiscore: this.state.score + 1
        });
      }else{
        this.setState({
          score: this.state.score + 1
        });
      }
    }else if(this.state.hiscore < this.state.score){
      this.setState({
        hiscore: this.state.score,
        score:0
      });
      for(let i = 0; i < friends.length;i++){
        friends[i].clicked=false;
      }
    }else{
      this.setState({
        score:0
      });
      for(let i = 0; i < friends.length;i++){
        friends[i].clicked=false;
      }
    }
    for(let i=0;i<friends.length;i++){
      let num = Math.floor(Math.random() * 12);
      this.swap(friends, i, num);
    }
    console.log(friends);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };

  swap = (array, indexA, indexB) => {
    let tmp = array[indexA];
    let tmpID = array[indexA].id;
    array[indexA].id = array[indexB].id;
    array[indexB].id = tmpID;
    array[indexA] = array[indexB];
    array[indexB] = tmp;
  }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
      <Nav
        score={this.state.score}
        hiscore={this.state.hiscore}
      />
      <Wrapper>
        <Title></Title>
        {this.state.friends.map(friend => (
          <FriendCard
            clickCard={this.clickCard}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
      </div>
    );
  }
}

export default App;
