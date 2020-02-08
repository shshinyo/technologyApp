import { Component, OnInit, Input } from '@angular/core';
import { EventserviceService } from '../shared/eventservice.service';
import { ActivatedRoute } from '@angular/router';
import { Ievent } from '../shared/eventmodel';

@Component({
  templateUrl: './eventsdata.component.html',
  styleUrls: ['./eventsdata.component.css']
})
export class EventsdataComponent implements OnInit {

  constructor(private serv:EventserviceService,private route:ActivatedRoute) { }
data:Ievent;
  ngOnInit() {
    //this.serv.getdata().subscribe(x=>this.data=x)//here data as a stream by subscribe
    this.data=this.route.snapshot.data['events']//wait till resolve then display by resolver look at it 
  }

}
