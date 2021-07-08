package nl.xservices.plugins;

import android.Manifest;
import android.annotation.TargetApi;
import android.content.Context;
import android.content.pm.FeatureInfo;
import android.content.pm.PackageManager;
import android.graphics.SurfaceTexture;
import android.hardware.Camera;
import android.hardware.camera2.CameraAccessException;
import android.hardware.camera2.CameraCharacteristics;
import android.hardware.camera2.CameraManager;
import android.os.Build;
import android.util.Log;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.PermissionHelper;
import org.apache.cordova.PluginResult;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.IOException;
import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import com.beatone.sdk.BOConstants;
import com.beatone.sdk.BOManager;
import com.beatone.sdk.listeners.BOConnectionListener;
import com.beatone.sdk.listeners.BO1963YHListener;
import com.beatone.sdk.model.BOAlarmData;
import com.beatone.sdk.model.BODetailedStepData;
import com.beatone.sdk.model.BODeviceParameters;
import com.beatone.sdk.model.BOHRVData;
import com.beatone.sdk.model.BOHeartRateData;
import com.beatone.sdk.model.BOOxygenData;
import com.beatone.sdk.model.BORealTimeStepData;
import com.beatone.sdk.model.BOSingleHeartRateData;
import com.beatone.sdk.model.BOSleepData;
import com.beatone.sdk.model.BOSportData;
import com.beatone.sdk.model.BOStepData;
import com.beatone.sdk.model.BOTemperatureData;
import com.beatone.sdk.model.BOTime;
import com.beatone.sdk.model.BOUserInformation;
import com.beatone.sdk.model.BOWeekEnabler;
import com.google.gson.JsonObject;

import es.lifevit.sdk.LifevitSDKConstants;
import es.lifevit.sdk.LifevitSDKDeviceScanData;
import es.lifevit.sdk.LifevitSDKHeartData;
import es.lifevit.sdk.LifevitSDKManager;
import es.lifevit.sdk.bracelet.LifevitSDKHeartbeatData;
import es.lifevit.sdk.bracelet.LifevitSDKSleepData;
import es.lifevit.sdk.bracelet.LifevitSDKStepData;
import es.lifevit.sdk.listeners.LifevitSDKAllDevicesListener;
import es.lifevit.sdk.listeners.LifevitSDKBraceletListener;
import es.lifevit.sdk.listeners.LifevitSDKDeviceListener;
import es.lifevit.sdk.listeners.LifevitSDKHeartListener;


import static com.beatone.sdk.BOConstants.DEVICE_1963YH;

public class BeatOnePlugin extends CordovaPlugin {
  BOManager beatOneSDKManager;
  LifevitSDKHeartListener hListener;
  LifevitSDKManager lifevitSDKManager;
  private static final String ACTION_CONNECTBO = "connectBeatOne";
  private static final String ACTION_GETSTEPS= "getSteps";
  private static final String ACTION_GETHEART= "getHeart";
  private static final String ACTION_CONNECTENSIOMETER = "connecTensiometer";
  private static final String ACTION_STARTMEASUREMENT = "startMeasurement";
  private static final String ACTION_GETHRVDATA = "getHrvData";
  private static final String ACTION_DESCONNECTBO = "desconnectDevice";



  @SuppressWarnings("deprecation")
  private CallbackContext callbackContext;

