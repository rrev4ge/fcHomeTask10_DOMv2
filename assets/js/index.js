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



const objArray = [
  {id: "a", title: "Object A", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ullam vitae unde, voluptatibus."},
  {id: "b", title: "Object B", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ullam vitae unde, voluptatibus."},
  {id: "c", title: "Object C", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ullam vitae unde, voluptatibus."},
  {id: "d", title: "Object D", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ullam vitae unde, voluptatibus."},
];


function addLi(objArr) {
  for (const obj of objArr) {
    const {
      id,
      title,
      description,
    } = obj;
    const delBtn = createDomElement("button", {class: "button",}, [document.createTextNode("Delete")]);
    delBtn.onclick = removeParrent;
    const content = title + " " + description;
    const li = createDomElement("li", {id: id,}, [document.createTextNode(content), delBtn]);
    li.addEventListener("click", (event) => {
      const {
        target
      } = event;
      target.classList.add("www");
    })   
    ul.append(li);
  }
  
}

addLi(objArray);

function removeParrent (event) {
    const {
      target
    } = event;
    target.parentElement.remove();
}

