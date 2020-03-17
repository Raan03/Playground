import React from 'react';
import './App.css';
import Person from './Person/Person';

function App() {
    //return React.createElement('div', { className: "App" }, React.createElement("h1", null, "It works with createElements"));
  return (
      <div className="App">
          <h1>It works!</h1>
          <Person name="Ranu" age="31" />
          <Person name="Lucy" age="10">This is my dog</Person>
    </div>
  );
}

export default App;
