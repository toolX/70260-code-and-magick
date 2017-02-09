'use strict';

(function () {
  window.utils = {
    ESCAPE_KEY_CODE: 27,
    ENTER_KEY_CODE: 13,
    isEnterPressed: function (event) {
      return event.keyCode === window.utils.ENTER_KEY_CODE;
    },
    isEscapePressed: function (event) {
      return event.keyCode === window.utils.ESCAPE_KEY_CODE;
    },
    escapeKeydowHandler: function (event) {
      if (window.utils.isEscapePressed(event)) {
        window.closeSetupDialog();
      }
    },
    getRandomElement: function (array) {
      return array[Math.floor(Math.random() * array.length)];
    },
    getRandomElementExcept: function (array, elem) {
      return window.utils.getRandomElement(array) !== elem;
    }
  };
})();
