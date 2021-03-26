import slider from './modules/slider';
import modal from './modules/modal';
import logoAnimation from './modules/logoAnimation';
import navMenu from './modules/navMenu';

window.addEventListener('DOMContentLoaded', () => {
	slider();
	modal();
	logoAnimation('.main-header-logo span', 'animate__flash', 5000);
	logoAnimation('.main-footer-logo span', 'animate__flash', 5000);
	navMenu();
});






