import React from 'react';
import { openClosed } from '../../enums';

import './projectmenu.scss';

// The view of the  project menu under the graph
// Shows the project data
// Use the openclosed enum to determine of the project settings can be edited

export class ProjectMenu extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            openClosed: openClosed.closed,
            title: this.props["desc"]["title"],
            desc: this.props["desc"]["desc"]
        }

        this.changeState = this.changeState.bind(this);
        this.setTitle = this.setTitle.bind(this);
        this.setDesc = this.setDesc.bind(this);
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
        this.props["desc"].setDesc(this.state["desc"]);
    }

    setTitle (event) {
        // We need to set the title both in the object 
        this.setState({
            title: event.target.value
        });
    }

    setDesc (event) {
        this.setState({
            desc: event.target.value
        })
    }

    render () {
        if (this.state["openClosed"] === openClosed.closed) {
            return (
                <div className="containerDiv">
                    <h1 className="margin-bottom10">{this.state["title"]}</h1>
                    <div className="pre margin-bottom10">{this.state["desc"]}</div>
                    <div className="button" onClick={this.changeState}>Edit</div>
                </div>
            )
        } else if (this.state["openClosed"] === openClosed.open) {
            return (
                <div className="containerDiv">
                    <p>Title</p>
                    <div className="margin-bottom10">
                        <input type="text" value={this.state["title"]} onChange={this.setTitle} />
                    </div>
                    <p>Description</p>
                    <div className="margin-bottom10">
                        <textarea value={this.state["desc"]} onChange={this.setDesc} rows={5} cols={50} placeholder={"Description"} name={"desctextarea"} id={"desctextarea"} />
                    </div>
                    <div className="button" onClick={this.changeState}>Save</div>
                </div>
            )
        }
        
        
    }
}