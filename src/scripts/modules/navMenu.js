function navMenu() {
	const menu = document.querySelector('.site-navigation');
	const toggle = document.querySelector('.nav-button');

	menu.classList.add('animate__animated');

	toggle.addEventListener('click', () => {
		if (menu.style.display === 'none') {
			menu.style.display = 'flex';
			menu.classList.add('animate__fadeInDownBig');
			menu.classList.remove('animate__fadeOutDown');
			toggle.classList.add('change');
		} else {
			menu.classList.remove('animate__fadeInDownBig');
			menu.classList.add('animate__fadeOutDown');
			toggle.classList.remove('change');
			setTimeout(() => menu.style.display = 'none', 1000);
		}
	})
}

export default navMenu;

