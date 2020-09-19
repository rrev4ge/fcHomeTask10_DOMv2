"use strict";


function createDomElement(
  element,
  attributes = {},
  children = [],
) {
  const elementNode = document.createElement(element);
  setElementAttributes(elementNode, attributes);
  addChildren(elementNode, children);
  return elementNode;
}

function setElementAttributes(elementNode, attributes) {
  if (typeof attributes === "object") {
    for (const key in attributes) {
      elementNode.setAttribute(key, attributes[key]);
    }
  }
}

function removeElementAttributesValue(elementNode, attributes) {
  if (typeof attributes === "object") {
    for (const key in attributes) {
      if (key === "class") {
        elementNode.classList.remove(attributes[key]);
      }
      if (key !== "class") {
        elementNode.removeAttribute(key);
      }
      
    }
  }
}

function checkAttribute (elementNode, attribute) {
  if (typeof attribute === "object") {
    for (const key in attribute) {
      if (key === "class") {
          for (const i of elementNode.classList) {
          if (i === attribute[key]) {
           return true;
          }
        }
      }
      if (key !== "class" && elementNode.getAttribute(key) === attribute[key]) {
        return true;
      }
      return false;
    }
  }
}

function addChildren(elementNode, children = []) {
  if (children.length > 0) {
    for (const child of children) {
      elementNode.append(child);
    }
  }
}
