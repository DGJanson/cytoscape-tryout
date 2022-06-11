// this class represents the main model of the  application
// It contains the data and metadata for the graph
// This class does not do a lot by itself, but collects the required data and methods

import { initCytoscape } from "../graph/cytocanvas"
import { CyHelper } from "../graph/cyhelper";

export class MainModel {
    constructor () {
        
    }

    bootCytoscape () {
        let cy = initCytoscape("canvasDiv");
        this.cyHelper = new CyHelper(cy);
    }
}