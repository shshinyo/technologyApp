import { Component, OnInit, Output } from "@angular/core";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Isession} from 'src/app/shared/eventmodel'
import { EventEmitter } from '@angular/core';
@Component({
  selector:'newsession',
    templateUrl:'./sessionComponent.html',
    styles:[`em{float:right; color:red;} .error input,.error sselect,.error textarea{background-color:#E3C3C5} 
  .error::-webkit-input-placeholder{color:#999}
  .error::-moz-placeholder {color:#999}
  .error:-moz-placeholder{color:#999}
  .error:ms-input-placeholder{color:#999}`]
})
export class sessionComponent implements OnInit{
  @Output() savesession:any=new EventEmitter();
    name:FormControl
    duration:FormControl
    presenter:FormControl
    level:FormControl
    abstract:FormControl
    sessionform:FormGroup
    ngOnInit() {
        this.name=new FormControl("",Validators.required)
        this.duration=new FormControl("",Validators.required)
        this.presenter=new FormControl("",Validators.required)
        this.level=new FormControl("",Validators.required)
        this.abstract=new FormControl("",[Validators.required,Validators.maxLength(100),this.restrictedwords(['sex','foo'])])
        this.sessionform=new FormGroup({
            name:this.name,
            duration:this.duration,
            presenter:this.presenter,
            level:this.level,
            abstract:this.abstract
        })
    }
     save(x){
         if(this.sessionform.valid){
           let session:Isession= {
         id:undefined,
         name:x.name,
         duration:x.duration,
         presenter:x.presenter,
         level:x.level,
         abstract:x.abstract,
         voters:[]
            }
            this.savesession.emit(session) 
         }
       
     }

  /*   preventbadwords(control:FormControl):{[key:string]:any}{  ///////thats to restrict one word
return control.value.includes('sex')?{'preventbadwords':'sex'}:null
     }*/

     ////////////////////////////function to prevent  bad words/////////////////
     private restrictedwords(words){
       return (control:FormControl):{[key:string]:any}=>{
          if(!words) return null
         var invalidwords = words.map(w => control.value.includes(w)?w:null).filter(w=>w!=null)
         return invalidwords&&invalidwords.length>0?{'restrictedwords':invalidwords.join(',')}:null

       }
     }
     
}