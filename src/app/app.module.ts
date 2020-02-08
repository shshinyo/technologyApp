import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { EventsdataComponent } from './eventsdata/eventsdata.component';
import { EventdetailComponent } from './eventsdata/eventdetail/eventdetail.component';
import { NeweventComponent } from './eventsdata/newevent/newevent.component';
import{FormsModule,ReactiveFormsModule} from '@angular/forms';
import { DataResolver } from './eventsdata/dataresolver';
import {JQ_TOKEN} from './common/jq';

import{
  NavComponent,
  Error404Component,
  EventserviceService
}from './eventdetail/sumofimports';
import{authService} from './user/auth';
import { sessionComponent } from './eventsdata/newevent/sessionComponent';
import { sessionListComponent } from './eventsdata/eventdetail/sessionlist/sessionlist';
import { CollapsedComponant } from './eventsdata/eventdetail/sessionlist/collapsedcomponent/collapsedcomponent';
import { DurationPipe } from './shared/durationpipe';
 let toastr=window['toastr'];
 let jQuery=window['jQuery'];
import{TOASTR_TOKEN, Itoastr} from './common/toastrservice';
import { ModalComponent } from './common/modal';
import { dirctiveComponent } from './common/modaldirective';
import { upvoteComponent } from './eventsdata/eventdetail/sessionlist/upvote.component';
import { voterService } from './eventsdata/eventdetail/sessionlist/voterservice';
import { LocationValidator } from './eventsdata/newevent/locationvalidatordirective';
import {HttpClientModule} from '@angular/common/http';
import { routeResolver } from './eventdetail/routresolver';

@NgModule({
  declarations: [
    upvoteComponent,
    AppComponent,
    NavComponent,
    EventsdataComponent,
    EventdetailComponent,
    Error404Component,
    NeweventComponent,
    sessionComponent,
    sessionListComponent,
    CollapsedComponant,
    DurationPipe,
    ModalComponent,
    dirctiveComponent,
    LocationValidator
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,ReactiveFormsModule,
    RouterModule.forRoot([
      {path:'eventdetail/new',component: NeweventComponent,canDeactivate:['leavingpage']},
      {path:'events',component: EventsdataComponent ,resolve:{events:DataResolver}},
      {path:'eventdetail/:id',component: EventdetailComponent, resolve:{event:routeResolver}},
      {path:'',redirectTo:'events',pathMatch:'full'},
      {path:'404error',component:Error404Component},
      {path:'session/new',component:sessionComponent},
      {path:'user',loadChildren:'./user/user.module#UserModule'}


      
    ])
  ],
  providers: [  routeResolver ,voterService,EventserviceService,authService,  
    {provide:'leavingpage',useValue:leave},DataResolver,
  {provide:TOASTR_TOKEN,useValue:toastr},{provide:JQ_TOKEN,useValue:jQuery}],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function leave(component:NeweventComponent){
  if(component.dirty){
    return window.confirm("do you want to leave")
  }return true
}
