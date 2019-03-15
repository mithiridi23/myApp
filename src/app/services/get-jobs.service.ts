import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetJobsService {

  filtered=[];
  globalJobs:any[] = [];
  constructor(private http:HttpClient) { }

  getJobsData(){
   return this.http.get('https://api.myjson.com/bins/kez8a');
  }
  

}
