import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './routing/app-routing.module';

import { AppComponent } from './app.component';
import { SearchJobComponent } from './search-job/search-job.component';
import { JobListingComponent } from './job-listing/job-listing.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { DropDownDirective } from './dropdown/drop-down.directive';
import { SearchResultComponent } from './search-result/search-result.component';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { TextFilterPipe } from './pipes/text-filter.pipe';
@NgModule({
  declarations: [
    AppComponent,
    SearchJobComponent,
    JobListingComponent,
    HeaderComponent,
    DropDownDirective,
    SearchResultComponent,
    SearchFilterPipe,
    TextFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
