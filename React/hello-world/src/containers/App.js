import React, { Component } from 'react';
import './App.css';

import Persons from '../components/Persons/Persons';
import { AuthContext } from '../context/auth-context';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
    constructor(props) {
        super(props);

        console.log("[APP.JS] Constructor called");
    }

    static getDerivedStateFromProps(props, state) {
        console.log("[APP.JS] getDerivedStateFromProps called", props, state);

        return state;
    }

    componentDidMount() {
        console.log("[APP.JS] ComponentDidMount called");
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log("[APP.JS] shouldComponentUpdate called");

        return true;
    }
    componentDidUpdate() {
        console.log("[APP.JS] componentDidUpdate called");
    }


    state = {
        persons: [
            { id: 1, name: "Ranu", age: 31 },
            { id: 2, name: "Lucy", age: 10, Comments: "this was my dog :(" },
            { id: 3, name: "Tom", age: 35, Comments: "this is my nephew" },
            { id: 4, name: "Sofie", age: 28, Comments: "we don't talk about her" }
        ],
        otherState: 'some other value',
        showPersons: false,
        showCockpit: true,
        authenticated: false
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

    loginHandler = () => {
        this.setState({ authenticated: true });
    };

    render() {
        console.log("[APP.JS] Render called");
        let persons = null;

        if (this.state.showPersons) {

            persons = (
                <div>
                    <Persons
                        persons={this.state.persons}
                        clicked={this.deletePersonsHandler}
                        changed={this.nameChangedHandler}
                        isAuthenticated={this.state.authenticated}
                    />
                </div>
            );
        }

        return (

            <div className="App">
                <button onClick={() => this.setState({ showCockpit: false })}>Remove Cockpit</button>
                <AuthContext.Provider value={{ authenticated: this.state.authenticated, login: this.loginHandler }}>
                    {this.state.showCockpit ?
                        (<Cockpit
                            personsLength={this.state.persons.length}
                            showPersons={this.state.showPersons}
                            clicked={this.togglePersonsHandler}
                            applicationTitle={this.props.applicationTitle}
                        />)
                        : null
                    }
                    {persons}
                </AuthContext.Provider>
            </div>

        );
    }
}

export default App;