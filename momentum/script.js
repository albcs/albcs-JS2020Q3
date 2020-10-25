// DOM elements
const date = document.querySelector('#date');

const setHour = document.querySelector('#hour');
const setMin = document.querySelector('#min');
const setSec = document.querySelector('#sec');

const greeting = document.querySelector('#greeting');
const name = document.querySelector('#name');
const focus = document.querySelector('#focus');

const btn = document.querySelector('.btn');
const container = document.querySelector('.overlay');

// Dates
const weekDay = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
];
const month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

// Background Images
let bgImages = [
    [
        'url(./assets/images/morning/01.jpg)',
        'url(./assets/images/morning/02.jpg)',
        'url(./assets/images/morning/03.jpg)',
        'url(./assets/images/morning/04.jpg)',
        'url(./assets/images/morning/05.jpg)',
        'url(./assets/images/morning/06.jpg)',
        'url(./assets/images/morning/07.jpg)',
        'url(./assets/images/morning/08.jpg)',
        'url(./assets/images/morning/09.jpg)',
        'url(./assets/images/morning/10.jpg)',
        'url(./assets/images/morning/11.jpg)',
        'url(./assets/images/morning/12.jpg)',
        'url(./assets/images/morning/13.jpg)',
        'url(./assets/images/morning/14.jpg)',
        'url(./assets/images/morning/15.jpg)',
        'url(./assets/images/morning/16.jpg)',
        'url(./assets/images/morning/17.jpg)',
        'url(./assets/images/morning/18.jpg)',
        'url(./assets/images/morning/19.jpg)',
        'url(./assets/images/morning/20.jpg)',
    ],
    [
        'url(./assets/images/day/01.jpg)',
        'url(./assets/images/day/02.jpg)',
        'url(./assets/images/day/03.jpg)',
        'url(./assets/images/day/04.jpg)',
        'url(./assets/images/day/05.jpg)',
        'url(./assets/images/day/06.jpg)',
        'url(./assets/images/day/07.jpg)',
        'url(./assets/images/day/08.jpg)',
        'url(./assets/images/day/09.jpg)',
        'url(./assets/images/day/10.jpg)',
        'url(./assets/images/day/11.jpg)',
        'url(./assets/images/day/12.jpg)',
        'url(./assets/images/day/13.jpg)',
        'url(./assets/images/day/14.jpg)',
        'url(./assets/images/day/15.jpg)',
        'url(./assets/images/day/16.jpg)',
        'url(./assets/images/day/17.jpg)',
        'url(./assets/images/day/18.jpg)',
        'url(./assets/images/day/19.jpg)',
        'url(./assets/images/day/20.jpg)',
    ],
    [
        'url(./assets/images/evening/01.jpg)',
        'url(./assets/images/evening/02.jpg)',
        'url(./assets/images/evening/03.jpg)',
        'url(./assets/images/evening/04.jpg)',
        'url(./assets/images/evening/05.jpg)',
        'url(./assets/images/evening/06.jpg)',
        'url(./assets/images/evening/07.jpg)',
        'url(./assets/images/evening/08.jpg)',
        'url(./assets/images/evening/09.jpg)',
        'url(./assets/images/evening/10.jpg)',
        'url(./assets/images/evening/11.jpg)',
        'url(./assets/images/evening/12.jpg)',
        'url(./assets/images/evening/13.jpg)',
        'url(./assets/images/evening/14.jpg)',
        'url(./assets/images/evening/15.jpg)',
        'url(./assets/images/evening/16.jpg)',
        'url(./assets/images/evening/17.jpg)',
        'url(./assets/images/evening/18.jpg)',
        'url(./assets/images/evening/19.jpg)',
        'url(./assets/images/evening/20.jpg)',
    ],
    [
        'url(./assets/images/night/01.jpg)',
        'url(./assets/images/night/02.jpg)',
        'url(./assets/images/night/03.jpg)',
        'url(./assets/images/night/04.jpg)',
        'url(./assets/images/night/05.jpg)',
        'url(./assets/images/night/06.jpg)',
        'url(./assets/images/night/07.jpg)',
        'url(./assets/images/night/08.jpg)',
        'url(./assets/images/night/09.jpg)',
        'url(./assets/images/night/10.jpg)',
        'url(./assets/images/night/11.jpg)',
        'url(./assets/images/night/12.jpg)',
        'url(./assets/images/night/13.jpg)',
        'url(./assets/images/night/14.jpg)',
        'url(./assets/images/night/15.jpg)',
        'url(./assets/images/night/16.jpg)',
        'url(./assets/images/night/17.jpg)',
        'url(./assets/images/night/18.jpg)',
        'url(./assets/images/night/19.jpg)',
        'url(./assets/images/night/20.jpg)',
    ],
];

