//package com.mokre
//
//import android.appwidget.AppWidgetManager
//import android.appwidget.AppWidgetProvider
//import android.content.Context
//import android.widget.RemoteViews
//
///**
// * Implementation of App Widget functionality.
// */
//class ApprovalContoh : AppWidgetProvider() {
//    override fun onUpdate(context: Context, appWidgetManager: AppWidgetManager, appWidgetIds: IntArray) {
//        // There may be multiple widgets active, so update all of them
//        for (appWidgetId in appWidgetIds) {
//            updateAppWidget(context, appWidgetManager, appWidgetId)
//        }
//    }
//
//    override fun onEnabled(context: Context) {
//        // Enter relevant functionality for when the first widget is created
//    }
//
//    override fun onDisabled(context: Context) {
//        // Enter relevant functionality for when the last widget is disabled
//    }
//}
//
//internal fun updateAppWidget(context: Context, appWidgetManager: AppWidgetManager, appWidgetId: Int) {
//    val widgetText = context.getString(R.string.appwidget_text)
//    // Construct the RemoteViews object
//    val views = RemoteViews(context.packageName, R.layout.approval_contoh)
//    views.setTextViewText(R.id.appwidget_text, widgetText)
//
//    // Instruct the widget manager to update the widget
//    appWidgetManager.updateAppWidget(appWidgetId, views)
//}
package com.mokre

import android.appwidget.AppWidgetManager
import android.appwidget.AppWidgetProvider
import android.content.Context
import android.content.SharedPreferences
import android.widget.RemoteViews

class ApprovalContoh : AppWidgetProvider() {
    override fun onUpdate(context: Context, appWidgetManager: AppWidgetManager, appWidgetIds: IntArray) {
        for (appWidgetId in appWidgetIds) {
            updateAppWidget(context, appWidgetManager, appWidgetId)
        }
    }

    override fun onEnabled(context: Context) {
        // Fungsi ketika widget pertama kali dibuat
    }

    override fun onDisabled(context: Context) {
        // Fungsi ketika widget terakhir dihapus
    }
}

internal fun updateAppWidget(context: Context, appWidgetManager: AppWidgetManager, appWidgetId: Int) {
    val prefs: SharedPreferences = context.getSharedPreferences("DATA", Context.MODE_PRIVATE)
    val widgetText = prefs.getString("appData", "Approval Layering") ?: "Ini Approval Widget"
    val views = RemoteViews(context.packageName, R.layout.approval_contoh)
    views.setTextViewText(R.id.appwidget_text, widgetText)
    appWidgetManager.updateAppWidget(appWidgetId, views)
}

