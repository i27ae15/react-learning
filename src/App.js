import { Component } from 'react';

// import logo from './logo.svg';
import './App.css';

const endpoint = 'https://jsonplaceholder.typicode.com/users';

class App extends Component {

    constructor(){
      super();

      // referencing to the same class
      // here we're going to set key par values
      this.state = {
        monsters: [],
     };
    }

    componentDidMount() {
      // fetch monsters from server
      fetch(endpoint)
        .then((response) => response.json())
        .then((users) => this.setState({monsters: users}))

    }

    render() {
      return (
        <div className="App">

          {
            this.state.monsters.map((monster) => {
              return <h1 key={monster.id}>{monster.name}</h1>;
            })
          }

        </div>
      );
    }

}
export default App;


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
//           this.setState((state, props) =>{
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

