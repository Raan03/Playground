import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import styled from 'styled-components';

const StyledButton = styled.button`
    background-color: ${props => props.showPersons ? 'red' : 'green'};
    color: white;
    font: inherit;
    border: 1px solid blue;
    padding: 8px;
    cursor: pointer;
    
    &:hover {
        background-color: ${props => props.showPersons ? 'salmon' : 'lightgreen'};
        color: black;
    }`;

class App extends Component {
    state = {
        persons: [
            { id: 1, name: "Ranu", age: 31 },
            { id: 2, name: "Lucy", age: 10, Comments: "this is my dog" },
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
                    {this.state.persons.map((element, index) => {
                        return (
                            <Person
                                click={() => this.deletePersonsHandler(index)}
                                name={element.name}
                                age={element.age}
                                key={element.id}
                                changed={(event) => this.nameChangedHandler(event, element.id)}
                            >
                                {element.Comments}
                            </Person>
                        );
                    })}
                </div>
            );
        }

        const classes = [];

        if (this.state.persons.length <= 2) {
            classes.push('red'); // classes = "red";
        }

        if (this.state.persons.length <= 1) {
            classes.push('bold'); // classes = "red bold";
        }

        return (
            
                <div className="App">
                    <p className={classes.join(' ')}>It works!</p>
                    <StyledButton
                    onClick={this.togglePersonsHandler}
                    showPersons={this.state.showPersons}
                    >
                    Toggle persons
                </StyledButton>
                    {persons}
                </div>
            
        );
    }
}

export default App;