import { Directive } from "@angular/core";
import { Validator, FormGroup, NG_VALIDATORS } from '@angular/forms';

@Directive({
    selector:'[locationvalidator]',
    providers:[{provide:NG_VALIDATORS,useExisting:LocationValidator,multi:true}]
})
export class LocationValidator implements Validator{
    validate(formgroup:FormGroup) : {[key:string]:any} {
     let addressC = formgroup.controls['address']
     let cityC=formgroup.controls['city']
     let countryC=formgroup.controls['country']
     let onlineurlC=(<FormGroup>formgroup.root).controls['onlineUrl']
     if((addressC&&addressC.value&&cityC&&cityC.value&&countryC&&countryC.value)||(onlineurlC&&onlineurlC.value)){
         return null
     }else{
         return {locationvalidator:false }
     }
    }
}