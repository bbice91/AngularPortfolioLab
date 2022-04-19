import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { hobby } from '../hobby';
import { hobbyService } from '../hobby.service';

@Component({
  selector: 'app-hobby-detail',
  templateUrl: './hobby-detail.component.html',
  styleUrls: [ './hobby-detail.component.css' ]
})
export class hobbyDetailComponent implements OnInit {
  hobby: hobby | undefined;

  constructor(
    private route: ActivatedRoute,
    private hobbyService: hobbyService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.gethobby();
  }

  gethobby(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.hobbyService.gethobby(id)
      .subscribe(hobby => this.hobby = hobby);
  }

  goBack(): void {
    this.location.back();
  }
}
