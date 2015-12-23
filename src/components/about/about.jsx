/* @flow */

import React from 'react';

class About extends React.Component {

    render(): React.Element {   // notice the Flow type declaration (e.g. ': React.Element')
        return (
            <h1>Welcome to the about component!</h1>
        );
    }

}

export default About;
