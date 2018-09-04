import React, { Component } from 'react';
import HeaderMenu from './HeaderMenu';

class Header extends Component {
    render() {
        return (
            <header>
                <h1>OrbWeaver Tests</h1>
                <HeaderMenu />
            </header> /* end container */
        );
    }
}

export default Header;