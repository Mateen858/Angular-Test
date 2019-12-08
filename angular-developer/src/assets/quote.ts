import { User } from "./user";

// {"Id":2, "Description": "Well done is better than well said", "DateAdded":"1/1/2019", "Category":"Motivational", "Philosopher":{"FirstName":"Benjamin", "LastName":"Franklin"}},
export class Quote{
    id:number;
    description:string;
    dateaAdded : Date;
    category: string;
    userid : number;
    User: User
}