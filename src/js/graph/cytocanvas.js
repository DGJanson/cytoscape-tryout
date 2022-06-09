export async function initCytoscape (containerId) {
  // Use a dynamic import of cytoscape
  // This can reduce bundle size
  // See webpack -> code splitting guide
  let { default: cytoscape } = await import("cytoscape")
  let cy = cytoscape({
    container: document.getElementById(containerId),
    elements: [ // list of graph elements to start with
      // empty, is added later
    ],
    style: [ // the stylesheet for the graph
      {
        selector: 'node',
        style: {
          'background-color': '#666',
          'label': 'data(id)'
        }
      },

      {
        selector: 'edge',
        style: {
          'width': 3,
          'line-color': '#ccc',
          'target-arrow-color': '#ccc',
          'target-arrow-shape': 'triangle',
          'curve-style': 'bezier'
        }
      }
    ],

    layout: {
      name: 'grid',
      rows: 1
    }
  });

  return cy;
}
