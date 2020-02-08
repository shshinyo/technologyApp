import { Component, Input } from "@angular/core";

//////////////////this is a reusable component used to hide data till clicking (content projection)
@Component({
    selector:'collapsed',
    template:`<div (click)="toggle()">  
    <h4  style="cursor:pointer">
    <ng-content select=".well"></ng-content>
    </h4>
    <ng-content select=".secondwell" *ngIf="cool"></ng-content>
    <span>
    <ng-content select=".thirdwell" *ngIf="cool"></ng-content>
    </span>
    
    </div>`
}) 
export class CollapsedComponant{
    @Input() title:string;
    cool:boolean=true;
    toggle(){
    this.cool=!this.cool;
}
}