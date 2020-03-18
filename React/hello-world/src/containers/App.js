import React, { Component } from 'react';
import './App.css';

import Persons from '../components/Persons/Persons';

import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
    state = {
        persons: [
            { id: 1, name: "Ranu", age: 31 },
            { id: 2, name: "Lucy", age: 10, Comments: "this was my dog :(" },
            { id: 3, name: "Tom", age: 35, Comments: "this is my nephew" },
            { id: 4, name: "Sofie", age: 28, Comments: "we don't talk about her" }
        ],
        otherState: 'some other value',
        showPersons: false
    }

    togglePersonsHandler = () => {
        const currentState = this.state.showPersons;
        this.setState({ showPersons: !currentState });
    }

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const person =
        {
            ...this.state.persons[personIndex]
        };

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({ persons: persons });
    }

    deletePersonsHandler = (index) => {
        //const persons = this.state.persons.slice();
        const persons = [...this.state.persons];

        persons.splice(index, 1);
        this.setState({ persons: persons });
    }

    render() {
        let persons = null;

        if (this.state.showPersons) {

            persons = (
                <div>
                    <Persons 
                        persons={this.state.persons}
                        clicked={this.deletePersonsHandler}
                        changed={this.nameChangedHandler}
                    />
                </div>
            );
        }

        return (
            
                <div className="App">
                    <Cockpit 
                        persons={this.state.persons}
                        showPersons={this.state.showPersons}
                        clicked={this.togglePersonsHandler}
                        title={this.props.title}
                    />
                    {persons}
                </div>
            
        );
    }
}

export default App;