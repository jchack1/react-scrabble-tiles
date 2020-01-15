import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Character from './Character/Character';

class App extends Component {
  state = {
    inputText: [],
    inputLength: 0,
    inputTextUser: ''
  }

  inputChangedHandler = (event) => {
    const userInput = event.target.value;
    const userInputSplit = userInput.split('');
    const userInputLength = userInput.length;

    this.setState({ inputText: userInputSplit, inputLength: userInputLength, inputTextUser: userInput})
  }

  deleteLetterHandler = (letterIndex) => {
    const updatedText = [...this.state.inputText];
    updatedText.splice(letterIndex, 1);

    const inputBoxText = updatedText.join('');
    const updatedLength = inputBoxText.length;


    this.setState({inputText: updatedText, inputLength: updatedLength, inputTextUser: inputBoxText})
  }
  

  render() {

    let characters = null;

    if(this.state.inputLength >= 5){
      characters = (
        <div className="CharacterContainer">
          {this.state.inputText.map( (letter, index) => {
            return <Character
              character={letter} 
              click={() => this.deleteLetterHandler(index)}
              key={index}
            />
            })
          }

        </div>
      )
    }

    return(
      <div className="App">
        <p>Type any text:</p>
        <input 
          type="text"
          className="InputBox"
          onChange={this.inputChangedHandler}
          value={this.state.inputTextUser}
        />
        <p>Your text is {this.state.inputLength} characters long.</p>
        <Validation 
          inputLength={this.state.inputLength}
        />
        {characters}

      </div>
    );

  }

}

export default App;
