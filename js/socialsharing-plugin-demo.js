"use strict";

function socialsharingDemo() {
  window.plugins.socialsharing.available(function(isAvailable) {
    if (isAvailable) {
      // use a local image from inside the www folder:
      window.plugins.socialsharing.share('Some text', 'Some subject', 'www/img/logo.png', 'http://www.nu.nl');
//      window.plugins.socialsharing.share('Some text');

      // alternative usage:

      // 1) a local image from anywhere else (if permitted):
      // window.plugins.socialsharing.share('Some text', 'http://domain.com', '/Users/username/Library/Application Support/iPhone/6.1/Applications/25A1E7CF-079F-438D-823B-55C6F8CD2DC0/Documents/.nl.x-services.appname/pics/img.jpg');

      // 2) an image from the internet:
//      window.plugins.socialsharing.share('Some text', "Some subject', 'http://domain.com', 'http://domain.com/image.jpg');

      // 3) text and link:
//      window.plugins.socialsharing.share('Some text and a link', '', '', 'http://www.nu.nl');
    }
  });
}