package com.tonapp.tu_le_sais_deja.worker

class MyTimerWorker(context: Context, params: WorkerParameters) : Worker(context, params) {

    override fun doWork(): Result {
        Log.d("MyTimerWorker", "Travail déclenché : envoi notification")

        val notification = NotificationCompat.Builder(applicationContext, "calmalert_channel")
            .setSmallIcon(android.R.drawable.ic_lock_idle_alarm)
            .setContentTitle("CalmAlert actif")
            .setContentText("Tu es sur ton téléphone depuis 30 secondes !")
            .setPriority(NotificationCompat.PRIORITY_HIGH)
            .build()

        val manager = applicationContext.getSystemService(Context.NOTIFICATION_SERVICE) as NotificationManager
        manager.notify(Random().nextInt(), notification)

        return Result.success()
    }
}
