import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Person } from '../Person.model';
import { PersonsService } from '../persons.service';

@Component({
  selector: 'person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit {

  constructor(private personsService: PersonsService) {
      this.personsService.getPersons().then((value)=>{
        this.persons=value;
      }).catch((reason)=>{
        console.log(reason);
      })
  }

  ngOnInit(): void {
  }

  persons: Person[]=[];

  person: Person = { id: "", name: "" };

  addPerson(p: Person): void {
    this.persons.push(p);
    this.person={ id: "", name: "" };
  }

  // @Output()
  // personsOutput: EventEmitter<Person[]> = new EventEmitter<Person[]>();

  // outPersons() {
  //   this.personsOutput.emit(this.persons);
  // }

}
