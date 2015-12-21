/* @flow */

import React from 'react';

let hello = function(name) {

    return `Hello, ${name}!`;

}

class MyComponent extends React.Component {

    render() {
        return (
            <h1>{hello('Ryan')}</h1>
        );
    }

}

React.render(<MyComponent />, document.getElementById('js-container'));
