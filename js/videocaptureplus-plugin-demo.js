"use strict";

function videoCapturePlusDemo() {
  navigator.device.capture.captureVideo(
      captureSuccess,
      captureError,
      {limit: 1, duration: 3});
}

function captureSuccess(mediaFiles) {
  var i, len;
  for (i = 0, len = mediaFiles.length; i < len; i++) {
    var mediaFile = mediaFiles[i];
    mediaFile.getFormatData(getFormatDataSuccess, getFormatDataError);

    var vid = document.createElement('video');
    vid.id = "theVideo";
    vid.width = "480";
    vid.height = "360";
    vid.controls = "controls";
    var source_vid = document.createElement('source');
    source_vid.id = "theSource";
    source_vid.src = mediaFile.fullPath;
    vid.appendChild(source_vid);
    document.getElementById('video_container').innerHTML = '';
    document.getElementById('video_container').appendChild(vid);
  }
}

function getFormatDataSuccess(mediaFileData) {
  document.getElementById('video_meta_container').innerHTML = JSON.stringify(mediaFileData);
}

function captureError(error) {
  alert('An error occurred during capture: ' + error.code);
}

function getFormatDataError(error) {
  alert('An error occurred during getFormatData: ' + error.code);
}