"use strict";

var insomniaEnabled = false;

function insomniaDemo() {
  // toggle
  insomniaEnabled = !insomniaEnabled;

  // call plugin
  if (insomniaEnabled) {
    window.plugins.insomnia.keepAwake(function(a) {alert('keepAwake ok: ' + a)}, function(b) {alert('keepAwake nok: ' + b)});
  } else {
    window.plugins.insomnia.allowSleepAgain(function(a) {alert('allowSleepAgain ok: ' + a)}, function(b) {alert('allowSleepAgain nok: ' + b)});
  }
}