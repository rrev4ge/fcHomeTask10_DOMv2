"use strict";
const inputR = createDomElement("input", {type: "text"}, []);
const inputV = createDomElement("input", {type: "text"}, []);
const form = createDomElement("form", {id: "form"}, [inputR, inputV]);
const elem = createDomElement("div", {id: "elem"}, []);
const ul = createDomElement("div", {id: "ul"}, []);
const root = createDomElement("div", {id: "root"}, [form, elem, ul]);
document.querySelector("body").append(root);


inputR.addEventListener("input", (event) => {
  const {
    target: {value},
    target,
  } = event;
   const radius = Number(value);
   console.log(radius);
  if (typeof radius === "number" && radius > 0) {
    
    const volume =  (4/3 * 3.14) * (radius**3);
    inputV.value = volume; 
  } else {
    inputV.value = "";
  }
});


function setClass(elementNode, attribute) {
  if (checkAttribute (elementNode, attribute)) {
    removeElementAttributesValue(elementNode, attribute);
  }
  if (!checkAttribute (elementNode, attribute)) {
    setElementAttributes(elementNode, attribute);
    
  }
  
}




