import { Component, Input, Output ,EventEmitter} from '@angular/core';


@Component({
    selector:'upvote',
    styleUrls:['./upvotecomponent.css'],
    template:`<div class="votingWidgetContainer pointable" (click)="onclick()">
                   <div class="well votingWidget">
                   <div class="votingButton" >
                   <i  class="glyphicon glyphicon-heart" [style.color]="iconcolor"></i>   
                   </div>
                   <div class="badge badge-inverse votingCount">
                   <div>{{count}}</div>
                   </div>      
                   </div>
                   </div>          
                
                   `
})
export class upvoteComponent {
    @Input() count:number;
    @Input() set voted(val){
        this.iconcolor=val?'red':'white'
    }
    iconcolor:string;
    @Output() vote=new EventEmitter()
    onclick(){
        this.vote.emit({})

    }

}