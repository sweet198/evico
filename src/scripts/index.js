import Swiper from 'swiper';
import SwiperCore, { Navigation,  Scrollbar } from 'swiper/core';
SwiperCore.use([Navigation,  Scrollbar]);

const swiper = new Swiper('.swiper-container', {
	// Optional parameters
	// direction: 'vertical',
	loop: true,
	autoHeight: true,
	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	// And if we need scrollbar
	scrollbar: {
		el: '.swiper-scrollbar',
		hide: true,
	},
});


var link = document.querySelector(".feedback-link");
var link2 = document.querySelector(".feedback-link-2");

var popup = document.querySelector(".modal-feedback");
var overlay = document.querySelector(".modal-overlay");
var close = popup.querySelector(".modal-close");

// let viewport = document.querySelector("#viewport");
// console.dir(viewport.content);
// const screenWidth = window.screen.width;
// console.dir(screenWidth);
//
// if(screenWidth <= 576) {
// 	viewport.content = 'width=device-width, initial-scale=1.0';
// }

link.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.add("modal-show");
	overlay.classList.add("modal-show");
});

link2.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.add("modal-show");
	overlay.classList.add("modal-show");
});

close.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.remove("modal-show");
	overlay.classList.remove("modal-show");
});

// var slides = document.querySelectorAll('#slides .photo-slide');
// var currentSlide = 0;
// var slideInterval = setInterval(nextSlide,2300);
//
// function nextSlide() {
// 	slides[currentSlide].className = 'photo-slide';
// 	currentSlide = (currentSlide+1)%slides.length;
// 	slides[currentSlide].className = 'photo-slide showing';
// };
