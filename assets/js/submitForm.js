"use strict";

const state = [];
const inputFirst = createDomElement(
  "input",
  { type: "text", id: "input", name: "inputFirst"},
  [],
);
const inputDiv = createDomElement("div");
const inputSecond = createDomElement("input", { type: "text", name: "inputSecond"});
const inputList = createDomElement("ol");
const submitBtn = createDomElement(
  "input",
  { type: "submit",},
  [],
);
const form = createDomElement("form", { id: "form" }, [
  inputFirst,
  inputSecond,
  submitBtn,
]);
const root = createDomElement("div", { id: "root" }, [form, inputList]);
const body = document.querySelector("body");
body.append(root);

inputFirst.addEventListener("input", createValueBlock);
form.addEventListener("submit", createListItem);

function createDomElement(
  element,
  attributes,
  children, /* onEvent = () => {}, */
) {
  const elementNode = document.createElement(element);
  setElementAtributes(elementNode, attributes);
  //elementNode.oninput = onEvent;
  addChildren(elementNode, children);
  return elementNode;
}

function setElementAtributes(elementNode, attributes) {
  if (typeof attributes === "object") {
    for (const key in attributes) {
      elementNode.setAttribute(key, attributes[key]);
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

function createValueBlock(event) {
  const {
    target: { value },
    target,
  } = event;
  inputDiv.textContent = value;
  target.parentNode.append(inputDiv);
  if (value === "") {
    inputDiv.remove();
  }
}

function createListItem(event) {
  event.preventDefault();
  const {
    target: {
      elements,
    },
  } = event;

  console.log(elements);

  // state.push(value);

  // const btn = createDomElement("button");
  // btn.textContent = "Delete";
  // const li = createDomElement("li", {}, [document.createTextNode(value), btn]);
  // inputList.append(li);

  event.target.reset();
}

body.cre;
