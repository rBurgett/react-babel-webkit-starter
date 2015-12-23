/* @flow */

import React from 'react';
import { Link } from 'react-router';

class Layout extends React.Component {

    render(): React.Element {   // notice the Flow type declaration (e.g. ': React.Element')

        const styles = {
            button: {
                margin: 5
            }
        };

        const currentPath = this.props.location.pathname;

        const activeClasses = 'btn btn-primary';
        const inactiveClasses = 'btn btn-default';

        return (
            <div>
                <h1>This is the layout component!</h1>
                <Link to="/"><button type="button" className={(currentPath === '/') ? activeClasses : inactiveClasses} style={styles.button}>Home</button></Link>
                <Link to="about"><button type="button" className={(currentPath === '/about') ? activeClasses : inactiveClasses} style={styles.button}>About</button></Link>
                {this.props.children}
            </div>
        );
    }

}

export default Layout;
