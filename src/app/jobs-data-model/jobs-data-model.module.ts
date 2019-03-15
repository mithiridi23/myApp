import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class JobsDataModelModule { 
   filteredArray=[];
  constructor(name: string, desc: string, imagePath: string, ) {
   
  }
}
