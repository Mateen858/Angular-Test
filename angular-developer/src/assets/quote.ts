// {"Id":2, "Description": "Well done is better than well said", "DateAdded":"1/1/2019", "Category":"Motivational", "Philosopher":{"FirstName":"Benjamin", "LastName":"Franklin"}},
export class Quote{
    Id:number;
    Description:string;
    DateAdded : Date;
    Category: string;
    Philosopher : {
        FirstName: string;
        LastName:string
    }
}