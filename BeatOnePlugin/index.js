var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var BeatonePlugin = /** @class */ (function (_super) {
    __extends(BeatonePlugin, _super);
    function BeatonePlugin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BeatonePlugin.prototype.connectBeatOne = function (uuid) { return cordova(this, "connectBeatOne", {}, arguments); };
    BeatonePlugin.prototype.getSteps = function () { return cordova(this, "getSteps", {}, arguments); };
    BeatonePlugin.prototype.connecTensiometer = function () { return cordova(this, "connecTensiometer", {}, arguments); };
    BeatonePlugin.prototype.startMeasurement = function () { return cordova(this, "startMeasurement", {}, arguments); };
    BeatonePlugin.prototype.getHeart = function () { return cordova(this, "getHeart", {}, arguments); };
    BeatonePlugin.prototype.getHrvData = function () { return cordova(this, "getHrvData", {}, arguments); };
    BeatonePlugin.prototype.desconnectDevice = function () { return cordova(this, "desconnectDevice", {}, arguments); };
    BeatonePlugin.pluginName = "BeatOnePlugin";
    BeatonePlugin.plugin = "cordova-plugin-BeatOnePlugin";
    BeatonePlugin.pluginRef = "window.plugins.BeatOnePlugin";
    BeatonePlugin.repo = "https://github.com/EddyVerbruggen/BeatOnePlugin-PhoneGap-Plugin";
    BeatonePlugin.platforms = ["Android", "iOS", "Windows Phone 8"];
    return BeatonePlugin;
}(IonicNativePlugin));
export { BeatonePlugin };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL0JlYXRPbmVQbHVnaW4vaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBNEJyQyxpQ0FBaUI7Ozs7SUFPbEQsc0NBQWMsYUFBQyxJQUFXO0lBUTFCLGdDQUFRO0lBUVIseUNBQWlCO0lBUWpCLHdDQUFnQjtJQVNoQixnQ0FBUTtJQVNSLGtDQUFVO0lBUVYsd0NBQWdCOzs7Ozs7d0JBdEZsQjtFQTZCbUMsaUJBQWlCO1NBQXZDLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIEBuYW1lIEJlYXRvbmVQbHVnaW5cclxuICogQGRlc2NyaXB0aW9uIFRoaXMgcGx1Z2luIGFsbG93cyB5b3UgdG8gc3dpdGNoIHRoZSBCZWF0T25lUGx1Z2luIC8gdG9yY2ggb2YgdGhlIGRldmljZSBvbiBhbmQgb2ZmLlxyXG4gKlxyXG4gKiBSZXF1aXJlcyBDb3Jkb3ZhIHBsdWdpbjogYGNvcmRvdmEtcGx1Z2luLUJlYXRPbmVQbHVnaW5gLiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlIHRoZSBbQmVhdE9uZVBsdWdpbiBwbHVnaW4gZG9jc10oaHR0cHM6Ly9naXRodWIuY29tL0VkZHlWZXJicnVnZ2VuL0JlYXRPbmVQbHVnaW4tUGhvbmVHYXAtUGx1Z2luKS5cclxuICpcclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgQmVhdE9uZVBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvQmVhdE9uZVBsdWdpbi9uZ3gnO1xyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIEJlYXRPbmVQbHVnaW46IEJlYXRPbmVQbHVnaW4pIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICogdGhpcy5CZWF0T25lUGx1Z2luLnN3aXRjaE9uKCk7XHJcbiAqXHJcbiAqIGBgYFxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0JlYXRPbmVQbHVnaW4nLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLUJlYXRPbmVQbHVnaW4nLFxyXG4gIHBsdWdpblJlZjogJ3dpbmRvdy5wbHVnaW5zLkJlYXRPbmVQbHVnaW4nLFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vRWRkeVZlcmJydWdnZW4vQmVhdE9uZVBsdWdpbi1QaG9uZUdhcC1QbHVnaW4nLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUycsICdXaW5kb3dzIFBob25lIDgnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQmVhdG9uZVBsdWdpbiBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBDaGVja3MgaWYgdGhlIEJlYXRPbmVQbHVnaW4gaXMgYXZhaWxhYmxlXHJcbiAgICogQHBhcmFtIHV1aWQge3N0cmluZ30gVVVJRCBEZXZpY2VcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggYSBib29sZWFuIHN0YXRpbmcgaWYgdGhlIEJlYXRPbmVQbHVnaW4gaXMgYXZhaWxhYmxlLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBjb25uZWN0QmVhdE9uZSh1dWlkOnN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIENoZWNrcyBpZiB0aGUgQmVhdE9uZVBsdWdpbiBpcyBhdmFpbGFibGVcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggYSBib29sZWFuIHN0YXRpbmcgaWYgdGhlIEJlYXRPbmVQbHVnaW4gaXMgYXZhaWxhYmxlLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBnZXRTdGVwcygpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBDaGVja3MgaWYgdGhlIEJlYXRPbmVQbHVnaW4gaXMgYXZhaWxhYmxlXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIGEgYm9vbGVhbiBzdGF0aW5nIGlmIHRoZSBCZWF0T25lUGx1Z2luIGlzIGF2YWlsYWJsZS5cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgY29ubmVjVGVuc2lvbWV0ZXIoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAvKipcclxuICAgKiBDaGVja3MgaWYgdGhlIEJlYXRPbmVQbHVnaW4gaXMgYXZhaWxhYmxlXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIGEgYm9vbGVhbiBzdGF0aW5nIGlmIHRoZSBCZWF0T25lUGx1Z2luIGlzIGF2YWlsYWJsZS5cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgc3RhcnRNZWFzdXJlbWVudCgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2tzIGlmIHRoZSBCZWF0T25lUGx1Z2luIGlzIGF2YWlsYWJsZVxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCBhIGJvb2xlYW4gc3RhdGluZyBpZiB0aGUgQmVhdE9uZVBsdWdpbiBpcyBhdmFpbGFibGUuXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGdldEhlYXJ0KCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIFxyXG4gICAvKipcclxuICAgKiBDaGVja3MgaWYgdGhlIEJlYXRPbmVQbHVnaW4gaXMgYXZhaWxhYmxlXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIGEgYm9vbGVhbiBzdGF0aW5nIGlmIHRoZSBCZWF0T25lUGx1Z2luIGlzIGF2YWlsYWJsZS5cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgZ2V0SHJ2RGF0YSgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICAgLyoqXHJcbiAgICogQ2hlY2tzIGlmIHRoZSBCZWF0T25lUGx1Z2luIGlzIGF2YWlsYWJsZVxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCBhIGJvb2xlYW4gc3RhdGluZyBpZiB0aGUgQmVhdE9uZVBsdWdpbiBpcyBhdmFpbGFibGUuXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGRlc2Nvbm5lY3REZXZpY2UoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuXHJcbiJdfQ==