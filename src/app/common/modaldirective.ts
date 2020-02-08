import { Directive, OnInit, ElementRef, Inject, Input } from "@angular/core";
import { JQ_TOKEN } from './jq';

@Directive({
    selector:'[modal-trigger]'
})
export class dirctiveComponent implements OnInit{
    @Input('modal-trigger')modalid:string
      private element:HTMLElement
 constructor(ref:ElementRef, @Inject(JQ_TOKEN) private $:any ){
     this.element=ref.nativeElement
 }
 ngOnInit() {
      this.element.addEventListener('click', e =>{
          return this.$(`#${this.modalid}`).modal({});
      })
}

}