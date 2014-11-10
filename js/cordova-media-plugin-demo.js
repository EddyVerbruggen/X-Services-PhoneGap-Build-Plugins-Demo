function testAudioPlayer(large) {

  function onSuccess() {
    alert("ok");
  }

  function onError() {
    alert("nok");
  }

  // TODO show a spinner during status.MEDIA_STARTING
  function onMediaStatus(status) {
    alert("status: " + status);
  }

  var my_media = new Media(
      large? "http://www.x-services.nl/mindfullness-test-large.mp3" : "http://www.x-services.nl/mindfullness-test.mp3",
      onSuccess,
      onError,
      onMediaStatus);

  my_media.play({ playAudioWhenScreenIsLocked : true /* doesn't seem to work on iOS */ });

  // Update media position every second
  var mediaTimer = setInterval(function () {
    // get media position
    my_media.getCurrentPosition(
        // success callback
        function (position) {
          if (position > -1) {
            document.getElementById("test").value=parseInt(position) + " sec";
          }
        },
        // error callback
        function (e) {
          document.getElementById("test").value="Error getting pos=" + e;
        }
    );
  }, 1000);

}
