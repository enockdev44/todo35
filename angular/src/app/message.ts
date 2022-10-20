export class Message {
    
    sender: number;
    receiver: number;
    message: string;

    constructor (sender?:number, receiver?:number, message?: string) {
        this.sender = sender;
        this.receiver = receiver;
        this.message = message;
    }

    getSender():number {
        return this.sender;
    }

    getReceiver():number {
        return this.receiver;
    }

    getMessage():string {
        return this.message;
    }

}
