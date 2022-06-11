// Some components that show things like loading, errors, etc.

import React from "react";

import "./statecomponents.scss";

import rocket from '../../../assets/icons/rocket.png'

export class LoadingDiv extends React.Component {
    render () {
        return (
            <div className="loadingStateDiv">
                <p>Loading</p>
                <img className="icon" src={rocket}/>                
            </div>
        );
    }
}