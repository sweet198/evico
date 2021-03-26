import Swiper from 'swiper';
import SwiperCore, { Navigation,  Scrollbar, Autoplay } from 'swiper/core';

function slider() {
	SwiperCore.use([Navigation,  Scrollbar, Autoplay]);

	const swiper = new Swiper('.swiper-container', {
		// Optional parameters
		// direction: 'vertical',
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},

		loop: true,
		autoHeight: true,
		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},

		breakpoints: {
			// when window width is >= 320px
			1280: {
				slidesPerView: 3,
				spaceBetween: 20
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 20
			}
		},
		// And if we need scrollbar
		scrollbar: {
			el: '.swiper-scrollbar',
			hide: true,
		},
	});
}

export default slider;
