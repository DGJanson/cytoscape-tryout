import { createElement, createInputElement } from './utils.js';

import { initCytoscape} from '../graph/cytocanvas.js'
import { CyHelper } from '../graph/cyhelper.js';



export function generateMainView () {
  const canvasDiv = createElement('div', 'canvasDiv', 'canvasDiv');
  document.getElementById('mainDiv').appendChild(canvasDiv);
  let cy = initCytoscape('canvasDiv');
  const cyHelper = new CyHelper(cy);

  cyHelper.setLayout('cose');

  let canvasAddDiv = createInputElements(cyHelper);
  document.getElementById('mainDiv').appendChild(canvasAddDiv);

  //cyHelper.addNode("a");
  //cyHelper.addNode("b");
  //cyHelper.addNode("c");
  //cyHelper.addNode("c");

  //cyHelper.addEdge("b", "c");
  //cyHelper.addEdge("b", "c");
  //cyHelper.addEdge("c", "a");
  //cyHelper.addEdge("b", "d");
}

function createInputElements (cyHelper) {
  const addDiv = createElement('div', 'canvasAddDiv', 'canvasAddDiv');

  let nodeHeader = createElement('div', 'canvasAddNodeHeader', 'canvasAddHeader');
  nodeHeader.innerHTML = 'Add Node';
  addDiv.appendChild(nodeHeader);
  addDiv.appendChild(createCanvasInput('Node ID', 'nodeId'));
  let addNodeButton = createElement('div', 'addNodeButton', 'canvasSubmit');
  addNodeButton.innerHTML = 'Add Node';
  addNodeButton.addEventListener("click", createAddNodeListener(cyHelper), false);
  addDiv.appendChild(addNodeButton);

  let edgeHeader = createElement('div', 'canvasAddEdgeHeader', 'canvasAddHeader');
  edgeHeader.innerHTML = 'Add Edge';
  addDiv.appendChild(edgeHeader);
  addDiv.appendChild(createCanvasInput('Source ID', 'edgeSourceId'));
  addDiv.appendChild(createCanvasInput('Target ID', 'edgeTargetId'));
  let addEdgeButton = createElement('div', 'addEdgeButton', 'canvasSubmit');
  addEdgeButton.innerHTML = 'Add Edge';
  addEdgeButton.addEventListener('click', createAddEdgeListener(cyHelper), false);
  addDiv.appendChild(addEdgeButton);
  
  return(addDiv);
}

function createCanvasInput (label, inputId) {
  let inputDiv = createElement('div', 'canvasInputDiv-' + inputId, 'canvasAddInputDiv');
  let inputLabel = createElement('div', 'canvasInputLabel-' + inputId, 'canvasAddInputLabel');
  inputLabel.innerHTML = label;
  inputDiv.appendChild(inputLabel);
  let inputInput = createElement('div', 'canvasInput-' + inputId, 'canvasAddInputInput');
  let inputElement = createInputElement(inputId, 'canvasInput'); // canvasInput class does not exist yet
  inputInput.appendChild(inputElement);
  inputDiv.appendChild(inputInput);
  return(inputDiv);
}

function createAddNodeListener (cyHelper) {
  let toReturn = function () {
    let nodeId = document.getElementById('nodeId').value;
    document.getElementById('nodeId').value = '';
    cyHelper.addNode(nodeId);
  };

  return toReturn;
}

function createAddEdgeListener (cyHelper) {
  return function () {
    let sourceId = document.getElementById('edgeSourceId').value;
    let targetId = document.getElementById('edgeTargetId').value;
    document.getElementById('edgeSourceId').value = '';
    document.getElementById('edgeTargetId').value = '';
    cyHelper.addEdge(sourceId, targetId);
  }
}
