import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { dog } from '../dog';
import { dogService } from '../dog.service';

@Component({
  selector: 'app-dog-detail',
  templateUrl: './dog-detail.component.html',
  styleUrls: [ './dog-detail.component.css' ]
})
export class dogDetailComponent implements OnInit {
  dog: dog | undefined;

  constructor(
    private route: ActivatedRoute,
    private dogService: dogService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getdog();
  }

  getdog(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.dogService.getdog(id)
      .subscribe(dog => this.dog = dog);
  }

  goBack(): void {
    this.location.back();
  }
}
