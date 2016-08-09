import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

//reducer adds key books to global application state using reducer_books.js
const rootReducer = combineReducers({
books: BooksReducer
});

export default rootReducer;
