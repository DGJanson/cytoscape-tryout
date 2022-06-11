// This contains the main view. Call several elements that make up the main view

import React from 'react';

import { Title } from './components/headers.jsx';
import { LoadingDiv } from './components/statecomponents.jsx';

import { MainModel } from '../model/main.js';
import { mainStates } from '../enums.js';

export class MainView extends React.Component {
    constructor (props) {
        super(props);
        this.state = { state: mainStates.loading} ;
    }

    componentDidMount () {
        this.mainModel = new MainModel();
        this.mainModel.bootCytoscape();
        this.setState({state: mainStates.loaded});
    }

    render () {
        if (this.state["state"] == mainStates.loading) {
            return (
                <div>
                    <MainTitle/>
                    <LoadingDiv />
                    <CytoscapeContainer />
                </div>            
            )
        } else if (this.state["state"] == mainStates.loaded) {
            return (
                <div>
                    <MainTitle/>                    
                    <CytoscapeContainer />
                </div>            
            )
        }
    }
}

class MainTitle extends React.Component {
    render () {
        return (
            <div className="containerDiv">
                <Title title="KVK cytoscape demo" />
            </div>
        )
    }    
}

class CytoscapeContainer extends React.Component {
    render () {
        return (
            <div className="canvasDiv" id="canvasDiv"></div>
        )
    }
}