//popup_close et popup_content sont les éléments à chercher dans le HTML

let popup = document.querySelector(".popup");
let popupClose = document.querySelector(".popup_close");
let popupContent = document.querySelector(".popup_content");
let button = document.querySelector(".btn");
let text = document.querySelector(".popup_content p");

//Lorsqu'on clique pour fermer la pop up
popupClose.onclick = function () {
  popup.style.display = "none";
};

//Ce qui se passe lorsqu'on clique sur le bouton : button.addEventListener("click", () => changeColor());let changeColor = () => { text.style.color = "green";};

button.onclick = function () {
  text.style.color = "green";
};
