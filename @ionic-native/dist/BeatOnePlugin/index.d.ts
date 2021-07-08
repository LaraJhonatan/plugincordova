import { IonicNativePlugin } from '@ionic-native/core';
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
export declare class BeatonePlugin extends IonicNativePlugin {
    /**
     * Checks if the BeatOnePlugin is available
     * @returns {Promise<any>} Returns a promise that resolves with a boolean stating if the BeatOnePlugin is available.
     */
    connectBeatOne(): Promise<any>;
    /**
     * Checks if the BeatOnePlugin is available
     * @returns {Promise<any>} Returns a promise that resolves with a boolean stating if the BeatOnePlugin is available.
     */
    getSteps(): Promise<any>;
    /**
     * Checks if the BeatOnePlugin is available
     * @returns {Promise<any>} Returns a promise that resolves with a boolean stating if the BeatOnePlugin is available.
     */
    connecTensiometer(): Promise<any>;
    /**
      * Checks if the BeatOnePlugin is available
      * @returns {Promise<any>} Returns a promise that resolves with a boolean stating if the BeatOnePlugin is available.
      */
    startMeasurement(): Promise<any>;
    /**
     * Checks if the BeatOnePlugin is available
     * @returns {Promise<any>} Returns a promise that resolves with a boolean stating if the BeatOnePlugin is available.
     */
    getHeart(): Promise<any>;
}
