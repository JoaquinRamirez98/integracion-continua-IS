import React, { Component } from "react";
import Table from "./Table";
import Form from "./Form";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [
        {
          name: "DIego",
          job: "Janitor",
        },
      ],
    };
  }

  handleSubmit(character) {
    const characters = this.state.characters;
    this.setState({ characters: [...characters, character] });
  }

  removeCharacter(index) {
    const { characters } = this.state;

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index;
      }),
    });
  }

  render() {
    const { characters } = this.state;

    return (
      <div className="container">
        <h1>Demo in react</h1>
        <p>Add a character with a name and a job to the table.</p>
        <Table
          characterData={characters}
          removeCharacter={this.removeCharacter}
        />
        <h3>Add New</h3>
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
