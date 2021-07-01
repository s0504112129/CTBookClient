import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const contacts = [
      { id: 11, name: 'Dr Nice',phone:777777777 },
      { id: 12, name: 'Narco' ,phone:1111111111},
      { id: 13, name: 'Bombasto',phone: 44444444},
      { id: 14, name: 'Celeritas',phone:55555555555 },
      { id: 15, name: 'Magneta',phone: 666666666},
      { id: 16, name: 'RubberMan',phone:8888888 },
      { id: 17, name: 'Dynama' ,phone:777777777777},
      { id: 18, name: 'Dr IQ',phone: 999999999},
      { id: 19, name: 'Magma' ,phone:44444444},
      { id: 20, name: 'Tornado',phone:444444444444 }
    ];
    return {contacts};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  // genId(contacts: Hero[]): number {
  //   return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  // }
}