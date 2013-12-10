"use strict";

function changeWebViewColor() {
  window.plugins.ioswebviewcolor.change('#00FF00', function(){alert('color was changed, pull the app up/down to see the effect')});
}