import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { GetJobsService } from './services/get-jobs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myApp';
  jobsarray: any[] =[];
  jobsCount;
  header = "Jobs Listings";

  
  constructor(private router:Router,
    private http: HttpClient,
    private getJobsService:GetJobsService) {}
  
  ngOnInit() {
    this.getJobsService.getJobsData().subscribe(
      (response:any)=>{
        this.jobsarray = response.jobsfeed;
        this.jobsCount = this.jobsarray.length;
      },
      (error)=> {
        console.log(error)
        alert("Error in getting Response")
      }
    );

  }
  
 
}


