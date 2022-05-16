// Contains functions to help with UI element generation and stuff

export function createElement(type, a_id, a_class) {
  let element = document.createElement(type);
  element.setAttribute('id', a_id);
  element.setAttribute('class', a_class);
  return(element);
}

export function createInputElement(a_id, a_class, a_type = 'text') {
  let element = document.createElement("input");
  element.setAttribute('id', a_id);
  element.setAttribute('class', a_class);
  element.setAttribute('type', a_type);
  return(element);
}
