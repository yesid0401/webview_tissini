package app.tissini.webview_tissini;

import android.os.Bundle;
import android.util.Log;

import com.getcapacitor.BridgeActivity;
import com.getcapacitor.Plugin;

import com.google.firebase.messaging.RemoteMessage;

import com.pusher.pushnotifications.PushNotificationReceivedListener;
import com.pusher.pushnotifications.PushNotifications;
import com.pusher.pushnotifications.PushNotificationsInstance;
import com.getcapacitor.community.fcm.FCMPlugin;

import java.util.ArrayList;
import app.tissini.pusherBeams.PusherBeamsPlugin;


public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    PushNotifications.start(getApplicationContext(), "d6c86a48-12cf-486a-bcef-7699a38936a9");
    PushNotifications.addDeviceInterest("hello");

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
      add(FCMPlugin.class);

    }});


  }
}
