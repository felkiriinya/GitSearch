import { Component, Input, OnInit } from '@angular/core';
import { Repository } from 'src/app/models/repository';

@Component({
  selector: 'app-name-repo',
  templateUrl: './name-repo.component.html',
  styleUrls: ['./name-repo.component.css']
})
export class NameRepoComponent implements OnInit {
  @Input() repos:Repository;
  constructor() { }

  ngOnInit(): void {
  }

}
