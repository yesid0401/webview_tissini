package app.tissini.webview_tissini;

import android.os.Bundle;

import com.getcapacitor.BridgeActivity;
import com.getcapacitor.Plugin;
import com.pusher.pushnotifications.PushNotifications;


import java.util.ArrayList;

public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    PushNotifications.start(getApplicationContext(), "d6c86a48-12cf-486a-bcef-7699a38936a9");
    PushNotifications.addDeviceInterest("hello");
    // Initializes the Bridge
    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
      // Additional plugins you've installed go here
      // Ex: add(TotallyAwesomePlugin.class);
    }});


  }
}
