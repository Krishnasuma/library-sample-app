import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addNewBook } from './actions/bookActions';
import { openModal, currentBook } from './actions/modalActions'
import './App.css';
import BookCard from './components/book';
import SearchBar from './components/searchBar';
import BookModal from './components/bookModal';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredBooks:this.props.bookList
    };
  }

  addNewBook = () => {
    const bookData = {
      currentBook:{},
      editMode:false
    }
    this.props.actions.openModal();
    this.props.actions.currentBook(bookData);
  }
  searchBook = (searchVal) => {
    let results = [];
    if(searchVal.trim() == ''){
      results = this.props.bookList;
    }else{
      for(var i=0; i<this.props.bookList.length; i++) {
        for(var key in this.props.bookList[i]) {
          if(this.props.bookList[i][key].indexOf(searchVal)!=-1) {
            results.push(this.props.bookList[i]);
          }
        }
      }
    }
    this.setState({filteredBooks:results});
    results = [];
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.bookList.length !== this.props.bookList.length){      
      return this.setState({filteredBooks:nextProps.bookList});
    }
    const ischanged = nextProps.bookList.map((data,index)=>{
      if(JSON.stringify(data) === JSON.stringify(this.props.bookList[index])){
        return true;
      }
      return false;
    })
    if(ischanged.includes(true)){
      return this.setState({filteredBooks:nextProps.bookList});
    }
  }
  render() {
    return (
      <div className="App">
        <SearchBar searchBook={this.searchBook} />
        <a href="#" className="newBook" onClick={this.addNewBook}>Add New book</a>
        <BookCard bookList={this.state.filteredBooks} />
        <BookModal />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    bookList: state.bookListReducer.bookList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      {
        addNewBook,
        openModal,
        currentBook
      },
      dispatch
    ),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);

