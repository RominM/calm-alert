package com.tonapp.tu_le_sais_deja.services;

import android.annotation.SuppressLint;
import android.app.Notification;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.app.Service;
import android.content.Intent;
import android.os.Build;
import android.os.Handler;
import android.os.IBinder;
import android.os.Looper;
import android.util.Log;

import androidx.annotation.Nullable;
import androidx.core.app.NotificationCompat;

public class MyTimerService extends Service {

    private static final String CHANNEL_ID = "calmalert_channel";
    private Handler handler;
    private Runnable runnable;

    @SuppressLint("ForegroundServiceType")
    @Override
    public int onStartCommand(Intent intent, int flags, int startId) {
        Log.d("MyTimerService", "Service démarré");

        createNotificationChannel();

        Notification notification = new NotificationCompat.Builder(this, CHANNEL_ID)
                .setContentTitle("CalmAlert actif")
                .setContentText("Le timer est en cours.")
                .setSmallIcon(android.R.drawable.ic_lock_idle_alarm)
                .build();

        Log.d("MyTimerService", "BEFORE startForeground");
            startForeground(1, notification);


            Log.d("MyTimerService", "AFTER startForeground");

            handler = new Handler(Looper.getMainLooper());
            runnable = new Runnable() {
                @Override
                public void run() {
                    Log.d("MyTimerService", "Runnable exécuté — Envoi notification");
                    sendNotification("Tu es sur ton téléphone depuis 30 secondes !");
                    handler.postDelayed(this, 30 * 1000);
                }
            };

            handler.postDelayed(runnable, 30 * 1000);

            return START_STICKY;
        }



    @Override
    public void onDestroy() {
        if (handler != null && runnable != null) {
            handler.removeCallbacks(runnable);
        }
        super.onDestroy();
    }

    @Nullable
    @Override
    public IBinder onBind(Intent intent) {
        return null;
    }

    private void sendNotification(String content) {
        try {
            Notification notification = new NotificationCompat.Builder(this, CHANNEL_ID)
                    .setContentTitle("CalmAlert")
                    .setContentText(content)
                    .setSmallIcon(android.R.drawable.ic_lock_idle_alarm)
                    .build();

            NotificationManager manager = (NotificationManager) getSystemService(NOTIFICATION_SERVICE);
            if (manager != null) {
                manager.notify(2, notification);
            }
            Log.d("MyTimerService", "Notification envoyée avec succès");
        } catch (Exception e) {
            Log.e("MyTimerService", "Erreur lors de l'envoi de la notification", e);
        }
    }


    private void createNotificationChannel() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            NotificationChannel channel = new NotificationChannel(
                    CHANNEL_ID,
                    "CalmAlert Notifications",
                    NotificationManager.IMPORTANCE_DEFAULT
            );
            NotificationManager manager = getSystemService(NotificationManager.class);
            if (manager != null) {
                manager.createNotificationChannel(channel);
            }
        }
    }
}
