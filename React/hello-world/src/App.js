import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            { name: "Ranu", age: 31 },
            { name: "Lucy", age: 10 },
            { name: "Tom", age: 35 },
            { name: "Sofie", age: 28 },
        ],
        otherState: 'some other value',
        showPersons: false
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

    togglePersonsHandler = () => {
        const currentState = this.state.showPersons;
        this.setState({ showPersons: !currentState });
    }

    render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        let persons = null;

        if (this.state.showPersons)
        {
            persons = (
                <div>
                    {this.state.persons.map(element => {
                        return (
                            <Person
                                name={element.name}
                                age={element.age}
                            />    
                            );
                    })}
                </div>
                );
        }

        return (
            <div className="App">
                <h1>It works!</h1>
                <button
                    style={style}
                    onClick={this.togglePersonsHandler}
                >
                    Toggle persons
                </button>
                {persons}
            </div>
        );
    }
}

export default App;