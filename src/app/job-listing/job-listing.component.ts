import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {GetJobsService} from '../services/get-jobs.service';

@Component({
  selector: 'app-job-listing',
  templateUrl: './job-listing.component.html',
  styleUrls: ['./job-listing.component.css']
})
export class JobListingComponent implements OnInit {

  jobsarray: any[] =[];
  private sortLocflag:string="asc";
  private sortExpFlag:string="asc";
  private isDataLoaded = false;
  constructor(private router:Router,
    private http: HttpClient,
    private getJobsService:GetJobsService) {}

    ngOnInit() {
      this.getJobsService.getJobsData().subscribe(
        (response:any)=>{
          this.jobsarray = response.jobsfeed;
          this.getJobsService.globalJobs = this.jobsarray;
          this.isDataLoaded=true;
        },
        (error)=> {
          console.log(error);
          alert('Error Please try again Later');
        });
  
    }


    onSortByLocation(flagVal) {
      if(flagVal === "asc"){
        this.jobsarray.sort((a,b) => a.location.localeCompare(b.location));
        this.sortLocflag ="desc;"
      } else{
        this.jobsarray.sort((a,b) => b.location.localeCompare(a.location));
        this.sortLocflag ="asc"
      }
      return this.jobsarray;
    }

    onSortByExp(flagVal2) {
      if(flagVal2 === "asc"){
        this.jobsarray.sort((a,b) => a.experience.localeCompare(b.experience));
        this.sortExpFlag = "desc";
      } else{
        this.jobsarray.sort((a,b) => b.experience.localeCompare(a.experience));
        this.sortExpFlag = "asc";
      }
      return this.jobsarray;
    }
  
}
