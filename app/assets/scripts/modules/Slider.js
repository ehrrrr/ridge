class Slider {
	constructor() {
		this.slider = document.getElementById('slider');
		this.leftArrow = document.getElementById('icon__side-arrow--left');
		this.rightArrow = document.getElementById('icon__side-arrow--right');
		this.services = document.getElementsByClassName('services-section__service');
		this.arrows = document.getElementsByClassName('icon__side-arrow');
		this.window = window;

		this.state = 0;
		this.stepCount = 0;
		this.step = 197;

		this.setView();
		this.events();
	}

	events() {
		this.rightArrow.addEventListener('click', this.clickRightArrow.bind(this));
		this.leftArrow.addEventListener('click', this.clickLeftArrow.bind(this));
		this.window.addEventListener('resize', this.setView.bind(this));
	}

	setView() {
		if (this.window.innerWidth <= (this.services.length - 1) * this.step) {
			this.arrows[0].style.display = 'inline-block';
			this.arrows[1].style.display = 'inline-block';
			this.slider.style.justifyContent = 'start';
		} else {
			this.arrows[0].style.display = 'none';
			this.arrows[1].style.display = 'none';
			this.slider.style.justifyContent = 'center';
			this.slider.style.left = `0px`;
		}
	}

	clickRightArrow() {
		if (!this.rightArrow.classList.contains('icon__side-arrow--disabled')) {
			this.stepCount -= this.step;
			this.state++;
			this.moveSlider();
		}
		this.updateBtnState();
	}

	clickLeftArrow() {
		if (!this.leftArrow.classList.contains('icon__side-arrow--disabled')) {
			this.stepCount += this.step;
			this.state--;
			this.moveSlider();
		}
		this.updateBtnState();
	}

	moveSlider() {
		this.slider.style.left = `${this.stepCount}px`;
	}

	updateBtnState() {
		this.setRightArrowStatus();
		this.setLeftArrowStatus();
	}

	setRightArrowStatus() {
		if (Math.abs(this.stepCount) >= (this.services.length - 1) * this.step) {
			this.rightArrow.classList.add('icon__side-arrow--disabled');
			this.rightArrow.disabled = true;
		} else {
			this.rightArrow.classList.remove('icon__side-arrow--disabled');
			this.rightArrow.disabled = false;
		}
	}

	setLeftArrowStatus() {
		if (this.state > 0) {
			this.leftArrow.classList.remove('icon__side-arrow--disabled');
			this.leftArrow.disabled = false;
		} else {
			this.leftArrow.classList.add('icon__side-arrow--disabled');
			this.leftArrow.disabled = true;
		}
	}
}

export default Slider;
