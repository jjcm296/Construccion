import {INotification} from "./INotification";

export class NotificationManager {
    private static instance: NotificationManager;
    private notificationHistory: {msg: String, type: String}[] = []

    private constructor() {}

    public static getInstance(): NotificationManager {
        if(!NotificationManager.instance){
            NotificationManager.instance = new NotificationManager();
        }
        return NotificationManager.instance;
    }

    public sendNotification(message: String, notifier: INotification): void {
        notifier.sendNotification(message);
        this.notificationHistory.push({msg: message, type: notifier.constructor.name})
    }

    public getNotificationHistory(): [{msg: String, type: INotification}]{
        return this.notificationHistory;
    }
}