import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { hobby } from './hobby';
import { hobbies } from './mock-hobbies';
import { MessageService } from './message.service';

@Injectable({ providedIn: 'root' })
export class hobbyService {

  constructor(private messageService: MessageService) { }

  gethobbies(): Observable<hobby[]> {
    const hobbies = of(hobbies);
    this.messageService.add('hobbyService: fetched hobbies');
    return hobbies;
  }

  gethobby(id: number): Observable<hobby> {
    // For now, assume that a hobby with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const hobby = hobbies.find(h => h.id === id)!;
    this.messageService.add(`hobbyService: fetched hobby id=${id}`);
    return of(hobby);
  }
}
