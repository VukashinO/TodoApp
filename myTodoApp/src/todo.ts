export class Todo {
    message:string;
    isCompleted: boolean;
    title: string;

    constructor(message:string,isCompleted: boolean,title: string ){
        this.message = message;
        this.isCompleted = isCompleted;
        this.title = title;
    };
}