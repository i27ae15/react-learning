import { Component } from 'react';
import { useState, useEffect } from 'react';

import CardList from './components/card-list/card-list.component.jsx';
import SearchBox from './components/search-box/search-box.component.jsx';

import './App.css';

const endpoint = 'https://jsonplaceholder.typicode.com/users';



// we can creaet funcitional components instead of class components

const AppFunct = () => {

  // the entire functio will re-render everytime there is a change in the values that the function has

  // we'll have to right other function here, inside the main function
  const [searchField, setSearchField] = useState(); // [value, setValue]
  const [monsters, setMonsters] = useState();

  const onSearchChange = (event) => {

    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  } 

  const filteredMonstesrs = monsters.filter((m) => {
    return m.name.toLocaleLowerCase().includes(searchField);
  })

  return (
    <div className="App">

      <h1 className='app-title'>Welcome everyone</h1>

      <SearchBox 
      onSearchChange={onSearchChange} 
      className='monters-search-box'
      placeholder={'Search monsters'}
      />

      {
        // filtering and displaying the list of monsters
        // we can pass properties to the CardList component
      }
      {/* <CardList monsters={monsters} filterBy={filterBy} /> */}

    </div>
  );
}

class App extends Component {

    constructor(){
      super();

      // referencing to the same class
      // here we're going to set key par values
      this.state = {
        monsters: [],
        filterBy: '',
     };

    }

    // this will load when the component is loaded
    componentDidMount() {
      // fetch monsters from server
      // the response is converted to a json object and the state is changed

      fetch(endpoint)
        .then((response) => response.json())
        .then((users) => this.setState( 
         () => {

          return {monsters: users};
        
        },
        () => {

          // return console.log(this.state);

        }
        ))

    }

    onSearchChange = (event) => {

      this.setState({filterBy: event.target.value});

    } 

    render() {    
      
      // initializing variables from this.state
      const { monsters, filterBy } = this.state;
      const { onSearchChange } = this;

      return (
        <div className="App">

          <h1 className='app-title'>Welcome everyone</h1>

          <SearchBox 
          onSearchChange={onSearchChange} 
          className='monters-search-box'
          placeholder={'Search monsters'}
          />

          {
            // filtering and displaying the list of monsters
            // we can pass properties to the CardList component
          }
          <CardList monsters={monsters} filterBy={filterBy} />

        </div>
      );
    }

}
export default AppFunct;


// class App extends Component {

//   /**
//    *  constructor is part of the Component class
//    *  to use a js varibble we use {}
//    * 
//    *  react will automatically re-render when it checks that there is another object in memory
//    *  otherwise it will not change 
//    * 
//    *  to be able to do so, we need to call .setState to change the value of a variable
//    * 
//    *  when we set a new vale for the this.setState, the object remain the same since this is not an async process
//    * 
//    */

//   constructor(){
//     super();

//     // referencing to the same class
//     // here we're going to set key par values
//     this.state = {
//       name: {first_name: 'John', last_name: 'Doe'},
//       company: 'company',
//       other_thing: 'this is another thing'
//     };

//   }

//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Hi, {this.state.name.first_name} {this.state.name.last_name}, I work at {this.state.company} {this.state.other_thing}
//           </p>

//           <button onClick={() => {
//           //   this.setState({other_thing: 'This is another name'});
//           //   // console.log(this.state)
//             this.setState((state, props) =>{
//             return other_thing = 'This is another thing';
//           },
//           () => {
//             // this is a callback 
//             // this will run after the new object in state has changed

//             console.log(this.state)

//           });

//         }
        
//         }>
          
//             Change name
//           </button>
          
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             This is what
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

