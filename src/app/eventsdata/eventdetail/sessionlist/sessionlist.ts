import { Component, Input, OnChanges} from "@angular/core";
import { Isession } from 'src/app/shared/eventmodel';
import{authService} from '../../../user/auth';
import{voterService} from './voterservice';


@Component({
    selector:'sessionlist',
    templateUrl:'./sessionlist.html',
})
export class sessionListComponent implements OnChanges{
   constructor(private authserv:authService,private voterserv:voterService){}
    @Input() sessionlist:Isession[];
    @Input() leveltype:string;
    @Input() sorttype:any;
    visiblesessions:Isession[];
    @Input() eventid :number
   
    ngOnChanges(){
       if(this.sessionlist){
           this.filtersession(this.leveltype)
           this.sorttype==="name"?this.visiblesessions.sort(sortbynameASC):this.visiblesessions.sort(sortbyvoteDES)

       }}///////////
       filtersession(filter:string){
           if(filter==="all"){
           this.visiblesessions=this.sessionlist.slice(0)
           }
           else{
           this.visiblesessions=this.sessionlist.filter(x=>  x.level.toLocaleLowerCase()===filter)
           }
       }
       togglevote(session:Isession){
              if(this.userhasvoted(session)){
                  this.voterserv.deletevoter(this.eventid,session,this.authserv.currentuser.username)
              }else{
                  this.voterserv.addvoter(this.eventid,session,this.authserv.currentuser.username)
              }
              if(this.sorttype==='votes')
              this.visiblesessions.sort(sortbyvoteDES)
       }
       userhasvoted(session:Isession){
           return this.voterserv.userhasvoted(session,this.authserv.currentuser.username)
       }
    }
function sortbynameASC(s1:Isession,s2:Isession){
    if(s1.name>s2.name)return 1
    if(s1.name===s2.name)return 0
    else return -1
}
function sortbyvoteDES(s1:Isession,s2:Isession){
    return s2.voters.length-s1.voters.length
}


