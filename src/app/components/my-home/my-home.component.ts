import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.css']
})
export class MyHomeComponent implements OnInit {

  user:User;
  

  constructor(private servicesService: ServicesService, private http:HttpClient) { }

  ngOnInit(){
    this.servicesService.requestUserInfo("felkiriinya")
    this.user = this.servicesService.user
  }

}
