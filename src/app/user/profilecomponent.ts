import { Component, OnInit, Inject } from '@angular/core'
import { FormControl, FormGroup, FormBuilder,Validators } from '@angular/forms'
import { authService } from './auth';
import { Router } from '@angular/router';
import { Itoastr,TOASTR_TOKEN} from '.././common/toastrservice';

@Component({
  templateUrl:'./profilecomponent.html',
  styles:[`em{float:right; color:red;} .error input{background-color:#E3C3C5} 
  .error::-webkit-input-placeholder{color:#999}
  .error::-moz-placeholder {color:#999}
  .error:-moz-placeholder{color:#999}
  .error:ms-input-placeholder{color:#999}`]
})
export class ProfileComponent  {

  profileform:FormGroup

  constructor(private serv:authService,private router:Router,private fb:FormBuilder,
   @Inject(TOASTR_TOKEN) private toastr:Itoastr){}
  firstname:FormControl;
  lastname:FormControl;
   ngOnInit(){
           this.firstname= new FormControl(this.serv.currentuser.firstname,[Validators.required,Validators.pattern("[a-zA-Z].*")])
            this.lastname= new FormControl(this.serv.currentuser.lastname,[Validators.required,Validators.pattern("[a-zA-z].*")])
                this.profileform= new FormGroup({
                 x :this.firstname,
                y :this.lastname
        })
      }
 
        save(data){
          if(this.profileform.valid){
            this.serv.update(data.x,data.y).subscribe(()=>{
              this.toastr.success('Profile saved')
              this.router.navigate(['/events'])
            })
         
          }}
          errorlast(){
        return  this.lastname.valid||this.lastname.untouched;
          }
          errorfirst(){
         return  this.firstname.valid || this.firstname.untouched;
            }
            logout(){
              this.serv.logout().subscribe(()=>{
                this.router.navigate(['/user/login'])
              })
            }
}
