import { Component, OnInit, Output } from '@angular/core';
import{Router} from '@angular/router';
import { EventserviceService } from 'src/app/eventdetail/sumofimports';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-newevent',
  templateUrl: './newevent.component.html',
  styles:[`em{float:right; color:red;} .error input{background-color:#E3C3C5} 
  .error::-webkit-input-placeholder{color:#999}
  .error::-moz-placeholder {color:#999}
  .error:-moz-placeholder{color:#999}
  .error:ms-input-placeholder{color:#999}`]

})
export class NeweventComponent implements OnInit {
  constructor(private router:Router,private serv : EventserviceService) { }
dirty:boolean=false;
  ngOnInit() {
  }
cancel(){
  console.log("gg")
this.router.navigate(['/events'])
}  
saveEvent(x){
   this.serv.addevent(x).subscribe(()=>{
     this.dirty=false;
    this.router.navigate(['/events'])
   })
   
}

}
