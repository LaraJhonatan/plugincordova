#import <Cordova/CDV.h>

@interface BeatOnePlugin : CDVPlugin

- (void)available:(CDVInvokedUrlCommand*)command;
- (void)switchOn:(CDVInvokedUrlCommand*)command;
- (void)switchOff:(CDVInvokedUrlCommand*)command;

@end