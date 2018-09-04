import React, { Component } from 'react';
import SocialLinks from './SocialLinks';

class HeaderMenu extends Component {
    render() {
        return (
            <div className="header-menu">
                <a href="">Beginning</a>
                <a href="">About</a>
                <a href="">Archive</a>
                <a href="">Characters</a>
                <a href="">Gallery</a>
                <SocialLinks />
            </div> /* end container */
        );
    }
}

export default HeaderMenu;
