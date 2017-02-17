'use strict';

window.render = (function () {
  var wizardTemplate = document.querySelector('.setup-wizard-wrap');

  return function (wizard) {
    var wizardElement = wizardTemplate.cloneNode(true);
    wizardElement.setAttribute('title', wizard.name);
    wizardElement.style.width = 50 + 'px';
    wizardElement.style.height = 50 + 'px';

    var svgElement = wizardElement.children[0];
    var coat = svgElement.querySelector('#wizard-coat');
    var eyes = svgElement.querySelector('#wizard-eyes');
    coat.setAttribute('class', 'wizard-coat');
    eyes.setAttribute('class', 'wizard-eyes');
    svgElement.removeAttribute('#wizard-coat');
    svgElement.removeAttribute('#wizard-eyes');
    svgElement.style.position = 'static';
    svgElement.style.width = 50 + 'px';
    svgElement.style.height = 50 + 'px';

    svgElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    svgElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };

})();
