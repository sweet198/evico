function logoAnimation (selector, animationClass, animationTime) {
	const logo = document.querySelector(selector);

	logo.classList.add('animate__animated');

	setInterval(() => {
		logo.classList.add(animationClass);
		setTimeout(() => logo.classList.remove(animationClass), 2000);
	}, animationTime);
}

export default logoAnimation;