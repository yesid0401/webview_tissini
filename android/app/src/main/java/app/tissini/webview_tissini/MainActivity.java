package app.tissini.webview_tissini;

import android.os.Bundle;
import android.util.Log;

import com.getcapacitor.BridgeActivity;
import com.getcapacitor.Plugin;

import com.google.firebase.messaging.RemoteMessage;
import com.pusher.pushnotifications.PushNotificationReceivedListener;
import com.pusher.pushnotifications.PushNotifications;
import com.pusher.pushnotifications.PushNotificationsInstance;


import java.util.ArrayList;

public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    PushNotifications.start(getApplicationContext(), "d6c86a48-12cf-486a-bcef-7699a38936a9");
    PushNotifications.addDeviceInterest("hello");
    PushNotifications.setOnMessageReceivedListenerForVisibleActivity(this, new PushNotificationReceivedListener() {
      @Override
      public void onMessageReceived(RemoteMessage remoteMessage) {
        // do something magical 🔮

        if (remoteMessage.getData().size() > 0) {
          System.out.println("Message data payload: " + remoteMessage.getData());
        }

        if (remoteMessage.getNotification() != null) {
          System.out.println("Message notification payload: " + remoteMessage.getNotification().getBody());

        }
      }
    });


    // Initializes the Bridge
    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
      // Additional plugins you've installed go here
      // Ex: add(TotallyAwesomePlugin.class);
    }});


  }
}
