import { combineReducers } from 'redux';
import BooksReducer from './reducer_Books';

const rootReducer = combineReducers({
  books: BooksReducer
});

export default rootReducer;
