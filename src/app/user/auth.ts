import { Injectable } from '@angular/core';
import { Iuser } from './usermodel';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()

export class authService {
    constructor(private http: HttpClient) { }
    public currentuser: Iuser;
    loginUser(userName: string, password: string) {
        let logininfo = { username: userName, password: password }
        let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
        return  this.http.post('/api/login', logininfo, options)
        .pipe(tap(data =>{this.currentuser = <Iuser>data['user']} ))
            .pipe(catchError(err => { return of(false) }))
    }
    public isauth() {
        return !!this.currentuser
    }
    update(x, y) {
        this.currentuser.firstname = x;
        this.currentuser.lastname = y;
        let options = {headers:new HttpHeaders({'Content-Type':'application/json'})}
       return this.http.put(`/api/users/${this.currentuser.id}`,this.currentuser,options)
    }
    checkauthstatus(){
      return this.http.get('/api/currentIdentity').pipe(tap(data=>{
            if(data instanceof Object){
                this.currentuser=<Iuser>data
            }
        }))
    }
    logout(){
      this.currentuser=undefined;
      let options = {headers:new HttpHeaders({'Content-Type':'application/json'})}
      return this.http.post('/api/logout',{},options)
    }
}