import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { HomeRoutingModule } from "./home-routing.module";
import { QuoteComponent } from "./quotes.component";
import { QuoteService } from "./quotes.service";
import { CommonModule } from "@angular/common";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import {MatSelectModule} from '@angular/material/select';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatInputModule, MatCardModule} from "@angular/material";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";



@NgModule({
declarations : [HomeComponent, QuoteComponent],
imports:[
    ReactiveFormsModule,
    HomeRoutingModule, 
    CommonModule, 
    MatDatepickerModule, 
    MatNativeDateModule, 
    MatSelectModule, 
    BrowserAnimationsModule, 
    MatFormFieldModule,
    MatCardModule, 
    MatInputModule, 
    FormsModule
],
providers:[QuoteService, MatDatepickerModule, MatSelectModule],
})
export class HomeModule{

}