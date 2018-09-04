import React, { Component } from 'react';
import AuthorText from './AuthorText';
import CommentSection from './CommentSection';

class CenterContent extends Component {
    render() {
        return (
            <div className="center-content">
                    <AuthorText />
                    <CommentSection />
            </div> /* end container */
        );
    }
}

export default CenterContent;
