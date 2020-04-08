cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "com.bunkerpalace.cordova.YoutubeVideoPlayer.YoutubeVideoPlayer",
      "file": "plugins/com.bunkerpalace.cordova.YoutubeVideoPlayer/plugins/com.bunkerpalace.cordova.YoutubeVideoPlayer/www/YoutubeVideoPlayer.js",
      "pluginId": "com.bunkerpalace.cordova.YoutubeVideoPlayer",
      "clobbers": [
        "YoutubeVideoPlayer"
      ]
    },
    {
      "id": "com.santinowu.cordova.imagedownloader.imagedownloader",
      "file": "plugins/com.santinowu.cordova.imagedownloader/www/imagedownloader.js",
      "pluginId": "com.santinowu.cordova.imagedownloader",
      "clobbers": [
        "imagedownloader"
      ]
    },
    {
      "id": "cordova-plugin-admobpro.AdMob",
      "file": "plugins/cordova-plugin-admobpro/www/AdMob.js",
      "pluginId": "cordova-plugin-admobpro",
      "clobbers": [
        "window.AdMob"
      ]
    },
    {
      "id": "cordova-plugin-app-version.AppVersionPlugin",
      "file": "plugins/cordova-plugin-app-version/www/AppVersionPlugin.js",
      "pluginId": "cordova-plugin-app-version",
      "clobbers": [
        "cordova.getAppVersion"
      ]
    },
    {
      "id": "cordova-plugin-customconfigparameters.CustomConfigParameters",
      "file": "plugins/cordova-plugin-customconfigparameters/www/customconfigparameters.js",
      "pluginId": "cordova-plugin-customconfigparameters",
      "clobbers": [
        "CustomConfigParameters"
      ]
    },
    {
      "id": "cordova-plugin-network-information.network",
      "file": "plugins/cordova-plugin-network-information/www/network.js",
      "pluginId": "cordova-plugin-network-information",
      "clobbers": [
        "navigator.connection",
        "navigator.network.connection"
      ]
    },
    {
      "id": "cordova-plugin-network-information.Connection",
      "file": "plugins/cordova-plugin-network-information/www/Connection.js",
      "pluginId": "cordova-plugin-network-information",
      "clobbers": [
        "Connection"
      ]
    },
    {
      "id": "es6-promise-plugin.Promise",
      "file": "plugins/es6-promise-plugin/www/promise.js",
      "pluginId": "es6-promise-plugin",
      "runs": true
    },
    {
      "id": "cordova-plugin-screen-orientation.screenorientation",
      "file": "plugins/cordova-plugin-screen-orientation/www/screenorientation.js",
      "pluginId": "cordova-plugin-screen-orientation",
      "clobbers": [
        "cordova.plugins.screenorientation"
      ]
    },
    {
      "id": "cordova-plugin-shortcuts-android.ShortcutsPlugin",
      "file": "plugins/cordova-plugin-shortcuts-android/www/ShortcutsPlugin.js",
      "pluginId": "cordova-plugin-shortcuts-android",
      "clobbers": [
        "Shortcuts"
      ]
    },
    {
      "id": "cordova-plugin-splashscreen.SplashScreen",
      "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
      "pluginId": "cordova-plugin-splashscreen",
      "clobbers": [
        "navigator.splashscreen"
      ]
    },
    {
      "id": "cordova-plugin-statusbar.statusbar",
      "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
      "pluginId": "cordova-plugin-statusbar",
      "clobbers": [
        "window.StatusBar"
      ]
    },
    {
      "id": "onesignal-cordova-plugin.OneSignal",
      "file": "plugins/onesignal-cordova-plugin/www/OneSignal.js",
      "pluginId": "onesignal-cordova-plugin",
      "clobbers": [
        "OneSignal"
      ]
    }
  ];
  module.exports.metadata = {
    "com.bunkerpalace.cordova.YoutubeVideoPlayer": "1.0.5",
    "com.santinowu.cordova.imagedownloader": "1.0.3",
    "cordova-android-play-services-gradle-release": "4.0.0",
    "cordova-plugin-extension": "1.5.4",
    "cordova-plugin-admobpro": "2.49.0",
    "cordova-plugin-app-version": "0.1.9",
    "cordova-plugin-customconfigparameters": "3.0.0",
    "cordova-plugin-network-information": "2.0.2",
    "es6-promise-plugin": "4.2.2",
    "cordova-plugin-screen-orientation": "3.0.2",
    "cordova-plugin-shortcuts-android": "0.1.0",
    "cordova-plugin-splashscreen": "5.0.3",
    "cordova-plugin-statusbar": "2.4.3",
    "cordova-plugin-whitelist": "1.3.4",
    "onesignal-cordova-plugin": "2.6.0"
  };
});