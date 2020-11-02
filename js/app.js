

window.onscroll = () => {
	// console.log(window.scrollY);

	let scroll = window.scrollY;

	// Seleccione <div class="header-scroll">
	const headerScroll = document.querySelector('.header-scroll');

	if (scroll > 300) {
		headerScroll.classList.add('activo');
	}else{
		headerScroll.classList.remove('activo');
	}
}