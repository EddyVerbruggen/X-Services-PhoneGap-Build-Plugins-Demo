function nativePageTransitionsWithoutHREF() {
  var options = {
    "direction"      : "left", // 'left|right|up|down', default 'left' (which is like 'next')
    "duration"       :  500, // in milliseconds (ms), default 400
    "slowdownfactor" :    3, // overlap views (higher number is more) or no overlap (1), default 4
    "iosdelay"       :  100
  };
  window.plugins.nativepagetransitions.slide(
      options,
      function (msg) {console.log("success: " + msg)}, // called when the animation has finished
      function (msg) {alert("error: " + msg)} // called in case you pass in weird values
  );
}

function nativePageTransitionsWithHREF() {
  var options = {
    "direction"      : "right", // 'left|right|up|down', default 'left' (which is like 'next')
    "duration"       :  500, // in milliseconds (ms), default 400
    "href"           : "dummy.html"
  };
  window.plugins.nativepagetransitions.flip(
      options,
      function (msg) {console.log("success: " + msg)}, // called when the animation has finished
      function (msg) {alert("error: " + msg)} // called in case you pass in weird values
  );
}
