// get the image elements
const images = document.querySelectorAll('.images img');

// loop through each image and add an event listener for when it is loaded
images.forEach(image => {
	image.addEventListener('load', () => {
		// set a random delay for the animation
		const delay = Math.random() * 5;
		// set a random duration for the animation
		const duration = Math.random() * 5 + 5;
		// set a random direction for the animation
		const direction = Math.random() < 0.5 ? -1 : 1;
		// set the animation parameters
		image.style.animationDelay = `${delay}s`;
		image.style.animationDuration = `${duration}s`;
		image.style.animationDirection = direction > 0 ? 'normal' : 'reverse';
	});
});