  @Override
  public boolean execute(final String action, final JSONArray args, final CallbackContext callbackContext) throws JSONException {
    Log.d("BeatOnePlugin", "Plugin Called: " + action);
    this.callbackContext = callbackContext;

    try {
      if (action.equals(ACTION_CONNECTBO))
      {

        JSONObject ret = new JSONObject();
        beatOneSDKManager = new BOManager(cordova.getContext());
        BOConnectionListener boConnectionListener = new BOConnectionListener() {
          @Override
          public void deviceOnConnectionError(int i, int i1) {
            callbackContext.success("error " + i1);
          }

          @Override
          public void deviceOnConnectionChanged(int i, int i1) {
            if (i1 == 2) {

                callbackContext.success("estatus " + i1);

            }
            if (i1 == -1) {
              callbackContext.success("estatus " + i1);
            }
          }
        };

        beatOneSDKManager.addDeviceListener(boConnectionListener);
        beatOneSDKManager.connectDevice(DEVICE_1963YH, 30000,args.getString(0));

        return true;
      }
      else if (action.equals(ACTION_GETSTEPS))
      {
        JSONObject res = new JSONObject();
        ArrayList<JsonObject> arr = new ArrayList<>();
        BO1963YHListener devicelistener = new BO1963YHListener() {

          @Override
          public void onGetTimeResponse(boolean b, @NotNull Date date) {

          }

          @Override
          public void onGetTemperatureDataResponse(boolean b, @NotNull List<BOTemperatureData> list) {

          }

          @Override
          public void onGetTargetStepsResponse(boolean b, int i) {

          }

          @Override
          public void onGetSportsDataResponse(boolean b, @NotNull List<BOSportData> list) {

          }

          @Override
          public void onGetSoftwareVersionNumberResponse(boolean b, @NotNull String s, @NotNull Date date) {

          }

          @Override
          public void onGetSocialDistanceReminderResponse(boolean b, int i, int i1, int i2) {

          }

          @Override
          public void onGetSingleHeartRateDataResponse(boolean b, @NotNull List<? extends BOSingleHeartRateData> list) {

          }

          @Override
          public void onGetMACAddressResponse(boolean b, @NotNull String s) {

          }

          @Override
          public void onGetHeartRateDataResponse(boolean b, @NotNull List<BOHeartRateData> list) {

          }

          @Override
          public void onGetHRVDataResponse(boolean b, @NotNull List<? extends BOHRVData> list) {

          }

          @Override
          public void onGetDeviceParametersResponse(boolean b, @NotNull BODeviceParameters boDeviceParameters) {

          }

          @Override
          public void onGetDeviceBatteryResponse(boolean b, int i) {

          }

          @Override
          public void onGetDetailedStepsDataResponse(boolean b, @NotNull List<BODetailedStepData> list) {

          }

          @Override
          public void onGetDetailedSleepDataResponse(boolean b, @NotNull List<BOSleepData> list) {

          }

          @Override
          public void onGetBloodOxygenDataResponse(boolean b, @NotNull List<BOOxygenData> list) {

          }

          @Override
          public void onGetAutomaticHeartRateDetectionPeriodResponse(boolean b, @NotNull BOConstants.DeviceAutomaticWorkingMode deviceAutomaticWorkingMode, @NotNull BOTime boTime, @NotNull BOTime boTime1, @NotNull BOWeekEnabler boWeekEnabler, int i) {

          }

          @Override
          public void onGetAutomaticBloodOxygenDetectionPeriodResponse(boolean b, @NotNull BOConstants.DeviceAutomaticWorkingMode deviceAutomaticWorkingMode, @NotNull BOTime boTime, @NotNull BOTime boTime1, @NotNull BOWeekEnabler boWeekEnabler, int i) {

          }

          @Override
          public void onGetAlarmDataResponse(boolean b, @NotNull List<BOAlarmData> list) {

          }

          @Override
          public void onGetActivityPeriodResponse(boolean b, @NotNull BOTime boTime, @NotNull BOTime boTime1, @NotNull BOWeekEnabler boWeekEnabler, int i, int i1, boolean b1) {

          }

          @Override
          public void onFirmwareCommandReceived(boolean b, @NotNull BOConstants.DeviceFirmwareCommand deviceFirmwareCommand, boolean b1) {

          }

          @Override
          public void onErrorReceived(@NotNull BOConstants.CommandIdentifiers commandIdentifiers, @Nullable Object o) {

          }

          @Override
          public void onClearHistoricalSportDataResponse(boolean b) {

          }

          @Override
          public void onSportModeControlEnableResponse(boolean b) {

          }

          @Override
          public void onSetUserPersonalInformationResponse(boolean b) {

          }

          @Override
          public void onSetUpdateWeatherStatusResponse(boolean b) {

          }

          @Override
          public void onSetTimeResponse(boolean b) {

          }

          @Override
          public void onSetTargetStepsResponse(boolean b) {

          }

          @Override
          public void onSetSocialDistanceReminderResponse(boolean b, int i, int i1, int i2) {

          }

          @Override
          public void onSetRealTimeStepModeResponse(boolean b, @NotNull BORealTimeStepData boRealTimeStepData) {

          }

          @Override
          public void onSetPhotoModeResponse(boolean b) {

          }

          @Override
          public void onSetNotificationResponse(boolean b) {

          }

          @Override
          public void onSetMCUResetResponse(boolean b) {

          }

          @Override
          public void onSetFactoryResetResponse(boolean b) {

          }

          @Override
          public void onSetDeviceParametersResponse(boolean b) {

          }

          @Override
          public void onSetDeviceIDCodeResponse(boolean b) {

          }

          @Override
          public void onSetAutomaticHeartRateDetectionPeriodResponse(boolean b) {

          }

          @Override
          public void onSetAutomaticBloodOxygenDetectionPeriodResponse(boolean b) {

          }

          @Override
          public void onSetAlarmResponse(boolean b, int i, int i1) {

          }

          @Override
          public void onSetActivityPeriodResponse(boolean b) {

          }

          @Override
          public void onProcessSOSFunctionReceived() {

          }

          @Override
          public void onHeartBeatPacketSent(boolean b) {

          }

          @Override
          public void onHeartBeatPacketReceived(boolean b, boolean b1, int i, int i1, int i2, int i3) {

          }

          @Override
          public void onGetUserPersonalInformationResponse(boolean b, @NotNull BOUserInformation boUserInformation) {

          }

          @Override
          public void onGetTotalStepsDataResponse(boolean b, @NotNull List<? extends BOStepData> pasos) {


            for (int i = 0; i < pasos.size(); i++) {
              BOStepData pasoss = pasos.get(i);
              System.out.println("pasos fecha " + pasoss.getDate());
              System.out.println("pasos steps " + pasoss.getSteps());
              JsonObject ret = new JsonObject();

              ret.addProperty("date", pasoss.getDate().toString());
              ret.addProperty("steps", pasoss.getSteps());
              arr.add(ret);
              System.out.println(" steps 3u " + arr);


            }
            callbackContext.success(arr.toString());
            System.out.println(" steps 4 " + res);


          }
        };
        beatOneSDKManager.setBo1963YHListener(devicelistener);
        beatOneSDKManager.getTotalStepsData(BOConstants.DeviceDataAction.READ_MOST_RECENT);
        return true;
      }
      else if (action.equals(ACTION_GETHRVDATA))
      {
        JSONObject res = new JSONObject();
        ArrayList<JsonObject> arr = new ArrayList<>();
        BO1963YHListener devicelistener = new BO1963YHListener() {

          @Override
          public void onGetTimeResponse(boolean b, @NotNull Date date) {

          }

          @Override
          public void onGetTemperatureDataResponse(boolean b, @NotNull List<BOTemperatureData> list) {

          }

          @Override
          public void onGetTargetStepsResponse(boolean b, int i) {

          }

          @Override
          public void onGetSportsDataResponse(boolean b, @NotNull List<BOSportData> list) {

          }

          @Override
          public void onGetSoftwareVersionNumberResponse(boolean b, @NotNull String s, @NotNull Date date) {

          }

          @Override
          public void onGetSocialDistanceReminderResponse(boolean b, int i, int i1, int i2) {

          }

          @Override
          public void onGetSingleHeartRateDataResponse(boolean b, @NotNull List<? extends BOSingleHeartRateData> list) {

          }

          @Override
          public void onGetMACAddressResponse(boolean b, @NotNull String s) {

          }

          @Override
          public void onGetHeartRateDataResponse(boolean b, @NotNull List<BOHeartRateData> list) {

          }

          @Override
          public void onGetHRVDataResponse(boolean b, @NotNull List<? extends BOHRVData> list) {


            for (int i = 0; i < list.size(); i++) {
              BOHRVData tension = list.get(i);
              JsonObject ret = new JsonObject();
              ret.addProperty("date",  tension.getDate().toString());
              ret.addProperty("sis", tension.getHighBloodPressure());
              ret.addProperty("dias", tension.getLowBloodPressure());
              arr.add(ret);
              System.out.println(" steps 3u " + arr);


            }
            callbackContext.success(arr.toString());
           }

          @Override
          public void onGetDeviceParametersResponse(boolean b, @NotNull BODeviceParameters boDeviceParameters) {

          }

          @Override
          public void onGetDeviceBatteryResponse(boolean b, int i) {

          }

          @Override
          public void onGetDetailedStepsDataResponse(boolean b, @NotNull List<BODetailedStepData> list) {

          }

          @Override
          public void onGetDetailedSleepDataResponse(boolean b, @NotNull List<BOSleepData> list) {

          }

          @Override
          public void onGetBloodOxygenDataResponse(boolean b, @NotNull List<BOOxygenData> list) {

          }

          @Override
          public void onGetAutomaticHeartRateDetectionPeriodResponse(boolean b, @NotNull BOConstants.DeviceAutomaticWorkingMode deviceAutomaticWorkingMode, @NotNull BOTime boTime, @NotNull BOTime boTime1, @NotNull BOWeekEnabler boWeekEnabler, int i) {

          }

          @Override
          public void onGetAutomaticBloodOxygenDetectionPeriodResponse(boolean b, @NotNull BOConstants.DeviceAutomaticWorkingMode deviceAutomaticWorkingMode, @NotNull BOTime boTime, @NotNull BOTime boTime1, @NotNull BOWeekEnabler boWeekEnabler, int i) {

          }

          @Override
          public void onGetAlarmDataResponse(boolean b, @NotNull List<BOAlarmData> list) {

          }

          @Override
          public void onGetActivityPeriodResponse(boolean b, @NotNull BOTime boTime, @NotNull BOTime boTime1, @NotNull BOWeekEnabler boWeekEnabler, int i, int i1, boolean b1) {

          }

          @Override
          public void onFirmwareCommandReceived(boolean b, @NotNull BOConstants.DeviceFirmwareCommand deviceFirmwareCommand, boolean b1) {

          }

          @Override
          public void onErrorReceived(@NotNull BOConstants.CommandIdentifiers commandIdentifiers, @Nullable Object o) {

          }

          @Override
          public void onClearHistoricalSportDataResponse(boolean b) {

          }

          @Override
          public void onSportModeControlEnableResponse(boolean b) {

          }

          @Override
          public void onSetUserPersonalInformationResponse(boolean b) {

          }

          @Override
          public void onSetUpdateWeatherStatusResponse(boolean b) {

          }

          @Override
          public void onSetTimeResponse(boolean b) {

          }

          @Override
          public void onSetTargetStepsResponse(boolean b) {

          }

          @Override
          public void onSetSocialDistanceReminderResponse(boolean b, int i, int i1, int i2) {

          }

          @Override
          public void onSetRealTimeStepModeResponse(boolean b, @NotNull BORealTimeStepData boRealTimeStepData) {

          }

          @Override
          public void onSetPhotoModeResponse(boolean b) {

          }

          @Override
          public void onSetNotificationResponse(boolean b) {

          }

          @Override
          public void onSetMCUResetResponse(boolean b) {

          }

          @Override
          public void onSetFactoryResetResponse(boolean b) {

          }

          @Override
          public void onSetDeviceParametersResponse(boolean b) {

          }

          @Override
          public void onSetDeviceIDCodeResponse(boolean b) {

          }

          @Override
          public void onSetAutomaticHeartRateDetectionPeriodResponse(boolean b) {

          }

          @Override
          public void onSetAutomaticBloodOxygenDetectionPeriodResponse(boolean b) {

          }

          @Override
          public void onSetAlarmResponse(boolean b, int i, int i1) {

          }

          @Override
          public void onSetActivityPeriodResponse(boolean b) {

          }

          @Override
          public void onProcessSOSFunctionReceived() {

          }

          @Override
          public void onHeartBeatPacketSent(boolean b) {

          }

          @Override
          public void onHeartBeatPacketReceived(boolean b, boolean b1, int i, int i1, int i2, int i3) {

          }

          @Override
          public void onGetUserPersonalInformationResponse(boolean b, @NotNull BOUserInformation boUserInformation) {

          }

          @Override
          public void onGetTotalStepsDataResponse(boolean b, @NotNull List<? extends BOStepData> pasos) {



          }
        };
        beatOneSDKManager.setBo1963YHListener(devicelistener);
        beatOneSDKManager.getHRVData(BOConstants.DeviceDataAction.READ_MOST_RECENT,null);
        return true;
      }
      else if (action.equals(ACTION_DESCONNECTBO))
      {
        JSONObject res = new JSONObject();
        ArrayList<JsonObject> arr = new ArrayList<>();
        BO1963YHListener devicelistener = new BO1963YHListener() {

          @Override
          public void onGetTimeResponse(boolean b, @NotNull Date date) {

          }

          @Override
          public void onGetTemperatureDataResponse(boolean b, @NotNull List<BOTemperatureData> list) {

          }

          @Override
          public void onGetTargetStepsResponse(boolean b, int i) {

          }

          @Override
          public void onGetSportsDataResponse(boolean b, @NotNull List<BOSportData> list) {

          }

          @Override
          public void onGetSoftwareVersionNumberResponse(boolean b, @NotNull String s, @NotNull Date date) {

          }

          @Override
          public void onGetSocialDistanceReminderResponse(boolean b, int i, int i1, int i2) {

          }

          @Override
          public void onGetSingleHeartRateDataResponse(boolean b, @NotNull List<? extends BOSingleHeartRateData> list) {

          }

          @Override
          public void onGetMACAddressResponse(boolean b, @NotNull String s) {

          }

          @Override
          public void onGetHeartRateDataResponse(boolean b, @NotNull List<BOHeartRateData> list) {

          }

          @Override
          public void onGetHRVDataResponse(boolean b, @NotNull List<? extends BOHRVData> list) {

          }

          @Override
          public void onGetDeviceParametersResponse(boolean b, @NotNull BODeviceParameters boDeviceParameters) {

          }

          @Override
          public void onGetDeviceBatteryResponse(boolean b, int i) {

          }

          @Override
          public void onGetDetailedStepsDataResponse(boolean b, @NotNull List<BODetailedStepData> list) {

          }

          @Override
          public void onGetDetailedSleepDataResponse(boolean b, @NotNull List<BOSleepData> list) {

          }

          @Override
          public void onGetBloodOxygenDataResponse(boolean b, @NotNull List<BOOxygenData> list) {

          }

          @Override
          public void onGetAutomaticHeartRateDetectionPeriodResponse(boolean b, @NotNull BOConstants.DeviceAutomaticWorkingMode deviceAutomaticWorkingMode, @NotNull BOTime boTime, @NotNull BOTime boTime1, @NotNull BOWeekEnabler boWeekEnabler, int i) {

          }

          @Override
          public void onGetAutomaticBloodOxygenDetectionPeriodResponse(boolean b, @NotNull BOConstants.DeviceAutomaticWorkingMode deviceAutomaticWorkingMode, @NotNull BOTime boTime, @NotNull BOTime boTime1, @NotNull BOWeekEnabler boWeekEnabler, int i) {

          }

          @Override
          public void onGetAlarmDataResponse(boolean b, @NotNull List<BOAlarmData> list) {

          }

          @Override
          public void onGetActivityPeriodResponse(boolean b, @NotNull BOTime boTime, @NotNull BOTime boTime1, @NotNull BOWeekEnabler boWeekEnabler, int i, int i1, boolean b1) {

          }

          @Override
          public void onFirmwareCommandReceived(boolean b, @NotNull BOConstants.DeviceFirmwareCommand deviceFirmwareCommand, boolean b1) {

          }

          @Override
          public void onErrorReceived(@NotNull BOConstants.CommandIdentifiers commandIdentifiers, @Nullable Object o) {

          }

          @Override
          public void onClearHistoricalSportDataResponse(boolean b) {

          }

          @Override
          public void onSportModeControlEnableResponse(boolean b) {

          }

          @Override
          public void onSetUserPersonalInformationResponse(boolean b) {

          }

          @Override
          public void onSetUpdateWeatherStatusResponse(boolean b) {

          }

          @Override
          public void onSetTimeResponse(boolean b) {

          }

          @Override
          public void onSetTargetStepsResponse(boolean b) {

          }

          @Override
          public void onSetSocialDistanceReminderResponse(boolean b, int i, int i1, int i2) {

          }

          @Override
          public void onSetRealTimeStepModeResponse(boolean b, @NotNull BORealTimeStepData boRealTimeStepData) {

          }

          @Override
          public void onSetPhotoModeResponse(boolean b) {

          }

          @Override
          public void onSetNotificationResponse(boolean b) {

          }

          @Override
          public void onSetMCUResetResponse(boolean b) {

          }

          @Override
          public void onSetFactoryResetResponse(boolean b) {

          }

          @Override
          public void onSetDeviceParametersResponse(boolean b) {

          }

          @Override
          public void onSetDeviceIDCodeResponse(boolean b) {

          }

          @Override
          public void onSetAutomaticHeartRateDetectionPeriodResponse(boolean b) {

          }

          @Override
          public void onSetAutomaticBloodOxygenDetectionPeriodResponse(boolean b) {

          }

          @Override
          public void onSetAlarmResponse(boolean b, int i, int i1) {

          }

          @Override
          public void onSetActivityPeriodResponse(boolean b) {

          }

          @Override
          public void onProcessSOSFunctionReceived() {

          }

          @Override
          public void onHeartBeatPacketSent(boolean b) {

          }

          @Override
          public void onHeartBeatPacketReceived(boolean b, boolean b1, int i, int i1, int i2, int i3) {

          }

          @Override
          public void onGetUserPersonalInformationResponse(boolean b, @NotNull BOUserInformation boUserInformation) {

          }

          @Override
          public void onGetTotalStepsDataResponse(boolean b, @NotNull List<? extends BOStepData> pasos) {



          }
        };
        beatOneSDKManager.setBo1963YHListener(devicelistener);
        beatOneSDKManager.disconnectDevice(DEVICE_1963YH);
        callbackContext.success("true");
        return true;
      }
      else if(action.equals(ACTION_CONNECTENSIOMETER))
      {
        JSONObject res = new JSONObject();
        ArrayList<JsonObject> arr = new ArrayList<>();
        lifevitSDKManager = new LifevitSDKManager(cordova.getContext());
        LifevitSDKDeviceListener cl = new LifevitSDKDeviceListener() {

          @Override
          public void deviceOnConnectionError(int i, int i1) {
            callbackContext.success("error "+ i1);
          }

          @Override
          public void deviceOnConnectionChanged(int i, int i1) {

            if(i1==2){

              callbackContext.success("estatus "+i1);

            }
            if(i1==-1){
              callbackContext.success("estatus "+i1);
            }
          }
        };


        lifevitSDKManager.addDeviceListener(cl);
        lifevitSDKManager.connectDevice(LifevitSDKConstants.DEVICE_TENSIOMETER, 10000);


        return true;
      }
      else if (action.equals(ACTION_STARTMEASUREMENT))
      {
        JsonObject ret = new JsonObject();

        hListener = new LifevitSDKHeartListener() {


          @Override
          public void heartDeviceOnProgressMeasurement(int i) {
            Log.i("aaaaaa3 ", Integer.toString(i));
          }

          @Override
          public void heartDeviceOnBatteryResult(int i) {
            Log.i("aaaaaa2 ", Integer.toString(i));
          }

          @Override
          public void heartDeviceOnResult(LifevitSDKHeartData lifevitSDKHeartData) {
            ret.addProperty("pulso", lifevitSDKHeartData.getPulse());
            ret.addProperty("dia", lifevitSDKHeartData.getDiastolic());
            ret.addProperty("sys", lifevitSDKHeartData.getSystolic());
            callbackContext.success(ret.toString());
          }

        };
        lifevitSDKManager.setHeartListener(hListener);
        lifevitSDKManager.startMeasurement();


        return  true;
      }
      else if(action.equals(ACTION_GETHEART))
      {
        JSONObject res = new JSONObject();
        ArrayList<JsonObject> arr = new ArrayList<>();
        BO1963YHListener devicelistener=new  BO1963YHListener(){

          @Override
          public void onSportModeControlEnableResponse(boolean b) {

          }

          @Override
          public void onSetUserPersonalInformationResponse(boolean b) {

          }

          @Override
          public void onSetUpdateWeatherStatusResponse(boolean b) {

          }

          @Override
          public void onSetTimeResponse(boolean b) {

          }

          @Override
          public void onSetTargetStepsResponse(boolean b) {

          }

          @Override
          public void onSetSocialDistanceReminderResponse(boolean b, int i, int i1, int i2) {

          }

          @Override
          public void onSetRealTimeStepModeResponse(boolean b, @NotNull BORealTimeStepData boRealTimeStepData) {

          }

          @Override
          public void onSetPhotoModeResponse(boolean b) {

          }

          @Override
          public void onSetNotificationResponse(boolean b) {

          }

          @Override
          public void onSetMCUResetResponse(boolean b) {

          }

          @Override
          public void onSetFactoryResetResponse(boolean b) {

          }

          @Override
          public void onSetDeviceParametersResponse(boolean b) {

          }

          @Override
          public void onSetDeviceIDCodeResponse(boolean b) {

          }

          @Override
          public void onSetAutomaticHeartRateDetectionPeriodResponse(boolean b) {

          }

          @Override
          public void onSetAutomaticBloodOxygenDetectionPeriodResponse(boolean b) {

          }

          @Override
          public void onSetAlarmResponse(boolean b, int i, int i1) {

          }

          @Override
          public void onSetActivityPeriodResponse(boolean b) {

          }

          @Override
          public void onProcessSOSFunctionReceived() {

          }

          @Override
          public void onHeartBeatPacketSent(boolean b) {

          }

          @Override
          public void onHeartBeatPacketReceived(boolean b, boolean b1, int i, int i1, int i2, int i3) {

          }

          @Override
          public void onGetUserPersonalInformationResponse(boolean b, @NotNull BOUserInformation boUserInformation) {

          }

          @Override
          public void onGetTotalStepsDataResponse(boolean b, @NotNull List<? extends BOStepData> pasos) {

          }

          @Override
          public void onGetTimeResponse(boolean b, @NotNull Date date) {

          }

          @Override
          public void onGetTemperatureDataResponse(boolean b, @NotNull List<BOTemperatureData> list) {

          }

          @Override
          public void onGetTargetStepsResponse(boolean b, int i) {

          }

          @Override
          public void onGetSportsDataResponse(boolean b, @NotNull List<BOSportData> list) {

          }

          @Override
          public void onGetSoftwareVersionNumberResponse(boolean b, @NotNull String s, @NotNull Date date) {

          }

          @Override
          public void onGetSocialDistanceReminderResponse(boolean b, int i, int i1, int i2) {

          }

          @Override
          public void onGetSingleHeartRateDataResponse(boolean b, @NotNull List<? extends BOSingleHeartRateData> list) {

          }

          @Override
          public void onGetMACAddressResponse(boolean b, @NotNull String s) {

          }

          @Override
          public void onGetHeartRateDataResponse(boolean b, @NotNull List<BOHeartRateData> list) {
            for (int i = 0; i < list.size(); i++) {
              BOHeartRateData pulso=list.get(i);
              System.out.println("pulso fecha "+ pulso.getDate());
              System.out.println("pulso steps "+ pulso.getHeartRateEveryMinute());




            }

            for (int i = 0; i < list.size(); i++) {
              BOHeartRateData heart = list.get(i);
              JsonObject ret = new JsonObject();

              ret.addProperty("date", heart.getDate().toString());
              ret.addProperty("pulso", heart.getHeartRateEveryMinute().toString());
              arr.add(ret);



            }
            callbackContext.success(arr.toString());
          }

          @Override
          public void onGetHRVDataResponse(boolean b, @NotNull List<? extends BOHRVData> list) {

          }

          @Override
          public void onGetDeviceParametersResponse(boolean b, @NotNull BODeviceParameters boDeviceParameters) {

          }

          @Override
          public void onGetDeviceBatteryResponse(boolean b, int i) {

          }

          @Override
          public void onGetDetailedStepsDataResponse(boolean b, @NotNull List<BODetailedStepData> list) {

          }

          @Override
          public void onGetDetailedSleepDataResponse(boolean b, @NotNull List<BOSleepData> list) {

          }

          @Override
          public void onGetBloodOxygenDataResponse(boolean b, @NotNull List<BOOxygenData> list) {

          }

          @Override
          public void onGetAutomaticHeartRateDetectionPeriodResponse(boolean b, @NotNull BOConstants.DeviceAutomaticWorkingMode deviceAutomaticWorkingMode, @NotNull BOTime boTime, @NotNull BOTime boTime1, @NotNull BOWeekEnabler boWeekEnabler, int i) {

          }

          @Override
          public void onGetAutomaticBloodOxygenDetectionPeriodResponse(boolean b, @NotNull BOConstants.DeviceAutomaticWorkingMode deviceAutomaticWorkingMode, @NotNull BOTime boTime, @NotNull BOTime boTime1, @NotNull BOWeekEnabler boWeekEnabler, int i) {

          }

          @Override
          public void onGetAlarmDataResponse(boolean b, @NotNull List<BOAlarmData> list) {

          }

          @Override
          public void onGetActivityPeriodResponse(boolean b, @NotNull BOTime boTime, @NotNull BOTime boTime1, @NotNull BOWeekEnabler boWeekEnabler, int i, int i1, boolean b1) {

          }

          @Override
          public void onFirmwareCommandReceived(boolean b, @NotNull BOConstants.DeviceFirmwareCommand deviceFirmwareCommand, boolean b1) {

          }

          @Override
          public void onErrorReceived(@NotNull BOConstants.CommandIdentifiers commandIdentifiers, @Nullable Object o) {

          }

          @Override
          public void onClearHistoricalSportDataResponse(boolean b) {

          }
        };
        beatOneSDKManager.setBo1963YHListener(devicelistener);

        beatOneSDKManager.getHeartRateData(BOConstants.DeviceDataAction.READ_MOST_RECENT, 1);

        return true;
      }
        else
      {
        callbackContext.success("BeatOnePlugin." + action + " is not a supported function.");
        Log.i("BeatOnePluginerror", action);
        return true;
      }
    }catch (Exception e) {
      callbackContext.success(e.getMessage());
      Log.i("BeatOnePluginerror",e.getMessage());
      return false;
    }
  }




}
