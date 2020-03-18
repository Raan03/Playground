// JavaScript source code
import React from 'react';
import Person from './Person/Person';

const persons = (props) => 
    props.persons.map((element, index) => {
        return (
                <Person
                    click={() => props.clicked(index)}
                    name={element.name}
                    age={element.age}
                    key={element.id}
                    changed={(event) => props.changed(event, element.id)}
                >
                    {element.Comments}
                </Person>
        );
    });

    export default persons;