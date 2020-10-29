let petsSlider = document.querySelectorAll('.slider__card');
let petsSliderCards = document.querySelector('.slider__cards');

let test1 = [];
let randomNumbers = [];
let iRandom;

function test() {
    for (let i = 0; i < 8; i++) {
        randomNumberCheck();
    }
    randomNumbers = [];
}

function randomNumberCheck() {
    iRandom = Math.floor(Math.random() * 8);
    if (randomNumbers.indexOf(iRandom) != -1) {
        randomNumberCheck();
    } else {
        randomNumbers.push(iRandom);
        test1.push(iRandom);
    }
}

for (let i = 0; i < 6; i++) {
    test();
}

let paginatorIndex = 0;
let paginatorIndexArrow = [];
function createSliderCard() {
    petsSlider.forEach((element) => {
        paginatorIndexArrow.push(test1[paginatorIndex]);

        element.innerHTML = `

            <img
                src=${petsData[test1[paginatorIndex]].img}
                alt=${petsData[test1[paginatorIndex]].name}
                class="slider__card-image"
            />
            <div class="slider__card-description">
                <h4 class="slider__card-title">
                    ${petsData[test1[paginatorIndex]].name}
                </h4>
                <button class="slider__card-button">
                    Learn more
                </button>
            </div>
            `;
        paginatorIndex++;
        if (paginatorIndex === 48) {
            paginatorIndex = 0;
        }
    });
}

createSliderCard();

// Popup
let popup = document.querySelector('.popup-wrapper');
let popupContainer = document.querySelector('.popup-container');
let petsPopup = document.querySelector('.pets__popup');
let popupButton = document.querySelector('.pets__popup-button');

let iK = 0;
petsSliderPopup();

function petsSliderPopup() {
    petsSlider.forEach((element, index) => {
        element.addEventListener('click', function () {
            popup.classList.add('fade-in');

            petsPopup.innerHTML = `
            <div class="pets__popup-image-container">
                <img
                    src=${petsData[test1[index + iK]].img}
                    alt=${petsData[test1[index + iK]].name}
                    class="pets__popup-image"
                />
            </div>
            <div class="pets__popup-description-container">
                <h3 class="pets__popup-title">
                    ${petsData[test1[index + iK]].name}
                </h3>
                <h4 class="pets__popup-subtitle">
                    ${petsData[test1[index + iK]].type} -
                    ${petsData[test1[index + iK]].breed}
                </h4>
                <h5 class="pets__popup-description">
                    ${petsData[test1[index + iK]].description}
                </h5>
                <ul class="pets__popup-properties">
                    <li class="pets__popup-property-item">
                        <h5 class="pets__popup-property">
                            <span class="pets__popup-property-name">Age: </span>
                            ${petsData[test1[index + iK]].age}
                        </h5>
                    </li>
                    <li class="pets__popup-property-item">
                        <h5 class="pets__popup-property">
                            <span class="pets__popup-property-name">Inoculations: </span>
                            ${petsData[test1[index + iK]].inoculations}
                        </h5>
                    </li>
                    <li class="pets__popup-property-item">
                        <h5 class="pets__popup-property">
                            <span class="pets__popup-property-name" >Diseases: </span>
                            ${petsData[test1[index + iK]].diseases}
                        </h5>
                    </li>
                    <li class="pets__popup-property-item">
                        <h5 class="pets__popup-property">
                            <span class="pets__popup-property-name">Parasites: </span>
                            ${petsData[test1[index + iK]].parasites}
                        </h5>
                    </li>
                </ul>
            </div>`;
            popup.style.display = 'flex';
            document.body.style.width = window.getComputedStyle(
                document.body
            ).width;
            document.body.style.overflow = 'hidden';
        });
    });
}

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
let checkboxMenu = document.querySelector('.hamburger-menu__check');
let mainReserve = document.querySelector('.main');
let contactsReserve = document.querySelector('.contacts');

let paginatorButtonRight = document.querySelector(
    '.slider__arrow-button_right'
);
let paginatorButtonLeft = document.querySelector('.slider__arrow-button_left');

let paginatorButtonLeftLast = document.querySelector(
    '.slider__arrow-button_left-last'
);
let paginatorButtonRightLast = document.querySelector(
    '.slider__arrow-button_right-last'
);

let paginatorNum = document.querySelector('.slider__index-button');

paginatorButtonRight.addEventListener('click', slideOutRight);
paginatorButtonLeft.addEventListener('click', slideOutLeft);

