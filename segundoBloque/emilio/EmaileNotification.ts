import {INotification} from "./INotification";

export class EmaileNotification implements INotification{
    private email:String;

    constructor(email:String) {
        this.email =email;
    }

    sendNotification(message: String) {
        console.log(`Sending notification via email: ${message} to ${this.email}`);
    }
}

