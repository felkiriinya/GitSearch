import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Repository } from 'src/app/models/repository';
import { User } from 'src/app/models/user';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.css']
})
export class MyHomeComponent implements OnInit {

  user:User;
  repos:Repository[];

  showRepositories=false;

  toggleRepositories(){
    this.showRepositories=!this.showRepositories
  }

  

  constructor(private servicesService: ServicesService, private http:HttpClient) { }

  ngOnInit(){
    this.servicesService.requestUserInfo("felkiriinya")
    this.user = this.servicesService.user
    this.servicesService.requestRepositories("felkiriinya")
    this.repos = this.servicesService.repos

    this.showRepositories=false;
  }

}
