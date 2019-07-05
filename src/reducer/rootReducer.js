import { combineReducers } from 'redux';
import bookListReducer from './bookListReducer';
import { modalReducer } from './modalReducer';
export default combineReducers({
    bookListReducer,
    modalReducer
});