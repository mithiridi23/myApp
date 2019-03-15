import { Component, OnInit, Input } from '@angular/core';
import { GetJobsService } from '../services/get-jobs.service';
@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  @Input() myarray: any[] = [];
  @Input() selectLoc: string = '';
  @Input() selectedExp: string ='';

  constructor(private service:GetJobsService) { }

  ngOnInit() {
  }

  onSortByLocation(){
    this.myarray = this.service.filtered;
    this.myarray.sort((a,b) => a.location.localeCompare(b.location));
    return this.myarray;
  }

}
