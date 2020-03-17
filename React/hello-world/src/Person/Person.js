import React from 'react';

// JavaScript source code
const person = (props) => {
    return (
        <div className="personCard">
            <p onClick={props.click}>I'm a person called {props.name} and I am {props.age} years old</p>
            <p>{props.children}</p>
        </div>
        )
}

export default person;