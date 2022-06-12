// This creates the top menu of the application

import React from "react";

import { openClosed } from "../../../enums";

import bookOpenIcon from '../../../../assets/icons/bookOpen.png';
import bookClosedIcon from '../../../../assets/icons/bookClosed.png';

export class TopMenu extends React.Component {
    constructor (props) {
        super(props);
        this.state = {open: openClosed.closed };

        this.changeOpenClosed = this.changeOpenClosed.bind(this);
        this.handleKeyEvent = this.handleKeyEvent.bind(this);
    }

    changeOpenClosed () {
        if (this.state["open"] == openClosed.closed) {
            this.setState({open: openClosed.open});
        } else {
            this.setState({open: openClosed.closed});
        }
    }

    handleKeyEvent (event) {
        if (event.key == 'q') {
            this.changeOpenClosed();
        }
    }

    componentDidMount () {
        document.addEventListener("keydown", this.handleKeyEvent);
    }

    render () {
        if (this.state["open"] == openClosed.closed) {
            return (
                <div className="containerDiv" onClick = {this.changeOpenClosed} onKeyDown = {this.handleKeyEvent}>
                    <img className="icon" src={ bookClosedIcon } />
                </div>
            );
        } else {
            return (
                <div className="containerDiv">
                    <div className="margin-bottom25">
                        <img className="icon" src={ bookOpenIcon } />        
                    </div>
                    <div>
                        <div className="button" onClick = {this.changeOpenClosed}>Close Menu</div>
                        <OpenTestData />
                    </div>                    
                </div>
            )
        }
    }
}

class OpenTestData extends React.Component {
    render () {
        return (
            <div className="button">
                Get Test Data
            </div>
        );
    }
}