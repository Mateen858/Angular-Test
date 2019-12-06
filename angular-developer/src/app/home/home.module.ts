import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { HomeRoutingModule } from "./home-routing.module";
import { QuoteComponent } from "./quote.component";


@NgModule({
declarations : [HomeComponent, QuoteComponent],
imports:[HomeRoutingModule],
providers:[],


})
export class HomeModule{

}