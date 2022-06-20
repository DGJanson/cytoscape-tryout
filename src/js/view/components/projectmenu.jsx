import React from 'react';
import { openClosed } from '../../enums';

// The view of the  project menu under the graph
// Shows the project data
// Use the openclosed enum to determine of the project settings can be edited

export class ProjectMenu extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            openClosed: openClosed.closed,
            title: this.props["desc"]["title"]
        }

        this.changeState = this.changeState.bind(this);
        this.setTitle = this.setTitle.bind(this);
    }

    changeState () {
        if (this.state["openClosed"] === openClosed.closed) {
            this.setState({
                openClosed: openClosed.open
            });
        } else { // If from open to closed, we need to save
            this.save();
            this.setState({
                openClosed: openClosed.closed
            });
        }
    }

    save () {
        // We simply write all the state to the prop object that was sent here
        this.props["desc"].setTitle(this.state["title"]);
    }

    setTitle (event) {
        // We need to set the title both in the object 
        this.setState({
            title: event.target.value
        });
    }

    render () {
        if (this.state["openClosed"] === openClosed.closed) {
            return (
                <div className="containerDiv">
                    <h1>{this.state["title"]}</h1>
                    <div className="button" onClick={this.changeState}>Edit</div>
                </div>
            )
        } else if (this.state["openClosed"] === openClosed.open) {
            return (
                <div className="containerDiv">
                    <p>Title</p>
                    <div>
                        <input type="text" value={this.state["title"]} onChange={this.setTitle} />
                    </div>
                    <div className="button" onClick={this.changeState}>Save</div>
                </div>
            )
        }
        
        
    }
}