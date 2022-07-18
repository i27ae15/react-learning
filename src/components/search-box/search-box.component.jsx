import { Component } from 'react';

// This will be applied to the entire web page
import './search-box.styles.css';


class SearchBox extends Component{
    render(){

        const { onSearchChange } = this.props;

        return (
            <input className={`search-box ${this.props.className}`} 
            type='search' 
            placeholder={this.props.placeholder} 
            // any time render is called, it will re-render everything that gets here
            // anonymous functions are not stored int the memory with any variable under its name meaning that 
            // everytime render is called it will initialized the anonymous function making it not efficient

            // onChange={(event) => {

            //   this.setState({filterBy: event.target.value});

            // }} />

            // to avoid the problem descripted above we take the function out of the render method 

            onChange={onSearchChange} />
        );
    }
}


export default SearchBox;