import { bookData } from '../data/booksData';

const initialState = {
  "bookList": bookData
};
export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      state = {
        ...state,
        bookList: action.payload
      };
      return state;
    case 'DELETE_BOOK':
      state = {
        ...state,
        bookList: action.payload
      };
      return state;
    case 'EDIT_BOOK':
      state = {
        ...state,
        bookList: action.payload
      };
      return state;
    default:
      return state
  }
}