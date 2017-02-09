'use strict';

(function () {
  window.colorizeElement = function (element, colors, property) {
    var currentColor = colors[0];

    var setRandomColor = function () {
      while (window.utils.getRandomElementExcept(colors, currentColor)) {
        currentColor = window.utils.getRandomElement(colors);
      }
      element.style[property] = currentColor;
    };

    element.addEventListener('click', setRandomColor);
    element.addEventListener('keydown', function (event) {
      if (window.utils.isEnterPressed(event)) {
        setRandomColor();
      }
    });
  };
})();
