"use strict";

function sslcertificatecheckerDemo(useCorrectFingerprint) {
  var server = "https://build.phonegap.com";
  var fingerprint;
  if (useCorrectFingerprint) {
    fingerprint = "8F A5 FC 33 20 2D 45 B4 EC 95 87 F0 50 F0 18 14 DF 98 50 64"; // valid until sep 2014
  } else {
    fingerprint = "11 22 33 44 55 2D 45 B4 EC 95 87 F0 50 F0 18 14 DF 98 50 64"; // nonsense
  }

  window.plugins.sslCertificateChecker.check(
      sslcertSuccessCallback,
      sslcertErrorCallback,
      server,
      fingerprint);
}

function sslcertSuccessCallback(message) {
  alert(message);
  // Message is always: CONNECTION_SECURE.
  // Now do something with the trusted server.
}

function sslcertErrorCallback(message) {
  alert(message);
  if (message == "CONNECTION_NOT_SECURE") {
    // There is likely a man in the middle attack going on, be careful!
  } else if (message == "CONNECTION_FAILED") {
    // There was no connection (yet). Internet may be down. Try again (a few times) after a little timeout.
  }
}