package com.tissini.webapp;

import android.os.Bundle;

import com.getcapacitor.BridgeActivity;
import com.getcapacitor.Plugin;

import java.util.ArrayList;
import com.google.firebase.messaging.RemoteMessage;

import com.pusher.pushnotifications.PushNotifications;
import com.pusher.pushnotifications.PushNotificationReceivedListener;

import app.tissini.pusherBeams.PusherBeamsPlugin;

public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    PushNotifications.start(getApplicationContext(), "c5b50bd9-f225-4b64-9352-b9851a952b1f");
    PushNotifications.addDeviceInterest("general");

    PushNotifications.setOnMessageReceivedListenerForVisibleActivity(this, new PushNotificationReceivedListener() {
      @Override
      public void onMessageReceived(RemoteMessage remoteMessage) {
        com.getcapacitor.plugin.PushNotifications.sendRemoteMessage(remoteMessage);
      }
    });


    // Initializes the Bridge
    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
      // Additional plugins you've installed go here
      // Ex: add(TotallyAwesomePlugin.class);
      add(PusherBeamsPlugin.class);
    }});
  }
}
