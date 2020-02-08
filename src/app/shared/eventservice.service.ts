import { Injectable ,EventEmitter} from '@angular/core';
import {Subject, Observable, of} from 'rxjs';
import{Ievent, Isession} from '.././shared/eventmodel'
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EventserviceService {

  constructor(private http:HttpClient) { }
  getdata():Observable<Ievent[]>{
   return this.http.get<Ievent[]>('/api/events').pipe(catchError(this.handleerror<Ievent[]>('getdata',[])))
  }
 
  
  searchbar(item:string):Observable<Isession[]>{
    return this.http.get<Isession[]>('/api/sessions/search?search='+item).pipe(catchError(this.handleerror<Isession[]>('search')))
    }
     
  
  getevent(id:any):Observable<Ievent>{
    return this.http.get<Ievent>('/api/events/'+id).pipe(catchError(this.handleerror<Ievent>('getevent')))
  }
  addevent(x){
    return this.http.post<Ievent>('/api/events',x).pipe(catchError(this.handleerror<Ievent>('savedata')))
  }
//no need for events now its from server now
  
  private handleerror<T>(operation='operation',result?:T){
    return (error:any):Observable<T>=>{
      console.log(error)
      return of(result as T)
    }
      }
}
