"use strict";

// const buttonElem = document.getElementById("btn");
// const divElem = document.querySelector("div");
// const bodyElem = document.querySelector("body");
// //buttonElem.dispatchEvent(new MouseEvent("mouseenter"))
// const first = document.getElementById("firstI");
// function buttonClickHandler(event) {
//   console.log("you pressed the button!");
//  // console.dir(event.currentTarget);
//   document.getElementById("reset").setAttribute("value", "1234567");
//   const first = document.getElementById("firstI");
//   const second = document.getElementById("secondI")
//   document.getElementById("firstI").setAttribute("value", second.value);
//   document.getElementById("secondI").setAttribute("value", first.value);
//   //buttonElem.removeEventListener("mouseenter", buttonClickHandler);
// }


// buttonElem.addEventListener("click", buttonClickHandler);
// divElem.addEventListener("click", buttonClickHandler);
// bodyElem.addEventListener("click", buttonClickHandler);

// const list = document.getElementById("list");
// const item = document.getElementById("item");
// const div = document.getElementById("div");

// function handler(event) {
//   console.log(event.currentTarget.tagName);
// }

// list.addEventListener("click", handler, true);
// item.addEventListener("click", handler, true);
// div.addEventListener("click", handler, true);


// function addValue(event) {
//  // const input = document.getElementById("inp");
// //  input.setAttribute("value", event.target.tagName);
//   //console.log(event.target.tagName);

//   const [] = event;
// }

// this.addEventListener("click", addValue);


const btn = document.getElementById("btn");
const span = document.getElementById("counter");


btn.addEventListener("click", (event) => {
  const {
    ctrlKey,
    shiftKey,
    
  } = event;
  if (ctrlKey) {
    if (Number(span.textContent) > 0) {
      span.textContent = Number(span.textContent) - 1;
    }
    return;
  }
  if (shiftKey) {
    span.textContent = 0;
    return;
  }
  span.textContent = Number(span.textContent) + 1;


})
