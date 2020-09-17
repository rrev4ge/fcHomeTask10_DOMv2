"use strict";
const inputR = createDomElement("input", {type: "text"}, []);
const inputV = createDomElement("input", {type: "text"}, []);
const form = createDomElement("form", {id: "form"}, [inputR, inputV]);
const elem = createDomElement("div", {id: "elem"}, []);
const root = createDomElement("div", {id: "root"}, [form, elem]);
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


function setClass() {

  setElementAttributes(elem, {class: "www"});
  
}




