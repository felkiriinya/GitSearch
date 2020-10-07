import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyHomeComponent } from './components/my-home/my-home.component';
import { NameResultComponent } from './components/name-result/name-result.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RepoResultComponent } from './components/repo-result/repo-result.component';

const routes: Routes = [
  {path: '', redirectTo: 'my-home', pathMatch:'full'},
  {path: 'my-home', component: MyHomeComponent},
  {path: 'name-result/:username' , component:NameResultComponent},
  {path: 'repo-result/:reponame', component:RepoResultComponent},
  
  { path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