// Images Index
let iI = 0;
let dI = 0;
let eI = 0;
let nI = 0;

//Show Date
function showDate() {
    let today = new Date();
    let day = today.getDate();
    let weekDayIndex = today.getDay();
    let monthIndex = today.getMonth();

    // Output Date
    date.innerHTML = `${weekDay[weekDayIndex]}, ${month[monthIndex]}, ${day}`;
}

// Show Time
function showTime() {
    let today = new Date();
    let hour = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();

    // Output Time
    setHour.innerHTML = `${addZero(hour)}`;
    setMin.innerHTML = `${addZero(min)}`;
    setSec.innerHTML = `${addZero(sec)}`;

    if (min == 0 && sec == 0) {
        setBgGreet();
    }
    setTimeout(showTime, 1000);
}

// Add Zeros
function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Set Background and Greeting
function setBgGreet() {
    console.log('Hi');

    let today = new Date();
    let hour = today.getHours();

    if (localStorage.getItem('bgImage') != null) {
        container.style.backgroundImage = localStorage.getItem('bgImage');
    } else if (localStorage.getItem('bgImage') === null) {
        if (iI > 19) {
            iI = 0;
        }
        if (dI > 19) {
            iI = 0;
        }
        if (eI > 19) {
            iI = 0;
        }
        if (iI > 19) {
            nI = 0;
        }

        switch (true) {
            case hour >= 6 && hour <= 11:
                container.style.backgroundImage = bgImages[0][iI];
                greeting.textContent = 'Good Morning';
                iI++;
                break;
            case hour >= 12 && hour <= 17:
                container.style.backgroundImage = bgImages[1][dI];
                greeting.textContent = 'Good Afternoon';
                di++;
                break;
            case hour >= 18 && hour <= 23:
                container.style.backgroundImage = bgImages[2][eI];
                greeting.textContent = 'Good Evening';
                eI++;
                break;
            case hour >= 0 && hour <= 5:
                container.style.backgroundImage = bgImages[3][nI];
                greeting.textContent = 'Good Night';
                nI++;
                break;
            default:
                break;
        }
    }
}

// Change Image on Click
let j = 0;
let i = 0;
function bgImageChange() {
    document.body.style.backgroundImage = bgImages[j][i];
    localStorage.setItem('bgImage', bgImages[j][i]);

    setTimeout(function () {
        container.style.backgroundImage = bgImages[j][i];
    }, 500);

    btn.disabled = true;
    setTimeout(function () {
        btn.disabled = false;
    }, 1000);

    setTimeout(function () {
        if (i === 19 && j === 3) {
            j = 0;
            i = 0;
        } else if (i === 19 && j !== 3) {
            j++;
            i = 0;
        } else {
            i++;
        }
    }, 1000);
}

// Input Clear Name
function inputClearName(e) {
    name.textContent = '';
}

// Set Name
function setName(e) {
    if (e.type === 'keypress') {
        // Make sure enter is pressed
        if (
            (e.which == 13 || e.keyCode == 13) &&
            e.target.innerText.trim() === ''
        ) {
            name.textContent = localStorage.getItem('name');
            name.blur();
        } else if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('name', e.target.innerText);
            name.blur();
        }
    } else if (e.type === 'blur') {
        if (e.target.innerText.trim() === '') {
            name.textContent = localStorage.getItem('name');
        } else {
            localStorage.setItem('name', e.target.innerText);
        }
    }
}

// Get Name
function getName() {
    if (localStorage.getItem('name') === null) {
        localStorage.setItem('name', '[Enter Name]');
        name.textContent = localStorage.getItem('name');
    } else {
        name.textContent = localStorage.getItem('name');
    }
}

// Input Clear Focus
function inputClearFocus(e) {
    focus.textContent = '';
}

// Set Focus
function setFocus(e) {
    if (e.type === 'keypress') {
        // Make sure enter is pressed
        if (
            (e.which == 13 || e.keyCode == 13) &&
            e.target.innerText.trim() === ''
        ) {
            focus.textContent = localStorage.getItem('focus');
            focus.blur();
        } else if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();
        }
    } else if (e.type === 'blur') {
        if (e.target.innerText.trim() === '') {
            focus.textContent = localStorage.getItem('focus');
        } else {
            localStorage.setItem('focus', e.target.innerText);
            s;
        }
    }
}

// Get Focus
function getFocus() {
    if (localStorage.getItem('focus') === null) {
        localStorage.setItem('focus', '[Enter Focus]');
        focus.textContent = localStorage.getItem('focus');
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}

name.addEventListener('click', inputClearName);
name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);

focus.addEventListener('click', inputClearFocus);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

btn.addEventListener('click', bgImageChange);

// Run
showDate();
showTime();
setBgGreet();
getName();
getFocus();
