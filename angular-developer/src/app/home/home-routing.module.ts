import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { QuoteComponent } from "./quotes.component";


const routes:Routes =[
{path:"quote", component:QuoteComponent}
]

@NgModule({
imports:[RouterModule.forRoot(routes)],
exports:[RouterModule]
})

export class HomeRoutingModule{

}