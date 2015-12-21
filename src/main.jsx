/* @flow */

import React from 'react';
import ReactDOM from 'react-dom';

let hello = (name: string): string => {

<<<<<<< HEAD
=======
let hello = function(name) {

>>>>>>> cbc7ec508bd952d55fc92db5d607f09b5decf13e
    return `Hello, ${name}!`;

}

class MyComponent extends React.Component {

    render() {
        return (
            <h1>{hello('Ryan')}</h1>
        );
    }

}

<<<<<<< HEAD
ReactDOM.render(<MyComponent />, document.getElementById('js-container'));
=======
React.render(<MyComponent />, document.getElementById('js-container'));
>>>>>>> cbc7ec508bd952d55fc92db5d607f09b5decf13e
