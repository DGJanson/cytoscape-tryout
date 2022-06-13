// class that can help manipulate the graph
// Pass it a cytoscape object

export class CyHelper {
    constructor (cytoscapeCore) {
        this.cy = cytoscapeCore;
        this.layout = 'cose'
    }

    setLayout (aNewLayout) {
        this.layout = aNewLayout;
    }

    addNode (aId, redraw = false) {
        let node = this.cy.elements('[id = "' + aId + '"]');
        if (node["length"] == 0) { // Do we need to override data if otherwise?
            this.cy.add({
                data: { id: aId }
            });    
        }

        if (redraw) {
            this.redrawGraph();
        }
    }

    addEdge (sourceId, targetId, redraw = false) {
        let id = sourceId + "::" + targetId;
        let nodes = this.cy.elements('[id = "' + sourceId + '"], [id = "' + targetId + '"]');
        let edge = this.cy.elements('[id = "' + id + '"]');
        if (edge["length"] === 0 && nodes["length"] === 2) {
            this.cy.add({
                data: {
                    id: id,
                    source: sourceId,
                    target: targetId
                }
            });
        }

        if (redraw) {
            this.redrawGraph();
        }
    }

    redrawGraph () {
        this.cy.layout({name: this.layout}).run();
        this.cy.fit();
    }

    addElements (listOfStuffToAdd) {
        if (Array.isArray(listOfStuffToAdd)) {
            for (const ele of listOfStuffToAdd) {
                // Check if node or edge by looking for a source and target
                if (ele["data"]["source"] && ele["data"]["target"]) {
                    this.addEdge(ele["data"]["source"], ele["data"]["target"]);
                } else {
                    this.addNode(ele["data"]["id"]);
                }
            }
            
            this.redrawGraph();
        } else {
            console.log("The passed argument to addElements was not a list");
        }
    }

    resizeCy () {
        this.cy.resize();
    }
}