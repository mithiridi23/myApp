import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router'
import { JobListingComponent } from '../job-listing/job-listing.component';
import { SearchJobComponent } from '../search-job/search-job.component';


const appRoutes: Routes = [
    {path :'', redirectTo:'/list' ,pathMatch:'full'},
    { path: 'search', component: SearchJobComponent},
    { path: 'list', component: JobListingComponent}
];


@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]

})

export class AppRoutingModule {}