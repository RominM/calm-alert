package com.tonapp.tu_le_sais_deja.receivers;

import android.app.AlarmManager;
import android.app.PendingIntent;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.os.SystemClock;
import android.util.Log;

public class UnlockReceiver extends BroadcastReceiver {
    @Override
    public void onReceive(Context context, Intent intent) {
        Intent testIntent = new Intent(context, TimerNotificationReceiver.class);
        context.sendBroadcast(testIntent);

        if (Intent.ACTION_USER_PRESENT.equals(intent.getAction())) {
            Log.d("UnlockReceiver", "Déverrouillage détecté → démarrage du timer");

            // Crée l'intent qui déclenchera le timer
            Intent timerIntent = new Intent(context, TimerNotificationReceiver.class);
            PendingIntent pendingIntent = PendingIntent.getBroadcast(
                    context,
                    0,
                    timerIntent,
                    PendingIntent.FLAG_UPDATE_CURRENT | PendingIntent.FLAG_IMMUTABLE
            );

            // Planifie la première alarme 30 secondes après le déverrouillage
            AlarmManager alarmManager = (AlarmManager) context.getSystemService(Context.ALARM_SERVICE);
            if (alarmManager != null) {
                alarmManager.setExactAndAllowWhileIdle(
                        AlarmManager.ELAPSED_REALTIME_WAKEUP,
                        SystemClock.elapsedRealtime() + 30_000,
                        pendingIntent
                );
            }
        }
    }
}
