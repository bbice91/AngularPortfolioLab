import { Component, OnInit } from '@angular/core';

import { dog } from '../dog';
import { dogService } from '../dog.service';

@Component({
  selector: 'app-doggies',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class dogComponent implements OnInit {
  doggies: dog[] = [];

  constructor(private dogService: dogService) { }

  ngOnInit(): void {
    this.getdoggies();
  }

  getdoggies(): void {
    this.dogService.getdoggies()
    .subscribe(doggies => this.doggies = doggies);
  }
}
