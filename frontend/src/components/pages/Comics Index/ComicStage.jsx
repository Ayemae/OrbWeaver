import React, { Component } from 'react';
import ComicNav from './ComicNav';
import FixedComicNav from './FixedComicNav';

let pagesArr = ["http://www.lapsecomic.com/comics/20120219.jpg",
    "http://www.lapsecomic.com/comics/20120220.jpg",
    "http://www.lapsecomic.com/comics/20120221.jpg",
    "http://www.lapsecomic.com/comics/20120222.jpg",
    "http://www.lapsecomic.com/comics/20120223.jpg",
    "http://www.lapsecomic.com/comics/20120229.jpg",
    "http://www.lapsecomic.com/comics/20120307.jpg",
    "http://www.lapsecomic.com/comics/20120314.jpg",
    "http://www.lapsecomic.com/comics/20120321.jpg",
    "http://www.lapsecomic.com/comics/20120328.jpg"]

class ComicStage extends Component {
    constructor() {
        super();
        this.state = {
            index: 0
        };
    }

    getLast = () => {
        this.setState({ index: (pagesArr.length - 1) });
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    getNext = () => {
        if (this.state.index < (pagesArr.length - 1)) {
            this.setState({ index: (this.state.index + 1) });
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }
    }
    getPrev = () => {
        if (this.state.index >= 1) {
            this.setState({ index: (this.state.index - 1) });
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }
    }

    getFirst = () => {
        this.setState({ index: 0 });
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    render() {
        return (
            <div className="comic-stage" ref="comicTop">
                <div className="page-wrapper">
                    <ComicNav
                        getLast={this.getLast}
                        getNext={this.getNext}
                        getPrev={this.getPrev}
                        getFirst={this.getFirst} />
                    <img className="comic-img" src={pagesArr[this.state.index]} alt="??" />
                    <ComicNav
                        getLast={this.getLast}
                        getNext={this.getNext}
                        getPrev={this.getPrev}
                        getFirst={this.getFirst} />

                        <FixedComicNav
                        getLast={this.getLast}
                        getNext={this.getNext}
                        getPrev={this.getPrev}
                        getFirst={this.getFirst} />
                </div>
            </div> /* end container */
        );
    }
}

export default ComicStage;
