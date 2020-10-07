import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyHomeComponent } from './components/my-home/my-home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NameResultComponent } from './components/name-result/name-result.component';
import { RepoResultComponent } from './components/repo-result/repo-result.component';
import { TimePassedPipe } from './pipes/time-passed.pipe';

import { FormsModule } from '@angular/forms';
import { NameRepoComponent } from './components/name-repo/name-repo.component';
import { BoldDirective } from './directives/bold.directive';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    MyHomeComponent,
    NavBarComponent,
    NameResultComponent,
    RepoResultComponent,
    TimePassedPipe,
  
    NameRepoComponent,
  
    BoldDirective,
  
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
