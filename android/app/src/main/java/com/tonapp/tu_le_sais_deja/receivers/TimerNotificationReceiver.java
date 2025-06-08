package com.tonapp.tu_le_sais_deja.receivers;

import android.app.AlarmManager;
import android.app.PendingIntent;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.os.SystemClock;
import android.util.Log;

public class TimerNotificationReceiver extends BroadcastReceiver {
    @Override
    public void onReceive(Context context, Intent intent) {
        Log.d("TimerNotification", "Notification déclenchée");

        // Crée et affiche une notification (ou autre logique)
        // Ici tu peux aussi redémarrer une alarme si tu veux une répétition

        // Exemple de redémarrage toutes les 30 secondes :
        Intent nextIntent = new Intent(context, TimerNotificationReceiver.class);
        PendingIntent nextPendingIntent = PendingIntent.getBroadcast(
                context,
                0,
                nextIntent,
                PendingIntent.FLAG_UPDATE_CURRENT | PendingIntent.FLAG_IMMUTABLE
        );

        AlarmManager alarmManager = (AlarmManager) context.getSystemService(Context.ALARM_SERVICE);
        if (alarmManager != null) {
            alarmManager.setExactAndAllowWhileIdle(
                    AlarmManager.ELAPSED_REALTIME_WAKEUP,
                    SystemClock.elapsedRealtime() + 30_000,
                    nextPendingIntent
            );
        }
    }
}
