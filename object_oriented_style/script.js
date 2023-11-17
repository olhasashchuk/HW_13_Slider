"use strict"
function Slider(prevButton, nextButton, listElements, bulletsElements) {
    this.prevButtonElement = document.querySelector(prevButton);
    this.nextButtonElement = document.querySelector(nextButton);
    this.listElement = document.querySelector(listElements);
    this.bulletElement = document.querySelectorAll(bulletsElements);

    this.ACTIVE_CLASS_NAME = 'current';
    this.ACTIVE_BULLET_CLASS_NAME = 'active-bullet';


    this.changeSlide = function (event) {


        this.bulletElement = document.querySelector(bulletsElements);
        const activeElement = this.listElement.querySelector(`.${this.ACTIVE_CLASS_NAME}`);
        const activeBullet = this.bulletElement.querySelector(`.${this.ACTIVE_BULLET_CLASS_NAME}`);

        if (event.target === this.nextButtonElement || event.target === this.prevButtonElement) {

            const isPrevButton = event.target === this.prevButtonElement;

            const prevOrNextElement = isPrevButton
                ? activeElement.previousElementSibling
                : activeElement.nextElementSibling;

            const nextBullet = activeBullet.nextElementSibling;
            const prevBullet = activeBullet.previousElementSibling;

            // hidden button Next and Prev
            if (activeElement.nextElementSibling === null) {
                this.nextButtonElement.style.display = 'none';
            } else if (activeElement.previousElementSibling === null) {
                this.prevButtonElement.style.display = 'none';
            }

            // change Slide
            if (prevOrNextElement) {
                activeElement.classList.remove(this.ACTIVE_CLASS_NAME);
                prevOrNextElement.classList.add(this.ACTIVE_CLASS_NAME);
                this.nextButtonElement.style.display = 'block';
                this.prevButtonElement.style.display = 'block';
            }

            // change Bullet
            if (nextBullet && !isPrevButton) {
                activeBullet.classList.remove(this.ACTIVE_BULLET_CLASS_NAME);
                nextBullet.classList.add(this.ACTIVE_BULLET_CLASS_NAME);
            } else if (prevBullet && isPrevButton) {
                activeBullet.classList.remove(this.ACTIVE_BULLET_CLASS_NAME);
                prevBullet.classList.add(this.ACTIVE_BULLET_CLASS_NAME);
            }

        // use Bullet for changing Slide
        } else if (event.target.classList.contains('bullet')) {
            const bulletIndex = Array.from(this.bulletElement.children).indexOf(event.target);
            const clickElement = this.listElement.children[bulletIndex];

            activeElement.classList.remove(this.ACTIVE_CLASS_NAME);
            clickElement.classList.add(this.ACTIVE_CLASS_NAME);

            activeBullet.classList.remove(this.ACTIVE_BULLET_CLASS_NAME);
            event.target.classList.add(this.ACTIVE_BULLET_CLASS_NAME);
        }
    }


    this.init = function () {
        this.prevButtonElement.addEventListener('click', this.changeSlide.bind(this));
        this.nextButtonElement.addEventListener('click', this.changeSlide.bind(this));
        this.bulletElement.forEach(item => {
            item.addEventListener('click', this.changeSlide.bind(this));
        });
    };
}

    const slider = new Slider('.js--slider__prev',
                                        '.js--slider__next',
                                        '.js--slider__list',
                                        '.js--bullets');
    slider.init();

    const slider2 = new Slider('.js--slider__prev2',
                                        '.js--slider__next2',
                                        '.js--slider__list2',
                                        '.js--bullets2');
    slider2.init();


