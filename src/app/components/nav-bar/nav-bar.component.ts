import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Repository } from 'src/app/models/repository';
import { User } from 'src/app/models/user';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private router: Router, private servicesService: ServicesService) { }

  ngOnInit(): void {
  }

  username:string;
  user: User;
  repos:Repository[];


  userProfile(){
    this.router.navigate(['/name-result',this.username])
    this.servicesService.requestUserInfo(this.username)
    this.user = this.servicesService.user
    this.servicesService.requestRepositories(this.username)
    this.repos =this.servicesService.repos
}
}
