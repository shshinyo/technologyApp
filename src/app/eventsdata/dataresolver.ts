import{Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import { EventserviceService } from '../shared/eventservice.service';
@Injectable()
export class DataResolver implements Resolve<any>{
    constructor(private serv:EventserviceService){}
    resolve(){
          return this.serv.getdata()
    }
   

}