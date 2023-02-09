import { Injectable } from '@angular/core';
import { Person } from './Person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {

  constructor() { }
  persons: Person[] = [
    { id: "325442234", name: "Shani" },
    { id: "324150606", name: "Fridi" }
  ]

  getPersons(): Promise<Person[]> {
    return new Promise((res, rej) => {
      setTimeout(() => {
        if (this.persons.length)
          res(this.persons);
        else
          rej("FAIL!")
      }, 5000);
    })
  }
}
