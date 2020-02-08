import { Component, OnInit, Input } from '@angular/core';
import { EventserviceService } from 'src/app/shared/eventservice.service';
import{ActivatedRoute, Params} from '@angular/router';
import { Isession, Ievent } from 'src/app/shared/eventmodel';
import { authService } from 'src/app/user/auth';

@Component({
  selector: 'app-eventdetail',
  templateUrl: './eventdetail.component.html',
  styleUrls: ['./eventdetail.component.css']
})
export class EventdetailComponent implements OnInit {
  

  constructor(private serv:EventserviceService ,private route:ActivatedRoute ,private authserv:authService) { }
  addtoggle:boolean;
  authsev=this.authserv;
    type:string="all";
    sort:string="vote";
    event:Ievent;
    ngOnInit() {
      this.route.data.forEach((data)=>{
        this.event=data['event']
          this.addtoggle=false
    });
     
     // this.event=this.serv.getevent(+this.route.snapshot.params['id']);//will not route to another id at the same component
  }
  newsession(){
    this.addtoggle=true; 
  }
  savenewsession(session:Isession){
   const maxid=Math.max.apply(null,this.event.sessions.map(s=>s.id))
   session.id=maxid+1
   this.event.sessions.push(session)
   this.serv.addevent(this.event)
   this.addtoggle=false
  }
 
}
