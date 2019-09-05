import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import ListBook from './pages/book/List';
import ListAuthor from './pages/author/List';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from "react-router-dom";

import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import sidebar from './utils/stores/sidebar';
import books from './utils/stores/books';

import { Provider } from 'react-redux';

const reducers = combineReducers({sidebar,books});
const store = createStore(reducers,applyMiddleware(thunk));

ReactDOM.render(<Provider store={store} >
                    <Router>
                        <Route path="/" exact component={ListBook} />
                        <Route path="/authors" exact component={ListAuthor} />
                    </Router>
                </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
