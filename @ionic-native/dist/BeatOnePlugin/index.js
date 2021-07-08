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
    BeatonePlugin.prototype.connectBeatOne = function () { return cordova(this, "connectBeatOne", {}, arguments); };
    BeatonePlugin.prototype.getSteps = function () { return cordova(this, "getSteps", {}, arguments); };
    BeatonePlugin.prototype.connecTensiometer = function () { return cordova(this, "connecTensiometer", {}, arguments); };
    BeatonePlugin.prototype.startMeasurement = function () { return cordova(this, "startMeasurement", {}, arguments); };
    BeatonePlugin.prototype.getHeart = function () { return cordova(this, "getHeart", {}, arguments); };
    BeatonePlugin.pluginName = "BeatOnePlugin";
    BeatonePlugin.plugin = "cordova-plugin-BeatOnePlugin";
    BeatonePlugin.pluginRef = "window.plugins.BeatOnePlugin";
    BeatonePlugin.repo = "https://github.com/EddyVerbruggen/BeatOnePlugin-PhoneGap-Plugin";
    BeatonePlugin.platforms = ["Android", "iOS", "Windows Phone 8"];
    return BeatonePlugin;
}(IonicNativePlugin));
export { BeatonePlugin };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL0JlYXRPbmVQbHVnaW4vaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBNEJyQyxpQ0FBaUI7Ozs7SUFNbEQsc0NBQWM7SUFRZCxnQ0FBUTtJQVFSLHlDQUFpQjtJQVFqQix3Q0FBZ0I7SUFTaEIsZ0NBQVE7Ozs7Ozt3QkFwRVY7RUE2Qm1DLGlCQUFpQjtTQUF2QyxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBCZWF0b25lUGx1Z2luXHJcbiAqIEBkZXNjcmlwdGlvbiBUaGlzIHBsdWdpbiBhbGxvd3MgeW91IHRvIHN3aXRjaCB0aGUgQmVhdE9uZVBsdWdpbiAvIHRvcmNoIG9mIHRoZSBkZXZpY2Ugb24gYW5kIG9mZi5cclxuICpcclxuICogUmVxdWlyZXMgQ29yZG92YSBwbHVnaW46IGBjb3Jkb3ZhLXBsdWdpbi1CZWF0T25lUGx1Z2luYC4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZSB0aGUgW0JlYXRPbmVQbHVnaW4gcGx1Z2luIGRvY3NdKGh0dHBzOi8vZ2l0aHViLmNvbS9FZGR5VmVyYnJ1Z2dlbi9CZWF0T25lUGx1Z2luLVBob25lR2FwLVBsdWdpbikuXHJcbiAqXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IEJlYXRPbmVQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL0JlYXRPbmVQbHVnaW4vbmd4JztcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBCZWF0T25lUGx1Z2luOiBCZWF0T25lUGx1Z2luKSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqIHRoaXMuQmVhdE9uZVBsdWdpbi5zd2l0Y2hPbigpO1xyXG4gKlxyXG4gKiBgYGBcclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdCZWF0T25lUGx1Z2luJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1CZWF0T25lUGx1Z2luJyxcclxuICBwbHVnaW5SZWY6ICd3aW5kb3cucGx1Z2lucy5CZWF0T25lUGx1Z2luJyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL0VkZHlWZXJicnVnZ2VuL0JlYXRPbmVQbHVnaW4tUGhvbmVHYXAtUGx1Z2luJyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnLCAnV2luZG93cyBQaG9uZSA4J10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEJlYXRvbmVQbHVnaW4gZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogQ2hlY2tzIGlmIHRoZSBCZWF0T25lUGx1Z2luIGlzIGF2YWlsYWJsZVxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCBhIGJvb2xlYW4gc3RhdGluZyBpZiB0aGUgQmVhdE9uZVBsdWdpbiBpcyBhdmFpbGFibGUuXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGNvbm5lY3RCZWF0T25lKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIENoZWNrcyBpZiB0aGUgQmVhdE9uZVBsdWdpbiBpcyBhdmFpbGFibGVcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggYSBib29sZWFuIHN0YXRpbmcgaWYgdGhlIEJlYXRPbmVQbHVnaW4gaXMgYXZhaWxhYmxlLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBnZXRTdGVwcygpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBDaGVja3MgaWYgdGhlIEJlYXRPbmVQbHVnaW4gaXMgYXZhaWxhYmxlXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIGEgYm9vbGVhbiBzdGF0aW5nIGlmIHRoZSBCZWF0T25lUGx1Z2luIGlzIGF2YWlsYWJsZS5cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgY29ubmVjVGVuc2lvbWV0ZXIoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAvKipcclxuICAgKiBDaGVja3MgaWYgdGhlIEJlYXRPbmVQbHVnaW4gaXMgYXZhaWxhYmxlXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIGEgYm9vbGVhbiBzdGF0aW5nIGlmIHRoZSBCZWF0T25lUGx1Z2luIGlzIGF2YWlsYWJsZS5cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgc3RhcnRNZWFzdXJlbWVudCgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2tzIGlmIHRoZSBCZWF0T25lUGx1Z2luIGlzIGF2YWlsYWJsZVxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCBhIGJvb2xlYW4gc3RhdGluZyBpZiB0aGUgQmVhdE9uZVBsdWdpbiBpcyBhdmFpbGFibGUuXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGdldEhlYXJ0KCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxufVxyXG5cclxuIl19