import { combineReducers } from 'redux';
import BooksReducer from './reducer_Books';
import ActiveBook from './reducer_ActiveBook';

const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;
