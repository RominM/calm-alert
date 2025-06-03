package com.tonapp.tu_le_sais_deja.receivers;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.os.Build;

import com.tonapp.tu_le_sais_deja.services.MyTimerService;

public class ScreenUnlockReceiver extends BroadcastReceiver {
    @Override
    public void onReceive(Context context, Intent intent) {
        String action = intent.getAction();

        if (
            Intent.ACTION_USER_PRESENT.equals(action) ||
            Intent.ACTION_SCREEN_ON.equals(action) ||
            Intent.ACTION_BOOT_COMPLETED.equals(action)
        ) {
            Intent serviceIntent = new Intent(context, MyTimerService.class);
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
                context.startForegroundService(serviceIntent);
            } else {
                context.startService(serviceIntent);
            }
        }
    }
}