paginatorButtonRightLast.addEventListener('click', slideOutRightLast);
paginatorButtonLeftLast.addEventListener('click', slideOutLeftLast);

function slideOutRight() {
    iK += 8;
    petsSliderPopup();
    removeAnimation();

    petsSlider.forEach((element) => {
        element.classList.remove('flip-in-hor-top');
        element.classList.add('flip-out-hor-top');

        setTimeout(function () {
            createSliderCard();

            sliderIn();
        }, 500);
    });

    function sliderIn() {
        petsSlider.forEach((element) => {
            element.classList.remove('flip-out-hor-top');
            element.classList.add('flip-in-hor-top');
        });
    }

    checkDisabledBtn();
    checkPaginatorNum();
}

function slideOutLeft() {
    iK -= 8;
    petsSliderPopup();
    removeAnimation();

    petsSlider.forEach((element) => {
        element.classList.remove('flip-in-hor-top');
        element.classList.add('flip-out-hor-top');

        setTimeout(function () {
            createSliderCard();

            sliderIn();
        }, 500);
    });

    function sliderIn() {
        petsSlider.forEach((element) => {
            element.classList.remove('flip-out-hor-top');
            element.classList.add('flip-in-hor-top');
        });
    }

    checkDisabledBtn();
    checkPaginatorNum();
}

function slideOutRightLast() {
    iK = 40;
    petsSliderPopup();
    removeAnimation();

    petsSlider.forEach((element) => {
        element.classList.remove('flip-in-hor-top');
        element.classList.add('flip-out-hor-top');

        setTimeout(function () {
            createSliderCard();

            sliderIn();
        }, 500);
    });

    function sliderIn() {
        petsSlider.forEach((element) => {
            element.classList.remove('flip-out-hor-top');
            element.classList.add('flip-in-hor-top');
        });
    }

    checkDisabledBtn();
    checkPaginatorNum();
}

function slideOutLeftLast() {
    iK = 0;
    petsSliderPopup();
    removeAnimation();

    petsSlider.forEach((element) => {
        element.classList.remove('flip-in-hor-top');
        element.classList.add('flip-out-hor-top');

        setTimeout(function () {
            createSliderCard();

            sliderIn();
        }, 500);
    });

    function sliderIn() {
        petsSlider.forEach((element) => {
            element.classList.remove('flip-out-hor-top');
            element.classList.add('flip-in-hor-top');
        });
    }

    checkDisabledBtn();
    checkPaginatorNum();
}

function removeAnimation() {
    petsSlider.forEach((element) => {
        element.classList.remove('flip-out-hor-top');
        element.classList.remove('flip-in-hor-top');
    });
}

function checkDisabledBtn() {
    if (iK === 0) {
        paginatorButtonLeft.setAttribute('disabled', 'true');
        paginatorButtonLeft.classList.add('disabled');

        paginatorButtonLeftLast.setAttribute('disabled', 'true');
        paginatorButtonLeftLast.classList.add('disabled');
    } else {
        paginatorButtonLeft.removeAttribute('disabled');
        paginatorButtonLeft.classList.remove('disabled');

        paginatorButtonLeftLast.removeAttribute('disabled');
        paginatorButtonLeftLast.classList.remove('disabled');
    }

    if (iK === 40) {
        paginatorButtonRight.setAttribute('disabled', 'true');
        paginatorButtonRight.classList.add('disabled');

        paginatorButtonRightLast.setAttribute('disabled', 'true');
        paginatorButtonRightLast.classList.add('disabled');
    } else {
        paginatorButtonRight.removeAttribute('disabled');
        paginatorButtonRight.classList.remove('disabled');

        paginatorButtonRightLast.removeAttribute('disabled');
        paginatorButtonRightLast.classList.remove('disabled');
    }
}

function checkPaginatorNum() {
    let paginatorI = 7;

    switch (true) {
        case iK >= 0 && iK <= 7:
            paginatorI = '1';
            break;
        case iK >= 8 && iK <= 15:
            paginatorI = '2';
            break;
        case iK >= 16 && iK <= 23:
            paginatorI = '3';
            break;
        case iK >= 24 && iK <= 31:
            paginatorI = '4';
            break;
        case iK >= 32 && iK <= 39:
            paginatorI = '5';
            break;
        case iK >= 40 && iK <= 47:
            paginatorI = '6';
            break;
        default:
            break;
    }

    paginatorNum.innerHTML = `<span>${paginatorI}</span>`;
}

checkDisabledBtn();
checkPaginatorNum();
