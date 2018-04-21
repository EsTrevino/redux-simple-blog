import React from 'react';
import ReactDOM from 'react-dom';
import promise from 'redux-promise';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'


import reducers from './reducers';
import PostsIndex from './components/posts_index';
import PostNew from './components/posts_new';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
<Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={PostsIndex} />
        <Route exact path="/post/new" component={PostNew} />
      </Switch>
    </BrowserRouter>
</Provider>, document.getElementById('root'));
