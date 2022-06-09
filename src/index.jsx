import './css/base.scss';
import { createRoot } from 'react-dom/client';
import React from 'react';

import { generateMainView} from './js/view/main_view.js';

import { createElement } from './js/view/utils.js'

import { Title } from './js/view/components/headers.jsx'


function init_window () {
  let div = createElement("div", "bodyDiv", "bodyDiv");
  document.body.appendChild(div);
  const root = createRoot(div)
  root.render(<Title />);

  const mainDiv = createElement('div', 'mainDiv', 'mainDiv');
  document.body.appendChild(mainDiv);

  generateMainView();
}

window.onload = init_window;
