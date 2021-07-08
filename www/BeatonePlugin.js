function BeatOnePlugin() {
  // track BeatOnePlugin state
  this._isSwitchedOn = false;
}

BeatOnePlugin.prototype = {

  connectBeatOne: function (uuid,callback) {
    console.log("uuid",uuid)
    cordova.exec(function (avail) {
      callback(avail);
    }, function() { callback(false); }, "BeatOnePlugin", "connectBeatOne", [uuid]);
  },
  getSteps: function (callback) {
    cordova.exec(function (avail) {
      callback(avail);
    }, function() { callback(false); }, "BeatOnePlugin", "getSteps", []);
  },
  connecTensiometer: function (callback) {
    cordova.exec(function (avail) {
      callback(avail);
    }, function() { callback(false); }, "BeatOnePlugin", "connecTensiometer", []);
  },
  startMeasurement: function (callback) {
    cordova.exec(function (avail) {
      callback(avail);
    }, function() { callback(false); }, "BeatOnePlugin", "startMeasurement", []);
  },
  getHeart: function (callback) {
    cordova.exec(function (avail) {
      callback(avail);
    }, function() { callback(false); }, "BeatOnePlugin", "getHeart", []);
  },
  getHrvData: function (callback) {
    cordova.exec(function (avail) {
      callback(avail);
    }, function() { callback(false); }, "BeatOnePlugin", "getHrvData", []);
  },
  desconnectDevice: function (callback) {
    cordova.exec(function (avail) {
      callback(avail);
    }, function() { callback(false); }, "BeatOnePlugin", "desconnectDevice", []);
  }
  
};

BeatOnePlugin.install = function () {
  if (!window.plugins) {
    window.plugins = {};
  }

  window.plugins.BeatOnePlugin = new BeatOnePlugin();
  return window.plugins.BeatOnePlugin;
};

cordova.addConstructor(BeatOnePlugin.install);
