import { Component } from "@angular/core";
import { Quote } from "src/assets/quote";

@Component({
selector:'app-home',
templateUrl : './home.component.html'

})
export class HomeComponent{
public quotehome : Quote =  {"Id":2, "Description": "Well done is better than well said", "DateAdded": new Date("1/1/2019"), "Category":"Motivational", "Philosopher":{"FirstName":"Benjamin", "LastName":"Franklin"}};



}