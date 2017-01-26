'use strict';

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var wizard = setup.querySelector('#wizard');
var wizardCoat = wizard.querySelector('#wizard-coat');
var wizardEyes = wizard.querySelector('#wizard-eyes');
var fireballWrap = setup.querySelector('.setup-fireball-wrap');
var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];
var fireballColor = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var toggleSetup = function () {
  setup.classList.toggle('invisible');
};

var getRandomElem = function (array) {
  return (array[Math.ceil(Math.random() * array.length)]);
};

setupOpen.addEventListener('click', toggleSetup);
setupClose.addEventListener('click', toggleSetup);

wizardCoat.addEventListener('click', function () {
  wizardCoat.style.fill = getRandomElem(coatColor);
});

wizardEyes.addEventListener('click', function () {
  wizardEyes.style.fill = getRandomElem(eyesColor);
});

fireballWrap.addEventListener('click', function () {
  fireballWrap.style.background = getRandomElem(fireballColor);
});
