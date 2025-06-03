package com.tonapp.tu_le_sais_deja.receivers;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.util.Log;

import com.tonapp.tu_le_sais_deja.services.MyTimerService;

public class UnlockReceiver extends BroadcastReceiver {
    @Override
    public void onReceive(Context context, Intent intent) {
        if (Intent.ACTION_USER_PRESENT.equals(intent.getAction())) {
            Log.d("UnlockReceiver", "User unlocked the device");

            Intent serviceIntent = new Intent(context, MyTimerService.class);
            // Sur Android Oreo+ il faut démarrer le service en foreground ou utiliser JobScheduler
            if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.O) {
                context.startForegroundService(serviceIntent);
            } else {
                context.startService(serviceIntent);
            }
        }
    }
}
