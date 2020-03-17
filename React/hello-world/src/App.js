import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [{ name: "Ranu", age: 31 }, { name: "Lucy", age: 10 }],
        otherState: 'some other value'
    }

    switchNameHandler = (newName) => {
        console.log("We clicked");
        // don't do this: this.state.persons[0].name = "Ranu Annaert";
        console.log(this.state);
        this.setState({ persons: [{ name: newName, age: 32 }, { name: "Lucy Annaert", age: 10 }] });
        console.log(this.state);
    }

    nameChangeHandler = (event) => {
        this.setState({
            persons: [{ name: event.target.value, age: 31 }, { name: "Lucy", age: 10 }],
        })
    }

    render() {
        return (
            <div className="App">
                <h1>It works!</h1>
                <button onClick={this.switchNameHandler.bind(this, "Testing BTN")}>Switch Names</button>
                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age}
                    click={() => this.switchNameHandler("Testing P1")}
                    changed={this.nameChangeHandler}
                />
                <Person
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}
                    click={() => this.switchNameHandler("Testing P2")}
                >
                    This is my dog
                </Person>
            </div>
        );
    }
}

export default App;
