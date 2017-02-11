'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open-icon');
  var setupClose = setup.querySelector('.setup-close');
  var setupSubmit = setup.querySelector('.setup-submit');
  var setupUserName = setup.querySelector('.setup-user-name');
  var wizard = setup.querySelector('#wizard');
  var wizardCoat = wizard.querySelector('#wizard-coat');
  var wizardEyes = wizard.querySelector('#wizard-eyes');
  var fireballWrap = setup.querySelector('.setup-fireball-wrap');
  var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];
  var fireballColor = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var focusOpenButton = function () {
    setupOpen.focus();
  };

  var openSetupDialog = function () {
    setup.classList.remove('invisible');
    setupOpen.setAttribute('aria-pressed', true);
    setupClose.setAttribute('aria-pressed', false);
    document.addEventListener('keydown', window.utils.escapeKeydowHandler);
  };

  window.closeSetupDialog = function (callback) {
    setup.classList.add('invisible');
    setupOpen.setAttribute('aria-pressed', false);
    document.removeEventListener('keydown', window.utils.escapeKeydowHandler);
    if (typeof callback === 'function') {
      callback();
    }
  };

  setupOpen.addEventListener('click', function () {
    openSetupDialog();
  });

  setupOpen.addEventListener('keydown', function (event) {
    if (window.utils.isEnterPressed(event)) {
      openSetupDialog();
    }
  });

  setupClose.addEventListener('click', function () {
    window.closeSetupDialog();
    setupClose.setAttribute('aria-pressed', true);
  });

  setupClose.addEventListener('keydown', function (event) {
    if (window.utils.isEnterPressed(event)) {
      window.closeSetupDialog(focusOpenButton);
    }
  });

  setupSubmit.addEventListener('click', function (event) {
    if (setupUserName.value.trim() === '' || setupUserName.value.trim().length > 50) {
      event.preventDefault();
    } else {
      window.closeSetupDialog();
    }
  });

  setupSubmit.addEventListener('keydown', function (event) {
    if (setupUserName.value.trim() === '' || setupUserName.value.trim().length > 50) {
      event.preventDefault();
    } else if (window.utils.isEnterPressed(event)) {
      window.closeSetupDialog();
    }
  });

  wizardCoat.addEventListener('click', function () {
    window.getColorElement(wizardCoat, coatColor, 'fill', function (color, property) {
      wizardCoat.style[property] = color;
    });
  });

  wizardCoat.addEventListener('keydown', function (event) {
    if (window.utils.isEnterPressed(event)) {
      window.getColorElement(wizardCoat, coatColor, 'fill', function (color, property) {
        wizardCoat.style[property] = color;
      });
    }
  });

  wizardEyes.addEventListener('click', function () {
    window.getColorElement(wizardEyes, eyesColor, 'fill', function (color, property) {
      wizardEyes.style[property] = color;
    });
  });

  wizardEyes.addEventListener('keydown', function (event) {
    if (window.utils.isEnterPressed(event)) {
      window.getColorElement(wizardEyes, eyesColor, 'fill', function (color, property) {
        wizardEyes.style[property] = color;
      });
    }
  });

  fireballWrap.addEventListener('click', function () {
    window.getColorElement(fireballWrap, fireballColor, 'background', function (color, property) {
      fireballWrap.style[property] = color;
    });
  });

  fireballWrap.addEventListener('keydown', function (event) {
    if (window.utils.isEnterPressed(event)) {
      window.getColorElement(fireballWrap, fireballColor, 'background', function (color, property) {
        fireballWrap.style[property] = color;
      });
    }
  });
})();
