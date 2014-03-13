/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
  // Application Constructor
  initialize: function () {
    this.bindEvents();
  },
  // Bind Event Listeners
  //
  // Bind any events that are required on startup. Common events are:
  // 'load', 'deviceready', 'offline', and 'online'.
  bindEvents: function () {
    if (isIOS() || isAndroid()) {
      document.addEventListener('deviceready', this.onDeviceReady, false);
    } else {
      this.onDeviceReady();
    }
  },
  // deviceready Event Handler
  //
  // The scope of 'this' is the event. In order to call the 'receivedEvent'
  // function, we must explicity call 'app.receivedEvent(...);'
  onDeviceReady: function () {
    app.receivedEvent('deviceready');
    app.initPluginDemo();
  },
  // Update DOM on a Received Event
  receivedEvent: function (id) {
    var parentElement = document.getElementById(id);
    var listeningElement = parentElement.querySelector('.listening');
    var receivedElement = parentElement.querySelector('.received');

    listeningElement.setAttribute('style', 'display:none;');
    receivedElement.setAttribute('style', 'display:block;');

    console.log('Received Event: ' + id);
  },
  initPluginDemo: function () {
    document.getElementById('pluginsDemoDiv').setAttribute('style', 'display:block');
  }
};

function isAndroid() {
  return navigator.userAgent.toLowerCase().indexOf("android") > -1;
}

function isIOS() {
  return navigator.userAgent.match(/(iPad|iPhone|iPod)/i) != null;
}

function testAudioPlayer() {

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
      "http://www.x-services.nl/mindfullness-test.mp3",
      onSuccess,
      onError,
      onMediaStatus);

  my_media.play({ playAudioWhenScreenIsLocked : true /*doesnt seem to work on iOS*/ });

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
