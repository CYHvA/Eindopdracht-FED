// JavaScript Document
var btnMenu = document.querySelector("nav i");
var menuForm = document.querySelector("nav ul");

console.log(btnMenu);
console.log(menuForm);

btnMenu.addEventListener("click", openMenu);
btnMenu.addEventListener("click", changeBtn);

function openMenu() {
	menuForm.classList.toggle("toonMenu");
}

function changeBtn() {
	btnMenu.classList.toggle("toonMenu");
}