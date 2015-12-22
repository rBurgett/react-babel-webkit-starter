/* @flow */

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import { createHistory, useBasename } from 'history';

import About from './components/about/about.jsx';
import Home from './components/home/home.jsx';
import Layout from './components/layout.jsx';

const history = useBasename(createHistory)({
  basename: '/'
});

render((
    <Router history={history}>
        <Route path='/' component={Layout}>
            <IndexRoute name='home' component={Home} />
            <Route name='about' path='/about' component={About} />
        </Route>
    </Router>
), document.getElementById('js-container'));
