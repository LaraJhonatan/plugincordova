'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@ionic-native/core');

var BeatonePlugin = /** @class */ (function (_super) {
    tslib.__extends(BeatonePlugin, _super);
    function BeatonePlugin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BeatonePlugin.prototype.connectBeatOne = function () { return core.cordova(this, "connectBeatOne", {}, arguments); };
    BeatonePlugin.prototype.getSteps = function () { return core.cordova(this, "getSteps", {}, arguments); };
    BeatonePlugin.prototype.connecTensiometer = function () { return core.cordova(this, "connecTensiometer", {}, arguments); };
    BeatonePlugin.prototype.startMeasurement = function () { return core.cordova(this, "startMeasurement", {}, arguments); };
    BeatonePlugin.prototype.getHeart = function () { return core.cordova(this, "getHeart", {}, arguments); };
    BeatonePlugin.pluginName = "BeatOnePlugin";
    BeatonePlugin.plugin = "cordova-plugin-BeatOnePlugin";
    BeatonePlugin.pluginRef = "window.plugins.BeatOnePlugin";
    BeatonePlugin.repo = "https://github.com/EddyVerbruggen/BeatOnePlugin-PhoneGap-Plugin";
    BeatonePlugin.platforms = ["Android", "iOS", "Windows Phone 8"];
    BeatonePlugin.decorators = [
        { type: core$1.Injectable }
    ];
    return BeatonePlugin;
}(core.IonicNativePlugin));

exports.BeatonePlugin = BeatonePlugin;
