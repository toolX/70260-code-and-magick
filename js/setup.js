'use strict';

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open-icon');
var setupClose = setup.querySelector('.setup-close');
var setupSubmit = setup.querySelector('.setup-submit');
var wizard = setup.querySelector('#wizard');
var wizardCoat = wizard.querySelector('#wizard-coat');
var wizardEyes = wizard.querySelector('#wizard-eyes');
var fireballWrap = setup.querySelector('.setup-fireball-wrap');
var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];
var fireballColor = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var ESCAPE_KEY_CODE = 27;
var ENTER_KEY_CODE = 13;

var openSetupDialog = function () {
  setup.classList.remove('invisible');
  setupOpen.setAttribute('aria-pressed', true);
  setupClose.setAttribute('aria-pressed', false);
  document.addEventListener('keydown', escapeKeydowHandler);
};

var closeSetupDialog = function () {
  setup.classList.add('invisible');
  setupOpen.setAttribute('aria-pressed', false);
  document.removeEventListener('keydown', escapeKeydowHandler);
};

var isEnterPressed = function (event) {
  return event.keyCode === ENTER_KEY_CODE;
};

var isEscapePressed = function (event) {
  return event.keyCode === ESCAPE_KEY_CODE;
};

var escapeKeydowHandler = function (event) {
  if (isEscapePressed(event)) {
    closeSetupDialog();
  }
};

setupOpen.addEventListener('click', function () {
  openSetupDialog();
});

setupOpen.addEventListener('keydown', function (event) {
  if (isEnterPressed(event)) {
    openSetupDialog();
  }
});

setupClose.addEventListener('click', function () {
  closeSetupDialog();
  setupClose.setAttribute('aria-pressed', true);
});

setupClose.addEventListener('keydown', function (event) {
  if (isEnterPressed(event)) {
    closeSetupDialog();
  }
});

setupSubmit.addEventListener('click', function () {
  closeSetupDialog();
});

setupSubmit.addEventListener('keydown', function (event) {
  if (isEnterPressed(event)) {
    closeSetupDialog();
  }
});

var getRandomElem = function (array) {
  return (array[Math.ceil(Math.random() * array.length)]);
};

wizardCoat.addEventListener('click', function () {
  wizardCoat.style.fill = getRandomElem(coatColor);
});

wizardEyes.addEventListener('click', function () {
  wizardEyes.style.fill = getRandomElem(eyesColor);
});

fireballWrap.addEventListener('click', function () {
  fireballWrap.style.background = getRandomElem(fireballColor);
});
