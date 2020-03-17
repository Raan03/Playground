import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [{ name: "Ranu", age: 31 }, { name: "Lucy", age: 10}]
    }
    //return React.createElement('div', { className: "App" }, React.createElement("h1", null, "It works with createElements"));
    render() {
        return (
            <div className="App">
                <h1>It works!</h1>
                <button>Switch Names</button>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>This is my dog</Person>
            </div>
        );
    }
}

export default App;
