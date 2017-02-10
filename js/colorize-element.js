'use strict';

(function () {
  window.getColorElement = function (element, colors, property, callback) {
    var currentColor = colors[0];

    var getRandomColor = function () {
      while (window.utils.getRandomElementExcept(colors, currentColor)) {
        currentColor = window.utils.getRandomElement(colors);
      }
      return currentColor;
    };

    return callback(getRandomColor(), property);
  };
})();
