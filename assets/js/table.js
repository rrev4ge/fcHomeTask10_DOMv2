"use strict";

window.addEventListener("DOMContentLoaded", createBookmarksTable, {once: true});

function createBookmarksTable() {
  const root = document.querySelector("DL");
  const bookmarksTable = document.createElement("table");
  root.append(bookmarksTable);
  const contentArray = [...document.links];
  contentArray.forEach((link) => {
    const {href, textContent} = link;
    const tr = bookmarksTable.insertRow();
    const tdName = tr.insertCell();
    const tdValue = tr.insertCell();
    bookmarksTable.append(tr);
    const tdValueLink = document.createElement("a");
    tdName.textContent = textContent;
    tdValueLink.href = href;
    tdValueLink.textContent = href;
    tdValue.append(tdValueLink);
  });
  document.querySelector("DT").remove();
  document.querySelector("H1").textContent = "Bookmarks Table";
}


