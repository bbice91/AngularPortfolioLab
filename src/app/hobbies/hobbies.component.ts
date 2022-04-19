import { Component, OnInit } from '@angular/core';

import { hobby } from '../hobby';
import { hobbyService } from '../hobby.service';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css']
})
export class hobbiesComponent implements OnInit {
  hobbies: hobby[] = [];

  constructor(private hobbyService: hobbyService) { }

  ngOnInit(): void {
    this.gethobbies();
  }

  gethobbies(): void {
    this.hobbyService.gethobbies()
    .subscribe(hobbies => this.hobbies = hobbies);
  }
}
