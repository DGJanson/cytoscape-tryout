// This contains the main view. Call several elements that make up the main view

import React from 'react';

import { Title } from './components/headers.jsx';
import { LoadingDiv } from './components/statecomponents.jsx';
import { TopMenu } from './components/topmenu/topmenu.jsx';

import { initCytoscape } from '../graph/cytocanvas.js';
import { CyHelper } from '../graph/cyhelper.js';

import { mainStates } from '../enums.js';

export class MainView extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            appState: mainStates.loading,
            cytoscapeLoaded: false,

        };

        this.addElementsToCytoscape = this.addElementsToCytoscape.bind(this);
        this.resizeCytoscape = this.resizeCytoscape.bind(this);
    }

    componentDidMount () {
        // We need to check if cytoscape is loaded, to prevent it from being loaded twice.
        if (this.state["cytoscapeLoaded"] === false) {
            // initcytoscape returns a promise! so await it
            initCytoscape("canvasDiv").then(cyCore => {
                console.log(cyCore);
                this.cyHelper = new CyHelper(cyCore);        
                this.setState({
                    appState: mainStates.loaded,
                    cytoscapeLoaded: true
                });
            });
        }
        
    }

    componentDidUpdate () {
        this.resizeCytoscape();
    }

    // Callbacks that downstream components can use

    // This one simply gets a list of cytoscape elements and passes them to the cyHelper
    addElementsToCytoscape (listOfElements) {
        this.cyHelper.addElements(listOfElements);
    }

    // We need to resize cytoscape each time the position of the canvas changes...
    resizeCytoscape () {
        this.cyHelper.resizeCy();
    }

    render () {
        if (this.state["appState"] == mainStates.loading) {
            return (
                <div>
                    <MainTitle/>
                    <LoadingDiv />
                    <CytoscapeContainer />
                </div>            
            )
        } else if (this.state["appState"] == mainStates.loaded) {
            return (
                <div>
                    <MainTitle/>       
                    <TopMenu addElements={this.addElementsToCytoscape} resizeCytoscape={this.resizeCytoscape} />             
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