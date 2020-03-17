import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props =>
{
    const [ personsState, setPersonsState] = useState({
        persons: [{ name: "Ranu", age: 31 }, { name: "Lucy", age: 10 }],
        otherState: 'some other value'
    });

const switchNameHandler = () => {
    console.log("We clicked");
    // don't do this: this.state.persons[0].name = "Ranu Annaert";
    console.log(personsState);
    setPersonsState({ persons: [{ name: "Ranu Annaert", age: 32 }, { name: "Lucy Annaert", age: 10 }] });
    console.log(personsState);
}
        return (
            <div className="App">
                <h1>It works!</h1>
                <button onClick={switchNameHandler}>Switch Names</button>
                <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
                <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>This is my dog</Person>
            </div>
        );
}

export default App;
