"use strict"
function slider (prevButton, nextButton, listElement, bulletsElements) {
    const changeSlide = (event) => {
        const ACTIVE_CLASS_NAME = 'current';
        const ACTIVE_BULLET_CLASS_NAME = 'active-bullet';

        const activeBullet = bulletsElements.querySelector(`.${ACTIVE_BULLET_CLASS_NAME}`);
        console.log(activeBullet)
        const activeElement = listElement.querySelector(`.${ACTIVE_CLASS_NAME}`);

        if (event.target === nextButton || event.target === prevButton) {

            const isPrevButton = event.target === prevButton;
            const prevOrNextElement = isPrevButton
                ? activeElement.previousElementSibling
                : activeElement.nextElementSibling;

            const nextBullet = activeBullet.nextElementSibling;
            const prevBullet = activeBullet.previousElementSibling;

            // hidden button Next and Prev
            if (activeElement.nextElementSibling === null) {
                nextButton.style.display = 'none';
            } else if (activeElement.previousElementSibling === null) {
                prevButton.style.display = 'none';
            }

            // change Slide
            if (prevOrNextElement) {
                activeElement.classList.remove(ACTIVE_CLASS_NAME);
                prevOrNextElement.classList.add(ACTIVE_CLASS_NAME);
                prevButton.style.display = 'block';
                nextButton.style.display = 'block';
            }

            // change Bullet
            if (nextBullet && !isPrevButton) {
                activeBullet.classList.remove(ACTIVE_BULLET_CLASS_NAME);
                nextBullet.classList.add(ACTIVE_BULLET_CLASS_NAME);
            } else if (prevBullet && isPrevButton) {
                activeBullet.classList.remove(ACTIVE_BULLET_CLASS_NAME);
                prevBullet.classList.add(ACTIVE_BULLET_CLASS_NAME);
            }

        }
        // use Bullet for changing Slide
        else if (event.target.classList.contains('bullet')) {
            const bulletIndex = Array.from(bulletsElements.children).indexOf(event.target);
            const clickElement = listElement.children[bulletIndex];

            activeElement.classList.remove(ACTIVE_CLASS_NAME);
            clickElement.classList.add(ACTIVE_CLASS_NAME);

            activeBullet.classList.remove(ACTIVE_BULLET_CLASS_NAME);
            event.target.classList.add(ACTIVE_BULLET_CLASS_NAME);
        }
    }
    nextButton.addEventListener('click', changeSlide)
    prevButton.addEventListener('click', changeSlide)
    bulletsElements.addEventListener('click', changeSlide)
}

slider (
    document.querySelector('.js--slider__prev'),
    document.querySelector('.js--slider__next'),
    document.querySelector('.js--slider__list'),
    document.querySelector('.js--bullets')
)