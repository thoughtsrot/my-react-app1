import React, { Component } from 'react';
import Card from "./components/Card";
import Container from "./components/Container";
import Title from "./components/Title";
import Scoreboard from "./components/Scoreboard";
import characters from "./characters.json";


class App extends Component {

  state = {
    characters: characters,

    clickedOnce: 0,
    // currentScore: 0

    clickedMoreThanOnce: 0,
    // topScore: 0

  }

  clickedCharacter = index => {

    const chars = this.state.characters;

    let correctGuess = this.state.clickedOnce;
    
    let sameGuess = this.state.clickedMoreThanOnce;

    if (chars[index].clickStatus === false) {
      chars[index].clickStatus = true;

      correctGuess++;

    } else {

      sameGuess++;
      alert("You already selected that character! Try again...")
    }



    this.setState({
      characters: chars,
      clickedOnce: correctGuess,
      clickedMoreThanOnce: sameGuess
    })

    console.log(this.state)

  }

  render() {

    return (

      <Container>
        <Title>Welcome to Clickin' It with Friends! Ghibli Edition</Title>
        <Scoreboard>Wrong Guesses: <span>{this.state.clickedMoreThanOnce}</span>, Correct Guesses: <span>{this.state.clickedOnce}</span> of 12</Scoreboard>
        {this.state.characters.map((character, index) => (
          <Card
            clickedCharacter={this.clickedCharacter}
            id={character.id}
            index={index}
            key={character.id}
            name={character.name}
            image={character.image}
            occupation={character.occupation}
            location={character.location}
            clickStatus={character.clickStatus}
          />
        ))}

      </Container>
    )
  }

}

export default App;
