import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

import sidebar from './utils/reducers/sidebar';

import ListBook from './pages/book/list/List';
import ListAuthor from './pages/author/list/List'
import InfoAuthor from './pages/author/info/Info'

const reducers = combineReducers({sidebar});
const store = createStore(reducers,applyMiddleware(thunk));

ReactDOM.render(<Provider store={store} >
                    <Router>
                        <Route path="/" exact component={ListBook} />
                        <Route path="/authors" exact component={ListAuthor} />
                        <Route path="/authors/:id" exact component={InfoAuthor} />
                    </Router>
                </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
