/* @flow */

import React from 'react';
import ReactDOM from 'react-dom';

// sample function with Flow type annotations

let hello = (name: string): string => {

    return `Hello, ${name}!`;

};

// sample React class

class MyComponent extends React.Component {

    render() {
        return (
            <h1>{hello('Ryan')}</h1>
        );
    }

}

// ReactDOM render example

ReactDOM.render(<MyComponent />, document.getElementById('js-container'));
