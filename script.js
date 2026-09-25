const naavDialog = document.getElementById('nav-dialouge');
function handleMenu() {
	naavDialog.classList.toggle('hidden');
}

function setupIntersectionObserver(element, isLTR, speed) {
	function scrollHandler() {
		const top = element.getBoundingClientRect().top;
		const direction = isLTR ? 1 : -1;
		const translateX = (window.innerHeight - top) * speed * direction;
		element.style.transform = `translateX(${translateX}px)`;
	}

	const intersectionCallback = (entries) => {
		if (entries[0].isIntersecting) {
			scrollHandler();
			document.addEventListener('scroll', scrollHandler);
		} else {
			document.removeEventListener('scroll', scrollHandler);
		}
	};

	const intersectionObserver = new IntersectionObserver(intersectionCallback, {
		threshold: 0
	});
	intersectionObserver.observe(element);
}

const line1 = document.getElementById('line1');
const line2 = document.getElementById('line2');
const line3 = document.getElementById('line3');

setupIntersectionObserver(line1, true, 0.15);
setupIntersectionObserver(line2, false, 0.15);
setupIntersectionObserver(line3, true, 0.15);