import React, { Component } from 'react';
import Card from "./components/Card";
import Container from "./components/Container";
import characters from "./characters.json";


class App extends Component {

  state = {
    characters
  }

render () {

  <Container>
    {this.state.characters.map(character => (
          <Card
            clickedCharacter={this.clickedCharacter}
            id={character.id}
            key={character.id}
            name={character.name}
            image={character.image}
            occupation={character.occupation}
            location={character.location}
            clickStatus={character.clickedStatus}
          />
        ))}
    
  </Container>

}

}

export default App;
