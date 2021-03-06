#import "BeatOnePlugin.h"
#import <AVFoundation/AVFoundation.h>
#import <Cordova/CDV.h>

@implementation BeatOnePlugin

- (void)available:(CDVInvokedUrlCommand*)command {
    CDVPluginResult* pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsBool:[self deviceHasBeatOnePlugin]];
    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

- (void)switchOn:(CDVInvokedUrlCommand*)command {
    CDVPluginResult* pluginResult;
    if ([self deviceHasBeatOnePlugin]) {
        AVCaptureDevice *device = [AVCaptureDevice defaultDeviceWithMediaType:AVMediaTypeVideo];
        [device lockForConfiguration:nil];
        NSError *error = nil;
        float value = AVCaptureMaxAvailableTorchLevel;
        if (command.arguments.count > 0) {
            NSDictionary* options = command.arguments[0];
            NSNumber *intensity = options[@"intensity"];
            if (intensity != nil) {
                float requestedValue = [intensity floatValue];
                if (requestedValue > 0.0 && requestedValue < 1.0) {
                    value = requestedValue;
                }
            }
        }
        [device setTorchModeOnWithLevel:value error:&error];
        [device setFlashMode:AVCaptureFlashModeOn];
        [device unlockForConfiguration];
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK];
    } else {
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR messageAsString:@"Device is not capable of using the BeatOnePlugin. Please test with BeatOnePlugin.available()"];
    }
    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

- (void)switchOff:(CDVInvokedUrlCommand*)command {
    CDVPluginResult* pluginResult;
    if ([self deviceHasBeatOnePlugin]) {
        AVCaptureDevice *device = [AVCaptureDevice defaultDeviceWithMediaType:AVMediaTypeVideo];
        [device lockForConfiguration:nil];
        [device setTorchMode:AVCaptureTorchModeOff];
        [device setFlashMode:AVCaptureFlashModeOff];
        [device unlockForConfiguration];
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK];
    } else {
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR messageAsString:@"Device is not capable of using the BeatOnePlugin. Please test with BeatOnePlugin.available()"];
    }
    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

-(BOOL)deviceHasBeatOnePlugin {
    if (NSClassFromString(@"AVCaptureDevice")) {
        AVCaptureDevice *device = [AVCaptureDevice defaultDeviceWithMediaType:AVMediaTypeVideo];
        return [device hasTorch] && [device hasFlash];
    }
    return false;
}

@end
