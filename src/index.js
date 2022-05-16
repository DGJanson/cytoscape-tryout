import './css/base.scss';
import { generateMainView} from './js/view/main_view.js';

import { createElement } from './js/view/utils.js'


function init_window () {
  const helloText = document.createElement("h1");
  helloText.innerHTML = "Cytoscape demo";
  document.body.appendChild(helloText);

  const mainDiv = createElement('div', 'mainDiv', 'mainDiv');
  document.body.appendChild(mainDiv);

  generateMainView();
}

window.onload = init_window;
