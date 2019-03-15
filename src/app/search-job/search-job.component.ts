import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetJobsService} from '../services/get-jobs.service'
import {Input} from '@angular/core'

@Component({
  selector: 'app-search-job',
  templateUrl: './search-job.component.html',
  styleUrls: ['./search-job.component.css'],
  providers: [GetJobsService]
})
export class SearchJobComponent implements OnInit {

  @Input() jobsList: any[] =[];
  private locationSearch:string='';
  selectedValue;
  private selectExp: any[] =[];
  showChild:boolean = false;
  selectedFlag:boolean = false;
  constructor(private service:GetJobsService,private http:HttpClient ) { }

  ngOnInit() {
        this.selectExp = [
            {value: 'Fresher', label : 'Fresher'}, 
            {value: '1-5', label : '1-5years'},
            {value: '6-10', label : '6-10years'},
            {value: '10-15', label : '10-15years'}
          ];
  }

  
  onSearch(event,location,selVal){
    this.locationSearch = location.value;
    this.service.getJobsData().subscribe(
      (response:any)=>{
        this.jobsList= response.jobsfeed;
        this.showChild= true;
      },
      (error)=> {
        console.log(error)
        alert("Error in getting Response");
      });
  }

  getSelection(){
    this.selectedFlag==true;
    return this.selectedFlag;
  }

}
