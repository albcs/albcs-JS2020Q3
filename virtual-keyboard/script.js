const Keyboard = {
    elements: {
        main: null,
        keysContainer: null,
        keys: [],
    },

    eventHandlers: {
        oninput: null,
        onclose: null,
    },

    properties: {
        value: '',
        capsLock: false,
        lang: null,
        shift: false,
    },

    keyLayout: [],

    _createKeyboardBase() {
        let keyLayoutEn = [
            '`',
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            '0',
            '-',
            '=',
            'backspace',
            'q',
            'w',
            'e',
            'r',
            't',
            'y',
            'u',
            'i',
            'o',
            'p',
            '[',
            ']',
            '\\',
            'caps',
            'a',
            's',
            'd',
            'f',
            'g',
            'h',
            'j',
            'k',
            'l',
            ';',
            "'",
            'enter',
            'en/ru',
            'z',
            'x',
            'c',
            'v',
            'b',
            'n',
            'm',
            ',',
            '.',
            '/',
            'shift',
            'space',
            'done',
        ];

        let keyLayoutRu = [
            'ё',
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            '0',
            '-',
            '=',
            'backspace',
            'й',
            'ц',
            'у',
            'к',
            'е',
            'н',
            'г',
            'ш',
            'щ',
            'з',
            'х',
            'ъ',
            '\\',
            'caps',
            'ф',
            'ы',
            'в',
            'а',
            'п',
            'р',
            'о',
            'л',
            'д',
            'ж',
            'э',
            'enter',
            'en/ru',
            'я',
            'ч',
            'с',
            'м',
            'и',
            'т',
            'ь',
            'б',
            'ю',
            '.',
            'shift',
            'space',
            'done',
        ];

        let shiftKeyLayoutEn = [
            '~',
            '!',
            '@',
            '#',
            '$',
            '%',
            '^',
            '&',
            '*',
            '(',
            ')',
            '_',
            '+',
            'backspace',
            'q',
            'w',
            'e',
            'r',
            't',
            'y',
            'u',
            'i',
            'o',
            'p',
            '{',
            '}',
            '|',
            'caps',
            'a',
            's',
            'd',
            'f',
            'g',
            'h',
            'j',
            'k',
            'l',
            ':',
            '"',
            'enter',
            'en/ru',
            'z',
            'x',
            'c',
            'v',
            'b',
            'n',
            'm',
            '<',
            '>',
            '?',
            'shift',
            'space',
            'done',
        ];
        let shiftKeyLayoutRu = [
            '',
            '!',
            '"',
            '№',
            ';',
            '%',
            ':',
            '?',
            '*',
            '(',
            ')',
            '_',
            '+',
            'backspace',
            'й',
            'ц',
            'у',
            'к',
            'е',
            'н',
            'г',
            'ш',
            'щ',
            'з',
            'х',
            'ъ',
            '/',
            'caps',
            'ф',
            'ы',
            'в',
            'а',
            'п',
            'р',
            'о',
            'л',
            'д',
            'ж',
            'э',
            'enter',
            'en/ru',
            'я',
            'ч',
            'с',
            'м',
            'и',
            'т',
            'ь',
            'б',
            'ю',
            ',',
            'shift',
            'space',
            'done',
        ];

        if (this.properties.lang === false) {
            this.keyLayout = keyLayoutRu;
        } else {
            this.keyLayout = keyLayoutEn;
        }
    },

    mainLanguageDetector() {
        let mainLanguage = window.navigator.language.substr(0, 2).toLowerCase();
        console.log(mainLanguage);

        if (mainLanguage == 'ru') {
            this.properties.lang = false;
        } else {
            this.properties.lang = true;
        }
    },

    init() {
        // Language setup

        // Create main elements
        this.elements.main = document.createElement('div');
        this.elements.keysContainer = document.createElement('div');

        // Setup main elements
        this.elements.main.classList.add('keyboard', 'keyboard--hidden');
        this.elements.keysContainer.classList.add('keyboard__keys');
        this.elements.keysContainer.appendChild(this._createKeys());

        this.elements.keys = this.elements.keysContainer.querySelectorAll(
            '.keyboard__key'
        );

        // Add to DOM
        this.elements.main.appendChild(this.elements.keysContainer);
        document.body.appendChild(this.elements.main);

        // Automatically use keyboard for elements with .use-keyboard-input
        document.querySelectorAll('.use-keyboard-input').forEach((element) => {
            element.addEventListener('focus', () => {
                this.open(element.value, (currentValue) => {
                    element.value = currentValue;
                    // element.focus();
                    this._focusTextArea();
                });
            });
        });
    },

    _focusTextArea() {
        let cursorPoint = document.querySelector('.use-keyboard-input');
        cursorPoint.focus();
        cursorPoint.selectionStart = cursorPoint.value.length;
    },

    _createKeys() {
        const fragment = document.createDocumentFragment();

        this._createKeyboardBase();

        // Creates HTML for an icon

        const createIconHTML = (icon_name) => {
            return `<i class="material-icons">${icon_name}</i>`;
        };

        this.keyLayout.forEach((key) => {
            const keyElement = document.createElement('button');
            const insertLineBreak =
                ['backspace', '\\', 'enter', 'shift'].indexOf(key) !== -1;

            // Add attributes/classes
            keyElement.setAttribute('type', 'button');
            keyElement.classList.add('keyboard__key');

            switch (key) {
                case 'backspace':
                    keyElement.classList.add('keyboard__key--wide');
                    keyElement.innerHTML = createIconHTML('backspace');

                    keyElement.addEventListener('click', () => {
                        this.properties.value = this.properties.value.substring(
                            0,
                            this.properties.value.length - 1
                        );
                        this._triggerEvent('oninput');
                    });

                    break;

                case 'caps':
                    keyElement.classList.add(
                        'keyboard__key--wide',
                        'keyboard__key--activatable'
                    );
                    keyElement.innerHTML = createIconHTML('keyboard_capslock');

                    keyElement.addEventListener('click', () => {
                        this._toggleCapsLock();
                        keyElement.classList.toggle(
                            'keyboard__key--active'
                            // ,
                            // this.properties.capsLock
                        );
                    });

                    break;

                case 'enter':
                    keyElement.classList.add('keyboard__key--wide');
                    keyElement.innerHTML = createIconHTML('keyboard_return');

                    keyElement.addEventListener('click', () => {
                        this.properties.value += '\n';
                        this._triggerEvent('oninput');
                    });

                    break;

                case 'space':
                    keyElement.classList.add('keyboard__key--extra-wide');
                    keyElement.innerHTML = createIconHTML('space_bar');

                    keyElement.addEventListener('click', () => {
                        this.properties.value += ' ';
                        this._triggerEvent('oninput');
                    });

                    break;

                case 'done':
                    keyElement.classList.add(
                        'keyboard__key--wide',
                        'keyboard__key--dark'
                    );
                    keyElement.innerHTML = createIconHTML('check_circle');

                    keyElement.addEventListener('click', () => {
                        this.close();
                        this._triggerEvent('onclose');
                    });

                    break;

                case 'shift':
                    keyElement.classList.add('keyboard__key--wide');
                    keyElement.innerText = 'shift';

                    keyElement.addEventListener('click', () => {
                        this._toggleShift();
                    });

                    // keyElement.addEventListener('mousedown', () => {
                    //     document
                    //         .querySelectorAll('.keyboard__key')
                    //         .forEach((element, index) => {
                    //             if (this.properties.lang == false) {
                    //                 if (index < 13) {
                    //                     element.innerText =
                    //                         shiftKeyLayoutRu[index];
                    //                 } else if (index == 26) {
                    //                     element.innerText =
                    //                         shiftKeyLayoutRu[index];
                    //                 } else if (index == 50) {
                    //                     element.innerText =
                    //                         shiftKeyLayoutRu[index];
                    //                 }
                    //             } else {
                    //                 if (index < 13) {
                    //                     element.innerText =
                    //                         shiftKeyLayoutEn[index];
                    //                 } else if (index > 23 && index < 27) {
                    //                     element.innerText =
                    //                         shiftKeyLayoutEn[index];
                    //                 } else if (index > 36 && index < 39) {
                    //                     element.innerText =
                    //                         shiftKeyLayoutEn[index];
                    //                 } else if (index > 47 && index < 51) {
                    //                     element.innerText =
                    //                         shiftKeyLayoutEn[index];
                    //                 }
                    //             }
                    //         });
                    //     this._toggleCapsLock();

                    //     keyElement.classList.toggle(this.properties.capsLock);
                    // });

                    // keyElement.addEventListener('mouseup', () => {
                    //     document
                    //         .querySelectorAll('.keyboard__key')
                    //         .forEach((element, index) => {
                    //             if (this.properties.lang == false) {
                    //                 if (index < 13) {
                    //                     element.innerText = this.keyLayout[
                    //                         index
                    //                     ];
                    //                 } else if (index == 26) {
                    //                     element.innerText = this.keyLayout[
                    //                         index
                    //                     ];
                    //                 } else if (index == 50) {
                    //                     element.innerText = this.keyLayout[
                    //                         index
                    //                     ];
                    //                 }
                    //             } else {
                    //                 if (index < 13) {
                    //                     element.innerText = this.keyLayout[
                    //                         index
                    //                     ];
                    //                 } else if (index > 23 && index < 27) {
                    //                     element.innerText = this.keyLayout[
                    //                         index
                    //                     ];
                    //                 } else if (index > 36 && index < 39) {
                    //                     element.innerText = this.keyLayout[
                    //                         index
                    //                     ];
                    //                 } else if (index > 47 && index < 51) {
                    //                     element.innerText = this.keyLayout[
                    //                         index
                    //                     ];
                    //                 }
                    //             }
                    //         });
                    //     this._toggleCapsLock();

                    //     keyElement.classList.toggle(this.properties.capsLock);
                    // });
                    break;

                case 'en/ru':
                    keyElement.classList.add('keyboard__key--wide');
                    keyElement.innerHTML = createIconHTML('language');

                    // keyElement.innerText = 'en/ru';

                    keyElement.addEventListener('click', () => {
                        document
                            .querySelectorAll('.keyboard__key')
                            .forEach((element) => {
                                element.classList.remove('flip-in-ver-left');
                                element.classList.add('flip-out-ver-right');
                            });

                        setTimeout(() => {
                            document.querySelector('.keyboard').remove();
                        }, 450);

                        this.properties.lang = !this.properties.lang;
                        this._createKeyboardBase();

                        this.init();

                        setTimeout(() => {
                            document
                                .querySelector('.keyboard')
                                .classList.remove('keyboard--hidden');

                            document
                                .querySelectorAll('.keyboard__key')
                                .forEach((element) => {
                                    element.classList.add('flip-in-ver-left');
                                });
                        }, 450);

                        setTimeout(() => {
                            this._focusTextArea();
                        }, 500);
                    });

                    break;

                default:
                    keyElement.textContent = key.toLowerCase();

                    keyElement.addEventListener('click', () => {
                        this.properties.value += this.properties.capsLock
                            ? key.toUpperCase()
                            : key.toLowerCase();
                        this._triggerEvent('oninput');
                    });

                    break;
            }

            fragment.appendChild(keyElement);
            if (insertLineBreak) {
                fragment.appendChild(document.createElement('br'));
            }
        });
        return fragment;
    },

    _triggerEvent(handlerName) {
        if (typeof this.eventHandlers[handlerName] == 'function') {
            this.eventHandlers[handlerName](this.properties.value);
        }
    },

    _toggleCapsLock() {
        this.properties.capsLock = !this.properties.capsLock;

        for (const key of this.elements.keys) {
            if (key.childElementCount === 0) {
                key.textContent = this.properties.capsLock
                    ? key.textContent.toUpperCase()
                    : key.textContent.toLowerCase();
            }
        }
        this._focusTextArea();
    },

    _toggleShift() {
        this.properties.shift = !this.properties.shift;

        for (const key of this.elements.keys) {
            if (key.childElementCount === 0) {
                key.textContent = this.properties.capsLock
                    ? key.textContent.toUpperCase()
                    : key.textContent.toLowerCase();
            }
        }
        // for (const key of this.elements.keys) {
        //     if (key.childElementCount === 0) {
        //         key.textContent = this.properties.shiftKeyLayoutEn
        //             ? key.textContent.toUpperCase()
        //             : key.textContent.toLowerCase();
        //     }
        // }

        // this.elements.keys.forEach((element, index) => {
        //     if (!this.properties.shift) {
        // if (!this.properties.lang) {
        //     this.elements.keys.textContent = this.shiftKeyLayoutRu[
        //         index
        //     ];
        // } else {
        //     element.textContent = this.shiftKeyLayoutEn[index];
        // }
        // this._createKeyboardBase();
        // } else {
        //     if (!this.properties.lang) {
        //         this.elements.keys.textContent = this.shiftKeyLayoutRu[
        //             index
        //         ];
        //     } else {
        //         element.textContent = this.shiftKeyLayoutEn[index];
        //     }
        // }
        // });

        this._focusTextArea();
    },

    open(initialValue, oninput, onclose) {
        this.properties.value = initialValue || '';
        this.eventHandlers.oninput = oninput;
        this.eventHandlers.onclose = onclose;
        this.elements.main.classList.remove('keyboard--hidden');
    },

    close() {
        this.properties.value = '';
        this.eventHandlers.oninput = oninput;
        this.eventHandlers.onclose = onclose;
        this.elements.main.classList.add('keyboard--hidden');
    },
};

window.addEventListener('DOMContentLoaded', function () {
    Keyboard.mainLanguageDetector();
    Keyboard.init();
});

// window.addEventListener('DOMContentLoaded', function () {
// });
