import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Repository } from 'src/app/models/repository';
import { User } from 'src/app/models/user';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-name-result',
  templateUrl: './name-result.component.html',
  styleUrls: ['./name-result.component.css']
})
export class NameResultComponent implements OnInit {

  repos:Repository[];
  user: User;
  username: string;

  showRepositories=false;

  toggleRepositories(){
    this.showRepositories=!this.showRepositories
  }

  constructor(private route:ActivatedRoute, private servicesService:ServicesService) { }

result(){
    this.servicesService.requestUserInfo(this.username)
    this.user = this.servicesService.user
    this.servicesService.requestRepositories(this.username)
    this.repos =this.servicesService.repos

    this.showRepositories=false;
}

  ngOnInit(){
    this.result()

  }

}
