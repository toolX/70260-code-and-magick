'use strict';

window.renderStatistics = function (ctx, names, times) {

  var windowLeftEdge = 100;
  var windowTopEdge = 10;
  var windowWidth = 420;
  var windowHeight = 270;
  var windowPadding = 50;
  var windowBottomEdge = windowTopEdge + windowHeight;
  var textPadding = 20;
  var barWidth = 40;
  var message = 'Ура вы победили!\nСписок результатов:';

  var scaleTimes = scale(times, 170);
  var scaleColors = scale(times, 255);

  function drawRect(x, y, width, height, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
  }

  function splitText(text) {
    var textArray = text.split('\n');
    var gap = 20;
    for (var i = 0; i < textArray.length; i++) {
      drawText(textArray[i], 120, 25 + gap, 'bottom');
      gap += gap;
    }
  }

  function drawText(text, x, y, baseline) {
    ctx.fillStyle = 'black';
    ctx.font = '18px PT Mono';
    ctx.textBaseline = baseline;
    ctx.fillText(text, x, y);
  }

  function scale(arr, number) {
    var maxNumber = Math.max.apply(null, arr);
    var scaledArr = arr.map(function (n) {
      return Math.ceil(n / maxNumber * number);
    });
    return scaledArr;
  }

  drawRect((windowLeftEdge + 10), (windowTopEdge + 10), windowWidth, windowHeight, 'rgba(0, 0, 0, 0.7)');
  drawRect(windowLeftEdge, windowTopEdge, windowWidth, windowHeight, 'rgba(255, 255, 255, 1)');
  splitText(message);

  for (var i = 0; i < names.length; i++) {
    var barLeftEdge = (windowLeftEdge + windowPadding);
    var barBottomEdge = (windowBottomEdge - textPadding);
    var barTopEdge = (barBottomEdge - scaleTimes[i]);
    var color;

    if (names[i] === 'Вы') {
      color = 'rgba(255, 0, 0, 1)';
    } else {
      color = 'rgba(0, 0, ' + scaleColors[i] + ', 1)';
    }

    drawRect(barLeftEdge, barTopEdge, barWidth, scaleTimes[i], color);

    drawText(Math.ceil(times[i]), barLeftEdge, barTopEdge, 'bottom');

    drawText(names[i], barLeftEdge, barBottomEdge, 'top');

    windowPadding = windowPadding + barWidth + 50;
  }
};
