import { Injectable } from "@angular/core";
import { Observable, from } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { map, catchError } from 'rxjs/operators'
import { User } from "src/assets/user";


@Injectable()
export class UserService{
    constructor(private http: HttpClient){    }

    getAll () : Observable<User[]>{
        return this.http.get<User[]>("../assets/users.json").pipe(
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