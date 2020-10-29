let petsSliderCards = document.querySelector('.slider__cards');
let petsSlider = document.querySelectorAll('.slider__card');
let sliderLeftButton = document.querySelector('.slider__arrow-button_left');
let sliderRightButton = document.querySelector('.slider__arrow-button_right');

sliderRightButton.addEventListener('click', slideOutToLeft);
sliderLeftButton.addEventListener('click', slideOutToRight);

let iRandom;
let iRandomNew = [];
let iPopupData = [];
let iRandomUsed = [0, 1, 2];

petsSliderCards.style.height = '43.5rem';

function createSliderCard() {
    petsSlider.forEach((element, index) => {
        element.innerHTML = `
            <img
                src=${petsData[iRandomUsed[index]].img}
                alt=${petsData[iRandomUsed[index]].name}
                class="slider__card-image"
            />
            <div class="slider__card-description">
                <h4 class="slider__card-title">
                    ${petsData[iRandomUsed[index]].name}
                </h4>
                <button class="slider__card-button">
                    Learn more
                </button>
            </div>
            `;

        iRandomCreate();
    });
    iPopupData = iRandomUsed;
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

// Popup

let popup = document.querySelector('.popup-wrapper');
let popupContainer = document.querySelector('.popup-container');
let petsPopup = document.querySelector('.pets__popup');
let popupButton = document.querySelector('.pets__popup-button');

petsSlider.forEach((element, index) => {
    element.addEventListener('click', function () {
        popup.classList.add('fade-in');

        // setTimeout(function () {
        petsPopup.innerHTML = `
            <div class="pets__popup-image-container">
                <img
                    src=${petsData[iPopupData[index]].img}
                    alt=${petsData[iPopupData[index]].name}
                    class="pets__popup-image"
                />
            </div>
            <div class="pets__popup-description-container">
                <h3 class="pets__popup-title">
                    ${petsData[iPopupData[index]].name}
                </h3>
                <h4 class="pets__popup-subtitle">
                    ${petsData[iPopupData[index]].type} - 
                    ${petsData[iPopupData[index]].breed}
                </h4>
                <h5 class="pets__popup-description">
                    ${petsData[iPopupData[index]].description}
                </h5>
                <ul class="pets__popup-properties">
                    <li class="pets__popup-property-item">
                        <h5 class="pets__popup-property">
                            <span class="pets__popup-property-name">Age: </span>
                            ${petsData[iPopupData[index]].age}
                        </h5>
                    </li>
                    <li class="pets__popup-property-item">
                        <h5 class="pets__popup-property">
                            <span class="pets__popup-property-name">Inoculations: </span>
                            ${petsData[iPopupData[index]].inoculations}
                        </h5>
                    </li>
                    <li class="pets__popup-property-item">
                        <h5 class="pets__popup-property">
                            <span class="pets__popup-property-name" >Diseases: </span>
                            ${petsData[iPopupData[index]].diseases}
                        </h5>
                    </li>
                    <li class="pets__popup-property-item">
                        <h5 class="pets__popup-property">
                            <span class="pets__popup-property-name">Parasites: </span>
                            ${
                                petsData[iPopupData[index]].parasites
                            }                            
                        </h5>
                    </li>
                </ul>
            </div>`;

        popup.style.display = 'flex';
        document.body.style.width = window.getComputedStyle(
            document.body
        ).width;
        document.body.style.overflow = 'hidden';
        // }, 500);
    });
});

popupButton.addEventListener('click', function () {
    popup.classList.remove('fade-in');
    popup.classList.add('fade-out');
    setTimeout(() => {
        popup.style.display = 'none';
        document.body.style.overflow = 'auto';
        document.body.style.width = 'auto';
        popup.classList.remove('fade-out');
        popup.classList.add('fade-in');
    }, 1000);
});

popup.addEventListener('click', function (e) {
    if (
        e.target.classList.contains('popup-container') ||
        e.target.classList.contains('popup-wrapper')
    ) {
        popup.classList.remove('fade-in');
        popup.classList.add('fade-out');

        setTimeout(() => {
            popup.style.display = 'none';
            document.body.style.overflow = 'auto';
            document.body.style.width = 'auto';
            popup.classList.remove('fade-out');
            popup.classList.add('fade-in');
        }, 1000);
    }
});

// Hamburger menu - scroll block
// let checkboxMenu = document.querySelector('.hamburger-menu__check');
// checkboxMenu.addEventListener('change', overflowActivation);
// function overflowActivation() {
//     document.body.style.width = window.getComputedStyle(document.body).width;
//     if (checkboxMenu.checked) {
//         document.body.style.overflow = 'hidden';
//     } else if (!checkboxMenu.checked) {
//         document.body.style.overflow = 'auto';
//         document.body.style.width = 'auto';
//     }
// }
