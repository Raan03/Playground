import React, { useEffect } from 'react';

import styled from 'styled-components';

import './Cockpit.css';

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

const Cockpit = (props) => {
    useEffect(() => {
        console.log("[Cockpit.JS] useEffect");
        // HttpRequest
    });

    const classes = [];

    if (props.persons.length <= 2) {
        classes.push('red'); // classes = "red";
    }

    if (props.persons.length <= 1) {
        classes.push('bold'); // classes = "red bold";
    }

    return (
        <div>
            <h1>{props.applicationTitle}</h1>
            <pre className={classes.join(' ')}>This module shows us some persons!</pre>
            <StyledButton
                onClick={props.clicked}
                showPersons={props.showPersons}
            >
                Toggle persons
            </StyledButton>
        </div>
    );
};

export default Cockpit;