function modal() {
	const links = document.querySelectorAll('.feedback-link');

	const modal = document.querySelector('.modal-feedback');
	const overlay = document.querySelector('.modal-overlay');
	const close = modal.querySelector('.modal-close');
	const btn = modal.querySelector('.feedback-form .button')

	modal.classList.add('animate__animated');
	overlay.classList.add('animate__animated');

	const openModal = () => {
		modal.style.display = 'block';
		overlay.style.display = 'block';
		modal.classList.add('animate__fadeInTopRight');
		overlay.classList.add('animate__fadeIn');
		modal.classList.remove('animate__fadeOutBottomLeft');
		overlay.classList.remove('animate__fadeOut');
	};

	const closeModal = () => {
		modal.classList.remove('animate__fadeInTopRight');
		overlay.classList.remove('animate__fadeIn');
		modal.classList.add('animate__fadeOutBottomLeft');
		overlay.classList.add('animate__fadeOut');
		setTimeout(() => {
			modal.style.display = 'none';
			overlay.style.display = 'none';
		}, 1000)
	};

	links.forEach(link => {
		link.addEventListener('click', evt => {
			evt.preventDefault();
			openModal();
		});
	});

	close.addEventListener('click', evt => {
		evt.preventDefault();
		closeModal();
	});

	document.addEventListener('keydown', evt => {
		if (evt.code === 'Escape' && modal.classList.contains('modal-show')) {
			closeModal();
		}
	});

	overlay.addEventListener('click', evt => {
		if (evt.target !== modal) {
			closeModal();
		}
	});

	btn.addEventListener('click', () => {
		closeModal();
	})
}

export default modal;