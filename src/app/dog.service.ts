import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { dog } from './dog';
import { DOGGIES } from './mock-doggies';
import { MessageService } from './message.service';

@Injectable({ providedIn: 'root' })
export class dogService {

  constructor(private messageService: MessageService) { }

  getdoggies(): Observable<dog[]> {
    const doggies = of(DOGGIES);
    this.messageService.add('dogService: fetched doggies');
    return doggies;
  }

  getdog(id: number): Observable<dog> {

    const dog = DOGGIES.find(h => h.id === id)!;
    this.messageService.add(`dogService: fetched dog id=${id}`);
    return of(dog);
  }
}
