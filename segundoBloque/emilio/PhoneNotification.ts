import {INotification} from "./INotification";

export class  PhoneNotification implements INotification {
    private phoneNumber: String;

    constructor(phoneNumber:String) {
        this.phoneNumber = phoneNumber;
    }
    sendNotification(message: String) {
        console.log(`Sending notification via phone: ${message}, ${this.phoneNumber} `)
    }
}