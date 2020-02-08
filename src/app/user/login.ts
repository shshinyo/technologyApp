import { Component, Inject } from "@angular/core";
import { authService } from './auth';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Itoastr, TOASTR_TOKEN } from '.././common/toastrservice';

@Component({
    templateUrl: './login.html',
    styles: [`em{
    float:right; color:red;
}`]
})
export class LoginComponent {
    constructor(private serv: authService, private router: Router, @Inject(TOASTR_TOKEN) private toastr: Itoastr) { }
    username
    mouse
    password
    logininvalid=false;
    loginform: NgForm;
    onsubmit(formvalue) {
            this.serv.loginUser(formvalue.username,formvalue.password).subscribe(resp=>{
             
                if(!resp){
                    this.logininvalid=true;
                }else{
                    this.toastr.success("succeded")
                    this.router.navigate(['/events'])
                }
            })
        


    }
}