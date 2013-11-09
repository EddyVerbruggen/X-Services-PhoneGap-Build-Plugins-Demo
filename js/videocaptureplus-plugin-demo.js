"use strict";

function videoCapturePlusDemo() {
  navigator.device.capture.captureVideo(captureSuccess, captureError, {limit: 2, duration: 4});
}

function captureSuccess(mediaFiles) {
  var i, len;
  for (i = 0, len = mediaFiles.length; i < len; i++) {
    var mediaFile = mediaFiles[i];
    navigator.notification.alert(mediaFile.name, null, mediaFile.fullPath);
  }
}

// Called if something bad happens.
//
function captureError(error) {
  var msg = 'An error occurred during capture: ' + error.code;
  navigator.notification.alert(msg, null, 'Uh oh!');
}