import React from 'react';

const ComicNav = props => {
    return (
    <div className="comic-nav">
        <a className="first" onClick={props.getFirst}><i className="fas fa-angle-double-left"></i> First</a>
        <a className="prev" onClick={props.getPrev}><i className="fas fa-angle-left"></i> Prev</a>
        <a className="next" onClick={props.getNext}>Next <i className="fas fa-angle-right"></i></a>
        <a className="last" onClick={props.getLast}>Last <i className="fas fa-angle-double-right"></i></a>
    </div> /* end container */);
}

export default ComicNav;
