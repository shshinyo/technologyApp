import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profilecomponent';
import { routes } from './userroutes';
import{ReactiveFormsModule} from '@angular/forms'
import {LoginComponent} from './login';
import{FormsModule} from '@angular/forms';

@NgModule({
    imports:[ 
        CommonModule,
        RouterModule.forChild(routes),
        FormsModule,
        ReactiveFormsModule
    ],
    declarations:[
        ProfileComponent,
        LoginComponent
    ],
    providers:[]
})
export class UserModule{

}