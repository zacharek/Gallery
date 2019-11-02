/*
 <div class="fullScreen">
   <img src="./images/wrong.png">
   <button class="close">Close</button>
 </div>
 */

let list = document.querySelectorAll("li");
let showBody = document.querySelector("body");
let newButton = document.createElement("button");
let newDiv = document.createElement("div");
let newImg = document.createElement("img");

document.addEventListener("DOMContentLoaded", function () {
    list.forEach(function (element) {
        element.addEventListener("click", function () {
            newButton.classList.add("close");
            newButton.innerText="Close";
            newImg.setAttribute("src", this.firstElementChild.getAttribute("src"));
            newDiv.appendChild(newImg);
            newDiv.appendChild(newButton);
            newDiv.classList.add("fullScreen");
            showBody.appendChild(newDiv);
        })
    })
    newButton.addEventListener("click", function () {
        showBody.lastElementChild.parentElement.removeChild(newDiv);
    })
})