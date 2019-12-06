import { NgModule } from "@angular/core";
import {Routes, RouterModule} from "@angular/router"
    import { from } from "rxjs";
import { HomeComponent } from "./home/home.component";

const routes:Routes = [
    {path:'', pathMatch:'full', component:HomeComponent},
    // {path:'', pathMatch:'full', redirectTo:'home'},
    {path:'*', pathMatch:'full', redirectTo:''}
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{

}