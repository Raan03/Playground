// JavaScript source code
import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
    // static getDerivedStateFromProps(props, state) {
    //     console.log("[Persons.JS] getDerivedStateFromProps called");

    //     return state;
    // }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log("[Persons.JS] shouldComponentUpdate called");

    //     if (nextProps.persons !== this.props.persons) {
    //         return true;
    //     }

    //     return false;
    // }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("[Persons.JS] getSnapshotBeforeUpdate called");

        return { message: 'Snapshot!' };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("[Persons.JS] componentDidUpdate called");
        console.log(snapshot);
    }

    componentWillUnmount() {
        console.log("[Persons.JS] componentWillUnmount called");
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
                    isAuth={this.props.isAuthenticated}
                >
                    {element.Comments}
                </Person>
            );
        });
    }

}

export default Persons;