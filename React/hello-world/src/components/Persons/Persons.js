// JavaScript source code
import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component
{
    render(){
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