import { Component, Input, OnInit } from "@angular/core";
import { Quote } from "src/assets/quote";
import { QuoteService } from "./quotes.service";
import { User } from "./../../assets/user";
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { UserService } from "./users.service";
import { CategoryService } from "./categories.service";
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
  selector: 'app-quote',
  templateUrl: './quotes.component.html',
  styleUrls: ["./quotes.component.css"],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})
export class QuoteComponent implements OnInit {
  constructor(public quoteservice: QuoteService, public userservice: UserService, public categoryservice : CategoryService) 
  { 

  }

  public quotes: Quote[];
  @Input() public quote: Quote
  public names: string[] = ["Ali", "Ahmed", "Bilal"];
  public users: User[];
  public selectedUser : User; 
  public categories : string[];


  public updateUser(quote:Quote){
    let newuser:User;
    this.users.forEach(element => {
      if(element.id==quote.userid)
      newuser = element;
    });
quote.User = newuser;

  }


  getInitials(firstname, lastname) {
    return firstname.charAt(0) + lastname.charAt(0);
  }

  private getQuotes() {
    this.quoteservice.getAll().subscribe(response => {
      this.quotes = response;
    });
  }
private getUsers(){
  this.userservice.getAll().subscribe(response=>{
this.users = response;
  });
}

public updatepic(){
  alert("chagned");
}


private getCategories(){
  this.categoryservice.getAll().subscribe(response=>{
this.categories = response;
  });
}


  ngOnInit() {
    this.getQuotes();
    this.getUsers();
    this.getCategories();
  }
}