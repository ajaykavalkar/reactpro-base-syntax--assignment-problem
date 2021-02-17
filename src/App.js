import React, { Component } from 'react';
import './App.css';
import UserInput from './User/UserInput';
import UserOutput from './User/UserOutput';
import CharComponent from './ValidationComponent/CharComponent';
import ValidationComponent from './ValidationComponent/ValidationComponent';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: 'Jack Sparrow!',
      userInput: ''
    }
  }
  usernameClickHandler = () => {
    this.setState({ username: 'Devy Jones' })
  }

  usernameChangeHandler = (event) => {
    this.setState({ username: event.target.value })
  }

  lenthChangeHandler = (event) => {
    console.log(event.target.value)
    this.setState({ userInput: event.target.value })
  }
  removeCharHandler = index => {
    const text = this.state.userInput.split('')
    text.splice(index, 1);
    this.setState({ userInput: text.join('') })
  }
  render() {
    const charList = this.state.userInput.split('').map((chr, index) => { return <CharComponent key={index} char={chr} remove={() => this.removeCharHandler(index)} /> });
    return (
      <div className="App">
        {/* <ol>
          <li>Create TWO new components: UserInput and UserOutput</li>
          <li>UserInput should hold an input element, UserOutput two paragraphs</li>
          <li>Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
          <li>Pass a username (of your choice) to UserOutput via props and display it there</li>
          <li>Add state to the App component (=> the username) and pass the username to the UserOutput component</li>
          <li>Add a method to manipulate the state (=> an event-handler method)</li>
          <li>Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
          <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
          <li>Add two-way-binding to your input (in UserInput) to also display the starting username</li>
          <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
        </ol> */}
        <UserInput username={this.state.username} changeUsername={this.usernameChangeHandler} />
        {/* Using props */}
        <UserOutput username="Ajay" />
        <UserOutput username="Ramu" />

        {/* using state */}
        <UserOutput username={this.state.username} />
        <button onClick={this.usernameClickHandler}>Change username</button>

        <br />
        {/* Assignment 2 */}
        <input type="text" onChange={this.lenthChangeHandler} value={this.state.userInput} />
        <ValidationComponent userInput={this.state.userInput.length} />
        {this.state.userInput.length ? charList : null}
      </div>
    );
  }
}

export default App;
