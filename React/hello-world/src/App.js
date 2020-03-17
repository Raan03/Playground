import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            { name: "Ranu", age: 31 },
            { name: "Lucy", age: 10, Comments: "this is my dog" },
            { name: "Tom", age: 35, Comments: "this is my nephew" },
            { name: "Sofie", age: 28, Comments: "we don't talk about her" }
        ],
        otherState: 'some other value',
        showPersons: false
    }

    togglePersonsHandler = () => {
        const currentState = this.state.showPersons;
        this.setState({ showPersons: !currentState });
    }

    deletePersonsHandler = (index) => {
        //const persons = this.state.persons.slice();
        const persons = [...persons];

        persons.splice(index, 1);
        this.setState({ persons: persons });
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
                    {this.state.persons.map((element, index) => {
                        return (
                            <Person
                                click={() => this.deletePersonsHandler(index)}
                                name={element.name}
                                age={element.age}
                            >
                                {element.Comments}
                            </Person>
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