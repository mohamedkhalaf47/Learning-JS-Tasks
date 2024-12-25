// Variables
let blueButton = document.getElementById("allBlue");
let pickColorButton = document.getElementById("pickColor");
let title = document.querySelectorAll(".username");

// Functions

blueButton.addEventListener("click",()=>{
  for (let i = 0; i < title.length; i++) {
    title[i].style.color = "blue";
  }
})

pickColorButton.addEventListener("click",()=>{
  let color = prompt("Choose Your Color");
  for (let i = 0; i < title.length; i++) {
    title[i].style.color = color;
  }
})

























