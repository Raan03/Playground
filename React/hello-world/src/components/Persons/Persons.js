// JavaScript source code
import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
    // static getDerivedStateFromProps(props, state) {
    //     console.log("[Persons.JS] getDerivedStateFromProps called");

    //     return state;
    // }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("[Persons.JS] shouldComponentUpdate called");

        return this.props
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("[Persons.JS] getSnapshotBeforeUpdate called");

        return { message: 'Snapshot!'};
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("[Persons.JS] componentDidUpdate called");
        console.log(snapshot);
    }

    render() {
        console.log("[Persons.JS] Render called");

        return this.props.persons.map((element, index) => {
            return (
                <Person
                    click={() => this.props.clicked(index)}
                    name={element.name}
                    age={element.age}
                    key={element.id}
                    changed={(event) => this.props.changed(event, element.id)}
                >
                    {element.Comments}
                </Person>
            );
        });
    }

}

export default Persons;