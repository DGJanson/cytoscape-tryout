import './css/base.scss';
import { createRoot } from 'react-dom/client';
import React from 'react';

import { MainModel } from './js/model/main';

import { MainView} from './js/view/main_view.jsx';

import { createElement } from './js/view/utils.js'

// Here we setup the html and then start loading the first page

function init_window () {
  let div = createElement("div", "mainDiv", "mainDiv");
  document.body.appendChild(div);
  const root = createRoot(div)

  // We need to render a basic view first, since we need to bind cytoscape to an element that exists
  root.render(<MainView />);
}

window.onload = init_window;
