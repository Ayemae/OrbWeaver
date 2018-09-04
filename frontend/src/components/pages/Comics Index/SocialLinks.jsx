import React, { Component } from 'react';

class HeaderMenu extends Component {
    render() {
        return (
            <div className="social-links">
                <a href="">
                    <i className="fab fa-patreon"></i>
                </a>
                <a href="">
                    <i className="fab fa-twitter-square"></i>
                </a>
                <a href="">
                    <i className="fab fa-discord"></i>
                </a>
            </div> /* end container */
        );
    }
}

export default HeaderMenu;
