import{Injectable} from '@angular/core';
import {Resolve, ActivatedRouteSnapshot} from '@angular/router';
import { EventserviceService } from '../shared/eventservice.service';

@Injectable()
export class routeResolver implements Resolve<any>{
    constructor(private serv:EventserviceService){}
    resolve(route:ActivatedRouteSnapshot){
          return this.serv.getevent(route.params['id'])
    }
   

}