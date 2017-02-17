'use strict';

window.render = (function () {
  var wizardTemplate = document.querySelector('.setup-wizard-wrap');

  return function (wizard) {
    var wizardElement = wizardTemplate.cloneNode(true);
    wizardElement.setAttribute('title', wizard.name);

    var svgElement = wizardElement.children[0];
    var coat = svgElement.querySelector('#wizard-coat');
    var eyes = svgElement.querySelector('#wizard-eyes');
    coat.setAttribute('class', 'wizard-coat');
    eyes.setAttribute('class', 'wizard-eyes');
    svgElement.removeAttribute('#wizard-coat');
    svgElement.removeAttribute('#wizard-eyes');
    svgElement.style.position = 'static';
    svgElement.style.width = 50;
    svgElement.style.height = 50;

    svgElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    svgElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };

})();
