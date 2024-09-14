import{DatabaseNotification} from "./DatabaseNotification"
import {NotificationManager} from "./NotificationManager";
import {EmaileNotification} from "./EmaileNotification";
import {PhoneNotification} from "./PhoneNotification";

const notificationManager = NotificationManager.getInstance();
const notificationManager2 = NotificationManager.getInstance();

const dbNotification = new DatabaseNotification(1);
const emailNotification= new EmaileNotification(`jordan@uv.mx`);
const phoneNotification = new PhoneNotification(`9221860109`);

notificationManager.sendNotification(`new user registered`, dbNotification);
notificationManager2.sendNotification(`confirm your email`, emailNotification);
notificationManager.sendNotification(`your activation code is 598`, phoneNotification);
