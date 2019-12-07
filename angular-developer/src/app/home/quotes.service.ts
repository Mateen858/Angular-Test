import { Injectable } from "@angular/core";
import { Observable, from } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { map, catchError } from 'rxjs/operators'
import { Quote } from "src/assets/quote";


@Injectable()
export class QuoteService{
    constructor(private http: HttpClient){    }

    getAll () : Observable<Quote[]>{
        return this.http.get<Quote[]>("../assets/quotes.json").pipe(
    catchError(this.handleError)
        );
    }

    getOne(id: number) : Observable<any> {
        return this.http.get<any[]>("../assets/quotes.json")
          .pipe(
            map(quotes => {
              let quote = quotes.filter((quo: any) => quo.id === id);
              return (quote && quote.length) ? quote[0] : null;
            }),
            catchError(this.handleError)
          )
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