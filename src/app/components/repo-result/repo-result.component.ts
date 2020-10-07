import { Component, Input, OnInit } from '@angular/core';
import { Repository } from 'src/app/models/repository';

@Component({
  selector: 'app-repo-result',
  templateUrl: './repo-result.component.html',
  styleUrls: ['./repo-result.component.css']
})
export class RepoResultComponent implements OnInit {
  @Input() repos:Repository;
  constructor() { }

  ngOnInit(): void {
  }

}
