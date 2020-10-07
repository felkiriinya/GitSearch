import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyHomeComponent } from './components/my-home/my-home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NameResultComponent } from './components/name-result/name-result.component';
import { RepoResultComponent } from './components/repo-result/repo-result.component';
import { TimePassedPipe } from './pipes/time-passed.pipe';
import { HiglightDirective } from './directives/higlight.directive';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MyHomeComponent,
    NavBarComponent,
    NameResultComponent,
    RepoResultComponent,
    TimePassedPipe,
    HiglightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
