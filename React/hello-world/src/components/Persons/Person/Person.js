import React, { Component } from 'react';
//import './Person.css';
import styled from 'styled-components';

const StyledDiv = styled.div`
    width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;

    @media (min-width: 500px) {
        width: 450px
    }
`;

// JavaScript source code
class Person extends Component {
    render() {
        console.log("[PERSON.JS] Render called");

        return (
            // <div className="personCard" style={style}>
            <StyledDiv>
                <p
                    onClick={this.props.click}
                >
                    I'm a person called {this.props.name} and I am {this.props.age} years old
                </p>
                <p>
                    {this.props.children}
                </p>
                <input
                    type="text"
                    onChange={this.props.changed}
                    value={this.props.name}
                />
            </StyledDiv>
        )
    }
}

export default Person;