// DOM elements
const date = document.querySelector('#date');

const setHour = document.querySelector('#hour');
const setMin = document.querySelector('#min');
const setSec = document.querySelector('#sec');
const setDot = document.querySelectorAll('.dot');

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
let bgImageVersOne = [
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
    ],
];

let bgImageVersTwo = [
    [
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

    let tensSec = `${addZero(sec)}`.split('')[0];
    let unitsSec = `${addZero(sec)}`.split('')[1];

    setHour.innerHTML = `${addZero(hour)}`;
    setMin.innerHTML = `${addZero(min)}`;
    setSec.innerHTML = `${addZero(sec)}`;
    setDot[0].innerHTML = `:`;
    setDot[1].innerHTML = `:`;

    if (min == 0 && sec == 0) {
        setBgGreet();
        getWeather();
        getQuote();
    }

    setTimeout(showTime, 1000);
}

// Add Zeros
function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Set Background Img Catalog
let bgImage;
function setBgCatalog() {
    if (
        localStorage.getItem('bgImageVers') === null ||
        localStorage.getItem('bgImageVers') === '2'
    ) {
        localStorage.setItem('bgImageVers', 1);
        bgImage = bgImageVersOne;
    } else {
        localStorage.setItem('bgImageVers', 2);
        bgImage = bgImageVersTwo;
    }
}

// Set Background and Greeting
function setBgGreet() {
    let today = new Date();
    let hour = today.getHours();
    // container.classList.add('body-animation');

    if (iI > 9) {
        iI = 0;
    }
    if (dI > 9) {
        dI = 0;
    }
    if (eI > 9) {
        eI = 0;
    }
    if (nI > 9) {
        nI = 0;
    }

    switch (true) {
        case hour >= 6 && hour <= 11:
            container.style.backgroundImage = bgImage[0][iI];
            localStorage.setItem('bgImageIndex', 0);
            localStorage.setItem('bgImageSubIndex', iI);
            greeting.textContent = 'Good Morning,';
            iI++;
            break;

        case hour >= 12 && hour <= 17:
            container.style.backgroundImage = bgImage[1][dI];
            localStorage.setItem('bgImageIndex', 1);
            localStorage.setItem('bgImageSubIndex', dI);
            greeting.textContent = 'Good Afternoon,';
            dI++;
            break;

        case hour >= 18 && hour <= 23:
            container.style.backgroundImage = bgImage[2][eI];
            localStorage.setItem('bgImageIndex', 2);
            localStorage.setItem('bgImageSubIndex', eI);
            greeting.textContent = 'Good Evening,';
            eI++;
            break;

        case hour >= 0 && hour <= 5:
            container.style.backgroundImage = bgImage[3][nI];
            localStorage.setItem('bgImageIndex', 3);
            localStorage.setItem('bgImageSubIndex', nI);
            greeting.textContent = 'Good Night,';
            nI++;
            break;

        default:
            break;
    }
}

// Change Image on Click
let j = +localStorage.getItem('bgImageIndex');
let i = +localStorage.getItem('bgImageSubIndex') + 1;

function bgImageChange() {
    document.body.style.backgroundImage = bgImage[j][i];
    setTimeout(function () {
        container.style.backgroundImage = bgImage[j][i];
    }, 500);

    btn.disabled = true;
    setTimeout(function () {
        btn.disabled = false;
    }, 1000);

    setTimeout(function () {
        if (i === 9 && j === 3) {
            j = 0;
            i = 0;
        } else if (i === 9 && j !== 3) {
            j++;
            i = 0;
        } else {
            i++;
        }
    }, 1000);
}

// Input Clear Name
function inputClearName(e) {
    // name.classList.toggle('out-animation');
    // setTimeout(function () {
    name.textContent = '';
    name.style.minWidth = '20px';
    // }, 1200);

    // setTimeout(function () {
    //     name.classList.toggle('out-animation');
    // }, 1000);
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
    focus.style.minWidth = '20px';
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

// Quote
const blockquote = document.querySelector('blockquote');
const figcaption = document.querySelector('figcaption');
const btnQ = document.querySelector('.btnQ');
async function getQuote() {
    // префикс https://cors-anywhere.herokuapp.com используем для доступа к данным с других сайтов если браузер возвращает ошибку Cross-Origin Request Blocked

    const url = `https://type.fit/api/quotes`;
    const res = await fetch(url);
    const data = await res.json();
    let quoteCounter = Math.round(Math.random() * 100);

    blockquote.textContent = data[quoteCounter].text;
    figcaption.textContent = data[quoteCounter].author;
}

// Weather
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const humidity = document.querySelector('.humidity');
const wind = document.querySelector('.wind');

const city = document.querySelector('.city');

function inputClearCity(e) {
    city.style.minWidth = '20px';
    city.textContent = '';
}
async function getWeather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.textContent}&lang=en&appid=4bea8fab89951d24ef154f828ca40dfa&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    if (data.cod === '404') {
        city.textContent = 'Sorry, wrong city';
        setTimeout(function () {
            localStorage.removeItem('city');
            getCity();
        }, 2000);
    }

    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${data.main.temp.toFixed(0)}°C`;
    weatherDescription.textContent = data.weather[0].description;
    humidity.textContent = `humidity ${data.main.humidity}%`;
    wind.textContent = `wind ${data.wind.speed}m/s`;
    console.log(temperature.textContent);
}

function setCity(e) {
    if (e.type === 'keypress') {
        // Make sure enter is pressed
        if (
            (e.which == 13 || e.keyCode == 13) &&
            e.target.innerText.trim() === ''
        ) {
            city.textContent = localStorage.getItem('city');
            city.blur();
        } else if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('city', e.target.innerText);
            city.blur();
            getWeather();
        }
    } else if (e.type === 'blur') {
        if (e.target.innerText.trim() === '') {
            city.textContent = localStorage.getItem('city');
        } else {
            localStorage.setItem('city', e.target.innerText);
            getWeather();
        }
    }
}

function getCity() {
    if (localStorage.getItem('city') === null) {
        localStorage.setItem('city', 'MOSCOW');
        city.textContent = localStorage.getItem('city');
    } else {
        city.textContent = localStorage.getItem('city');
        getWeather();
    }
}

name.addEventListener('click', inputClearName);
// name.addEventListener('focus', inputClearName);

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);

focus.addEventListener('click', inputClearFocus);
// focus.addEventListener('focus', inputClearFocus);

focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

btn.addEventListener('click', bgImageChange);

document.addEventListener('DOMContentLoaded', getWeather);
city.addEventListener('click', inputClearCity);
// city.addEventListener('focus', inputClearCity);

city.addEventListener('keypress', setCity);
city.addEventListener('blur', setCity);

document.addEventListener('DOMContentLoaded', getQuote);
btnQ.addEventListener('click', getQuote);

// Run
showDate();
showTime();
setBgCatalog();
setBgGreet();
getName();
getFocus();
getCity();
