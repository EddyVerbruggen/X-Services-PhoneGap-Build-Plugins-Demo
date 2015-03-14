function actionsheetDemo() {
    alert('actionsheet theme: ' + window.plugins.actionsheet.ANDROID_THEMES.THEME_HOLO_LIGHT);
  var options = {
    'title': 'What do you want with this image?',
    'androidTheme': window.plugins.actionsheet.ANDROID_THEMES.THEME_HOLO_LIGHT,
    'buttonLabels': ['Share via Facebook', 'Share via Twitter'],
    'androidEnableCancelButton' : true, // default false
    'winphoneEnableCancelButton' : true, // default false
    'addCancelButtonWithLabel': 'Cancel',
    'addDestructiveButtonWithLabel' : 'Delete it'
  };
  // Depending on the buttonIndex, you can now call shareViaFacebook or shareViaTwitter
  // of the SocialSharing plugin (https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin)
  window.plugins.actionsheet.show(options, function(buttonIndex) {
    setTimeout(function () {
      // like other Cordova plugins (prompt, confirm) the buttonIndex is 1-based (first button is index 1)
      alert('button index clicked: ' + buttonIndex);
    })
  });
}
