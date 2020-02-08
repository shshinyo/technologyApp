import { Component, OnInit} from '@angular/core';
import {authService} from '../user/auth';
import { Isession, Ievent } from '../shared/eventmodel';
import { EventserviceService } from '../eventdetail/sumofimports';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{
  

  constructor(private serv :authService,private router:Router,private eventserv:EventserviceService,private http:HttpClient ) { }
  searchItem:string;
  foundsessions:Isession[];
  events:Ievent[]
  
  ngOnInit() {
  this.eventserv.getdata().subscribe(data=>this.events=data)
    
  }
  search(x){
   this.eventserv.searchbar(x).subscribe(sessions=>{
    this.foundsessions=sessions
    
  })
  }
  logout(){
    this.serv.currentuser=undefined;
    let options = {headers:new HttpHeaders({'Content-Type':'application/json'})}
    this.http.post('/api/logout',{},options)
  }

  

}
