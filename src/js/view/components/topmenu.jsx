// This creates the top menu of the application

import React from "react";

import { openClosed } from "../../enums";

import { generateAFewTestNodes } from '../../data/testdata.js'

import bookOpenIcon from '../../../assets/icons/bookOpen.png';
import bookClosedIcon from '../../../assets/icons/bookClosed.png';

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

    componentDidUpdate () {
        this.props.resizeCytoscape();
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
                    <div className="margin-bottom25" onClick = {this.changeOpenClosed}>
                        <img className="icon" src={ bookOpenIcon } />        
                    </div>
                    <div>
                        <OpenTestData addElements={this.props.addElements} />
                    </div>                    
                </div>
            )
        }
    }
}

class OpenTestData extends React.Component {
    constructor (props) {
        super(props);

        this.addTestData = this.addTestData.bind(this);
    }

    addTestData () {
        let listToAdd = generateAFewTestNodes();
        this.props.addElements(listToAdd);
    }

    render () {
        return (
            <div className="button" onClick={ this.addTestData} >
                Get Test Data
            </div>
        );
    }
}