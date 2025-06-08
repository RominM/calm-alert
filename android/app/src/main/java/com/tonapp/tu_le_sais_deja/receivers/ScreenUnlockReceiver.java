package com.tonapp.tu_le_sais_deja.receivers;

import android.app.AlarmManager;
import android.app.PendingIntent;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.os.Build;
import android.os.SystemClock;
import android.util.Log;

import com.tonapp.tu_le_sais_deja.services.MyTimerService;

public class ScreenUnlockReceiver extends BroadcastReceiver {
    @Override
    public void onReceive(Context context, Intent intent) {
        String action = intent.getAction();
        Log.d("ScreenUnlockReceiver", "onReceive");
        if (Intent.ACTION_USER_PRESENT.equals(action)) {
            Log.d("ScreenUnlockReceiver", "USER_PRESENT → lancement du service + timer");

            // Lancer le service
            Intent serviceIntent = new Intent(context, MyTimerService.class);
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
                context.startForegroundService(serviceIntent);
            } else {
                context.startService(serviceIntent);
            }

            // Planifier le timer (ancienne logique d'UnlockReceiver)
            Intent timerIntent = new Intent(context, TimerNotificationReceiver.class);
            PendingIntent pendingIntent = PendingIntent.getBroadcast(
                    context,
                    0,
                    timerIntent,
                    PendingIntent.FLAG_UPDATE_CURRENT | PendingIntent.FLAG_IMMUTABLE
            );

            AlarmManager alarmManager = (AlarmManager) context.getSystemService(Context.ALARM_SERVICE);
            if (alarmManager != null) {
                alarmManager.setExactAndAllowWhileIdle(
                        AlarmManager.ELAPSED_REALTIME_WAKEUP,
                        SystemClock.elapsedRealtime() + 30_000,
                        pendingIntent
                );
            }
        }

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
