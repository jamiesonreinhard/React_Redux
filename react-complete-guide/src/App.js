import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    persons: [
      { id: 'asgjl', name: 'Jamo', age: 27 },
      { id: '35ljs', name: 'Leslie', age: 27 },
      { id: 'jf222', name: 'Matt', age: 27 }
    ],
    otherState: 'some other value',
    showPersons: false
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( { persons: persons});
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  };


  render() {
    const buttonStyle = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
            {this.state.persons.map((person, index) => {
              return <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name} 
                age={person.age}
                changed={(event) => this.nameChangedHandler(event, person.id)}
                key={person.id}
                />
            })}
          </div>
      );

      // buttonStyle.backgroundColor = 'red';
      // buttonStyle[':hover'] = {
      //   backgroundColor: 'lightred',
      //   color: 'black'
      // }
    };

    let classes = [];
    if (this.state.persons.length <=2) {
      classes.push('red'); // classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold'); // classes = ['red', 'bold']
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App.</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button
        className="button"
        onClick={this.togglePersonsHandler}>Show People
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
