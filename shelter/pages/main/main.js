let petsSliderCards = document.querySelector('.slider__cards');
let petsSlider = document.querySelectorAll('.slider__card');
let sliderLeftButton = document.querySelector('.slider__arrow-button_left');
let sliderRightButton = document.querySelector('.slider__arrow-button_right');

sliderRightButton.addEventListener('click', slideOutToLeft);
sliderLeftButton.addEventListener('click', slideOutToRight);

let iRandom;
let iRandomNew = [];
let iRandomUsed = [0, 1, 2];

petsSliderCards.style.height = '435px';
// petsSliderCards.style.overflow = 'hidden';

function createSliderCard() {
    let iRandomUsedCounter = 0;
    petsSlider.forEach((element) => {
        element.innerHTML = `
            <img
                src=${petsData[iRandomUsed[iRandomUsedCounter]].img}
                alt=${petsData[iRandomUsed[iRandomUsedCounter]].name}
                class="slider__card-image"
            />
            <div class="slider__card-description">
                <h4 class="slider__card-title">
                    ${petsData[iRandomUsed[iRandomUsedCounter]].name}
                </h4>
                <button class="slider__card-button">
                    Learn more
                </button>
            </div>
            `;

        iRandomUsedCounter++;
        iRandomCreate();
    });
    iRandomUsed = iRandomNew;
    iRandomNew = [];
}

function iRandomCreate() {
    iRandom = Math.floor(Math.random() * 8);
    if (
        iRandomUsed[0] === iRandom ||
        iRandomUsed[1] === iRandom ||
        iRandomUsed[2] === iRandom ||
        iRandomNew[0] === iRandom ||
        iRandomNew[1] === iRandom ||
        iRandomNew[2] === iRandom
    ) {
        iRandomCreate();
    } else {
        iRandomNew.push(iRandom);
    }
}

function removeAnimation() {
    petsSlider.forEach((element) => {
        element.classList.remove('slide-out-right');
        element.classList.remove('slide-out-left');
        element.classList.remove('slide-in-right');
        element.classList.remove('slide-in-left');
    });
}

function slideOutToLeft() {
    removeAnimation();

    let iOut = 0;
    function sliderOut() {
        petsSlider[iOut].classList.add('slide-out-left');
        iOut++;
        if (iOut < petsSlider.length) {
            setTimeout(function () {
                sliderOut();
            }, 200);
        } else {
            iOut = 0;
            setTimeout(function () {
                createSliderCard();
                sliderIn();
            }, 500);
        }
    }

    function sliderIn() {
        petsSlider[iOut].classList.remove('slide-out-left');

        petsSlider[iOut].classList.add('slide-in-right');
        iOut++;

        if (iOut < petsSlider.length) {
            setTimeout(function () {
                sliderIn();
            }, 200);
        }
    }

    sliderOut();
}

function slideOutToRight() {
    removeAnimation();

    let iOut = 2;
    function sliderOut() {
        petsSlider[iOut].classList.add('slide-out-right');
        iOut--;
        if (iOut > -1) {
            setTimeout(function () {
                sliderOut();
            }, 200);
        } else {
            iOut = 2;
            setTimeout(function () {
                createSliderCard();
                sliderIn();
            }, 500);
        }
    }

    function sliderIn() {
        petsSlider[iOut].classList.remove('slide-out-right');

        petsSlider[iOut].classList.add('slide-in-left');
        iOut--;

        if (iOut > -1) {
            setTimeout(function () {
                sliderIn();
            }, 200);
        }
    }

    sliderOut();
}

createSliderCard();
