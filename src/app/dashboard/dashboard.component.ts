import { Component, OnInit } from '@angular/core';
import { hobby } from '../hobby';
import { hobbyService } from '../hobby.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  hobbies: hobby[] = [];

  constructor(private hobbyService: hobbyService) { }

  ngOnInit(): void {
    this.gethobbies();
  }

  gethobbies(): void {
    this.hobbyService.gethobbies()
      .subscribe(hobbies => this.hobbies = hobbies.slice(1, 5));
  }
}
