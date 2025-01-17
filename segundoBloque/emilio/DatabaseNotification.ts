import {INotification} from "./INotification";

export class DatabaseNotification implements INotification{
    private userID:number;

    constructor(userID:number){
        this.userID = userID;
    }
    sendNotification(message: String) {
        console.log(`Saving user: ${this.userID}, ${message}`)
    }
}