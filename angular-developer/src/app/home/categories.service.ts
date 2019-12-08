import { Injectable } from "@angular/core";
import { Observable, from } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { map, catchError } from 'rxjs/operators'



@Injectable()
export class CategoryService{
    constructor(private http: HttpClient){    }

    getAll () : Observable<string[]>{
        return this.http.get<string[]>("../assets/categories.json").pipe(
    catchError(this.handleError)
        );
    }

    
        private handleError (error:any){
            if (error.error instanceof Error){
                console.log("error messgae:", error.error.messgae)
                return Observable.throw (error.error.messgae);
                
            }
            console.log("Server error", error);
            return Observable.throw(error || 'Node.js server error');
        }
    

}