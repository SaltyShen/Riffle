 import React, {Component} from 'react';
 import './searchbar.css'

 class SearchBar extends Component {
    render(){
        return(
            <input className="search-bar" type='text' placeholder="Search A Session"></input>
        )
    }
 } 
 export default SearchBar;