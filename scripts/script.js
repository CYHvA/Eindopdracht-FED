// JavaScript Document
//var btnMenu = document.querySelector("nav i");
//var menuForm = document.querySelector("nav ul");
var btnHam = document.querySelector(".hamburger");
var mobMenu = document.querySelector(".mobile");
var noScroll = document.querySelector("body");
var overLay = document.querySelector(".overlay");

//btnMenu.addEventListener("click", openMenu);
//btnMenu.addEventListener("click", changeBtn);
btnHam.addEventListener("click", hamOpen);

//function openMenu() {
//	menuForm.classList.toggle("toonMenu");
//}

//function changeBtn() {
//	btnMenu.classList.toggle("toonMenu");
//}

function hamOpen() {
	btnHam.classList.toggle("active");
	mobMenu.classList.toggle("open");
	noScroll.classList.toggle("scroll");
	overLay.classList.toggle("on");
}
