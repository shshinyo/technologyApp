import{Injectable} from '@angular/core';
import{Isession} from '../../../shared/eventmodel';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
 @Injectable()
 export class voterService{
constructor(private http:HttpClient){}

deletevoter(eventid:number,session:Isession,votername:string){
    
session.voters=session.voters.filter(voter=> voter != votername)
const url=`/api/events/${eventid}/sessions/${session.id}/voters/${votername}`;
this.http.delete(url).pipe(catchError(this.handleerror('deletevoter'))).subscribe()
}
private handleerror<T>(operation='operation',result?:T){
    return (error:any):Observable<T>=>{
      console.log(error)
      return of(result as T)
    }
      }


addvoter(eventid:number,session:Isession,votername:string){
    session.voters.push(votername)
const url=`/api/events/${eventid}/sessions/${session.id}/voters/${votername}`;
this.http.post(url,{}).pipe(catchError(this.handleerror('addvoter'))).subscribe()
}
userhasvoted(session:Isession,votername:string){
return session.voters.some(voter=>voter===votername)
}





 }
 