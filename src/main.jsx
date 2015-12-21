/* @flow */

import React from 'react';
import ReactDOM from 'react-dom';

let hello = (name: string): string => {

    return `Hello, ${name}!`;

};

class MyComponent extends React.Component {

    render() {
        return (
            <h1>{hello('Ryan')}</h1>
        );
    }

}

ReactDOM.render(<MyComponent />, document.getElementById('js-container'));
