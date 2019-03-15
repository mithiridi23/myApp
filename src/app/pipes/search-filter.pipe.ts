import { Pipe, PipeTransform } from '@angular/core';
import { GetJobsService } from '../services/get-jobs.service';

@Pipe({
  name: 'searchFilter',
  pure: false
})
export class SearchFilterPipe implements PipeTransform {

  constructor(private service:GetJobsService){}

  transform(value: any, args?: any): any {
  let arr = [];
    if(!args){
      //do nothing
    } else{
     args.location = args.location.toUpperCase();
     args.experience = args.experience.toUpperCase();
    }

    if(args.experience === "FRESHER"){
      value.filter(function(v, i) {
        if((v["location"].toUpperCase().includes(args.location )) && v.experience.toUpperCase() == args.experience){
          arr.push(v)
        }
     }) 
    }else {
      var idx = args.experience.indexOf('-');
      args.minExp = parseInt(args.experience.substring(0,idx));
      args.maxExp = parseInt(args.experience.substring(idx+1));
      value.filter(function(v, i) {
        if((v["location"].toUpperCase().includes(args.location)) && v.experience!=="" &&
         parseInt(v.experience) >= args.minExp && parseInt(v.experience)<=args.maxExp){
          arr.push(v)
        }
     }) 

    }
    console.log(arr);
    this.service.filtered = arr;
    return arr;
  }

}
