import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { hobby } from './hobby';
import { HOBBIES } from './mock-hobbies';
import { MessageService } from './message.service';

@Injectable({ providedIn: 'root' })
export class hobbyService {

  constructor(private messageService: MessageService) { }

  gethobbies(): Observable<hobby[]> {
    const hobbies = of(HOBBIES);
    this.messageService.add('hobbyService: fetched hobbies');
    return hobbies;
  }

  gethobby(id: number): Observable<hobby> {
    const hobby = HOBBIES.find(h => h.id === id)!;
    this.messageService.add(`hobbyService: fetched hobby id=${id}`);
    return of(hobby);
  }
}
