/* @flow */

import React from 'react';

class Home extends React.Component {

    render(): React.Element {   // notice the Flow type declaration (e.g. ': React.Element')
        return (
            <h1>Welcome to the home component!</h1>
        );
    }

}

export default Home;
