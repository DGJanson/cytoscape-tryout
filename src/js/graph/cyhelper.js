// class that can help manipulate the graph
// Pass it a cytoscape object

export class CyHelper {
    constructor (cytoscapeCore) {
        this.cy = cytoscapeCore;
        this.layout = 'grid'
    }

    setLayout (aNewLayout) {
        this.layout = aNewLayout;
    }

    addNode (aId) {
        let node = this.cy.elements('[id = "' + aId + '"]');
        if (node["length"] == 0) { // Do we need to override data if otherwise?
            this.cy.add({
                data: { id: aId }
            });
    
            this.cy.layout({name: this.layout}).run();
            this.cy.fit();    
            console.log("Finished adding node");
        }
        
    }

    addEdge (sourceId, targetId) {
        let id = sourceId + "::" + targetId;
        let nodes = this.cy.elements('[id = "' + sourceId + '"], [id = "' + targetId + '"]');
        console.log(nodes);
        let edge = this.cy.elements('[id = "' + id + '"]');
        if (edge["length"] === 0 && nodes["length"] === 2) {
            this.cy.add({
                data: {
                    id: id,
                    source: sourceId,
                    target: targetId
                }
            });

            this.cy.layout({name: this.layout}).run();
            this.cy.fit();
        }
    }
}