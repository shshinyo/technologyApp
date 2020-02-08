import{Component, Input, ViewChild, ElementRef, Inject} from '@angular/core';
import { JQ_TOKEN } from './jq';

@Component({
    selector:'simple-modal',
    template:`
  <div class="modal fade" #modalcontainer id="{{modalid}}" tabindex="-1" role="dialog" >
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">{{title}}</h5>
      </div>
      <div class="modal-body" (click)="cancel()">
       <ng-content></ng-content>
      </div>
    </div>
  </div>
</div>
    `
})
export class ModalComponent{
  constructor(@Inject(JQ_TOKEN) private $:any){}
@ViewChild('modalcontainer', {static: false})containerel:ElementRef;
@Input() modalid
@Input() title
@Input()closeonclick:string;
cancel(){
  if(this.closeonclick.toLocaleLowerCase()==="true"){
    this.$(this.containerel.nativeElement).modal('hide')
  }

}
}