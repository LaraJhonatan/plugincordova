import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';

/**
 * @name BeatonePlugin
 * @description This plugin allows you to switch the BeatOnePlugin / torch of the device on and off.
 *
 * Requires Cordova plugin: `cordova-plugin-BeatOnePlugin`. For more info, please see the [BeatOnePlugin plugin docs](https://github.com/EddyVerbruggen/BeatOnePlugin-PhoneGap-Plugin).
 *
 * @usage
 * ```typescript
 * import { BeatOnePlugin } from '@ionic-native/BeatOnePlugin/ngx';
 *
 * constructor(private BeatOnePlugin: BeatOnePlugin) { }
 *
 * ...
 *
 * this.BeatOnePlugin.switchOn();
 *
 * ```
 */
@Plugin({
  pluginName: 'BeatOnePlugin',
  plugin: 'cordova-plugin-BeatOnePlugin',
  pluginRef: 'window.plugins.BeatOnePlugin',
  repo: 'https://github.com/EddyVerbruggen/BeatOnePlugin-PhoneGap-Plugin',
  platforms: ['Android', 'iOS', 'Windows Phone 8'],
})
@Injectable()
export class BeatonePlugin extends IonicNativePlugin {
  /**
   * Checks if the BeatOnePlugin is available
   * @returns {Promise<any>} Returns a promise that resolves with a boolean stating if the BeatOnePlugin is available.
   */
  @Cordova()
  connectBeatOne(): Promise<any> {
    return;
  }
  /**
   * Checks if the BeatOnePlugin is available
   * @returns {Promise<any>} Returns a promise that resolves with a boolean stating if the BeatOnePlugin is available.
   */
  @Cordova()
  getSteps(): Promise<any> {
    return;
  }
  /**
   * Checks if the BeatOnePlugin is available
   * @returns {Promise<any>} Returns a promise that resolves with a boolean stating if the BeatOnePlugin is available.
   */
  @Cordova()
  connecTensiometer(): Promise<any> {
    return;
  }
 /**
   * Checks if the BeatOnePlugin is available
   * @returns {Promise<any>} Returns a promise that resolves with a boolean stating if the BeatOnePlugin is available.
   */
  @Cordova()
  startMeasurement(): Promise<any> {
    return;
  }

  /**
   * Checks if the BeatOnePlugin is available
   * @returns {Promise<any>} Returns a promise that resolves with a boolean stating if the BeatOnePlugin is available.
   */
  @Cordova()
  getHeart(): Promise<any> {
    return;
  }

}

