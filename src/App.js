import React, { Component } from 'react';
import './App.css';
import ValdationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {

  state = {
      text: '',
      charArray: []
  }

  textLengthListener = (event) => {
      this.setState({
        text: event.target.value,
        charArray: event.target.value.split('')
      })
  }

  removeCharListener = (charIndex) => {

    const newCharArray = [...this.state.charArray];
    newCharArray.splice(charIndex,1);
    const newText  = newCharArray.join('');
    
    this.setState({
        text: newText,
        charArray: newCharArray
    })

  }

  render() {
    return (
      <div className="App"> 
          <h2>Text Length</h2>
          <input type="text" value={this.state.text} onChange={this.textLengthListener}/>
          <p>{this.state.text.length}</p>
          <ValdationComponent length={this.state.text.length}/>
          <div>
            { this.state.charArray.map((t,index) => {    
                return (
                  <CharComponent
                      char={t}
                      key={index}
                      deleteChar={this.removeCharListener.bind(this,index)}
                     />)
              })           
             }
          </div>
         
      </div>
    );
  }
}

export default App;
