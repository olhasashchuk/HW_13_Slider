"use strict"
const listElement = document.querySelector('.js--slider__list');
const prevButton = document.querySelector('.js--slider__prev');
const nextButton = document.querySelector('.js--slider__next');
const bulletsElements = document.querySelector('.js--bullets');
function changeNextElement() {
    const activeElement = listElement.querySelector('.current');
    const nextElement = activeElement.nextElementSibling;
    const activeBullet = bulletsElements.querySelector('.active-bullet');
    const nextBullet = activeBullet.nextElementSibling;

    if (nextElement===null) {
        nextButton.style.display = 'none';
    } else if (activeElement) {
        prevButton.style.display = 'block';
    }

    if (nextElement) {
        activeElement.classList.remove('current');
        nextElement.classList.add('current');
    }

    if (nextBullet) {
        activeBullet.classList.remove('active-bullet');
        nextBullet.classList.add('active-bullet');
    }
}

function changePrevElement() {
    const activeElement = listElement.querySelector('.current');
    const prevElement = activeElement.previousElementSibling;
    const activeBullet = bulletsElements.querySelector('.active-bullet');
    const prevBullet = activeBullet.previousElementSibling;

    if (prevElement === null) {
        prevButton.style.display = 'none';
    } else if (activeElement) {
        nextButton.style.display = 'block';
    }

    if (prevElement) {
        activeElement.classList.remove('current');
        prevElement.classList.add('current');
    }

    if (prevBullet) {
        activeBullet.classList.remove('active-bullet');
        prevBullet.classList.add('active-bullet');
    }
}

nextButton.addEventListener ('click', changeNextElement)
prevButton.addEventListener ('click', changePrevElement)

bulletsElements.addEventListener('click', function (event) {
    const activeBullet = bulletsElements.querySelector('.active-bullet');
    const activeElement = listElement.querySelector('.current');

    if (event.target.classList.contains('bullet')) {
        const bulletIndex = Array.from(bulletsElements.children).indexOf(event.target);
        const clickElement = listElement.children[bulletIndex];

        activeElement.classList.remove('current');
        clickElement.classList.add('current');

        activeBullet.classList.remove('active-bullet');
        event.target.classList.add('active-bullet');
    }
})




