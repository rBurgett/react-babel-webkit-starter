/* @flow */

import React from 'react';
import { Link } from 'react-router';

class Layout extends React.Component {

    render() {

        console.log(this.props);

        return (
            <div>
                <h1>This is the layout component!</h1>
                <Link to="/"><button type="button" className="btn btn-default">Home</button></Link>
                <Link to="/about"><button type="button" className="btn btn-default">About</button></Link>
                {this.props.children}
            </div>
        );
    }

}

export default Layout;
