import React from 'react';
import './searchBar.css';

class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.searchValue = '';
    }
    SearchForBook = (e) => {
        this.searchValue = e.target.value;
    }
    render(){
        return (
            <div className="wrap">
                <div className="search">
                    <input type="text" onChange = { (e) => this.SearchForBook(e) } id="searchTerm" className="searchTerm" defaultValue='' placeholder="What book are you looking for?" />
                    <button type="submit" className="searchButton" onClick={
                        ()=>this.props.searchBook(this.searchValue)
                        }>
                        Search
                    </button>
                </div>
            </div>
        );
    }
}

export default SearchBar;
