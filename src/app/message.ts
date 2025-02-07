export class Message 
{
    readonly sender: String;
    readonly message: String;

    constructor(sendr: String, msg: String)
    {
        this.sender = sendr;
        this.message = msg;
    }
}