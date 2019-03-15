import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textFilter'
})
export class TextFilterPipe implements PipeTransform {
  
  transform(value: any, args?: any): any {
    let arr=[];
    if(!args){
        return value;
    }else{
      args = args.toUpperCase();
    }
    // return value.filter(jobsarray=>{
    //    if(jobsarray.skills.includes(args)==true){
    //     return jobsarray;
    //   };
    // });

    value.filter(function(skill, i) {
      if (skill.skills.toUpperCase().includes(args)===true 
        || skill.companyname.toUpperCase().includes(args)===true
        || skill.title.toUpperCase().includes(args)===true
        || skill.location.toUpperCase().includes(args)===true
        || skill.type.toUpperCase().includes(args)===true ) {
        
            arr.push(skill);
      }
   });
    return arr;
  }

}
