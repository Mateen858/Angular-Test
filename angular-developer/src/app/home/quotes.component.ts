import { Component, Input, OnInit } from "@angular/core";
import { Quote } from "src/assets/quote";
import { QuoteService } from "./quotes.service";
import { User } from "./../../assets/user";
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';

export const MY_FORMATS = {
    parse: {
      dateInput: 'D',
    },
    display: {
      dateInput: 'MMM D',
      monthYearLabel: 'MMM YYYY',
      dateA11yLabel: 'LL',
      monthYearA11yLabel: 'MMMM YYYY',
    },
  };

@Component({
    selector:'app-quote',
    templateUrl: './quotes.component.html',
    styleUrls:["./quotes.component.css"],
    providers: [
        // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
        // application's root module. We provide it at the component level here, due to limitations of
        // our example generation script.
        {
          provide: DateAdapter,
          useClass: MomentDateAdapter,
          deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
        },
    
        {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
      ],
})
export class QuoteComponent implements OnInit{

    constructor (public quoteservice: QuoteService){}

    public quotes :Quote[];
public selectedField:string = "this is selected field";

 @Input() public quote:Quote
  
 public names : string  [] = ["Ali", "Ahmed", "Bilal"];
 public users : User  [] = [
   {firstname:"Rabia", lastname:"Yaseen", profilepic:"../../assets/mtn.JPG" },
   {firstname:"Rana", lastname:"Mateen", profilepic:"../../assets/mtn.JPG" },
   {firstname:"Muhammad", lastname:"Usman", profilepic:"" },
   {firstname:"Swera", lastname:"Sehar", profilepic:"" }
];

 getShortName(firstname, lastname) {
    return firstname.charAt(0) + lastname.charAt(0);
}

private getQuotes() {
    this.quoteservice.getAll().subscribe(response=>{
        this.quotes = response;
    });
} 

ngOnInit(){
    this.getQuotes();
}

}