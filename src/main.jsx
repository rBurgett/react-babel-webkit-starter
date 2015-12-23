/* @flow */

import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';

import About from './components/about/about.jsx';
import Home from './components/home/home.jsx';
import Layout from './components/layout.jsx';

ReactDOM.render((
    <Router>
        <Route path='/' component={Layout}>
            <IndexRoute component={Home} />
            <Route path='/about' component={About} />
        </Route>
    </Router>
), document.getElementById('js-container'));
