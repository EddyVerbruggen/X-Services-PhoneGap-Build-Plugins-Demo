var insomniaEnabled = false;

function insomniaDemo() {
  // toggle
  insomniaEnabled = !insomniaEnabled;

  // call plugin
  if (insomniaEnabled) {
    window.plugins.insomnia.keepAwake(function(a) {alert('keepAwake success: ' + a)}, function(b) {alert('keepAwake error: ' + b)});
  } else {
    window.plugins.insomnia.allowSleepAgain(function(a) {alert('allowSleepAgain success: ' + a)}, function(b) {alert('allowSleepAgain error: ' + b)});
  }
}