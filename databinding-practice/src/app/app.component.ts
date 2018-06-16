// import { Person } from './person/person.component';
import { Component } from '@angular/core';


@Component ({
  selector: 'app-root',
  template: `
  <h1>{{heading}}</h1>
  <p>
    Name: {{person.gender ? (person.gender === 'm' ? 'Mr.' : 'Ms.') : ' '}}
    {{person.name.firstName + ' ' + person.name.lastName}}
  </p>
  <p> City: {{person.city}} </p>
  <hr>
  <p> Sum of  </p>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  heading = 'Person Details';
 //  constructor(public firstName: string, public lastName: string, public gender: string, public city: string ) {}

  person: any = {
    name: {
      firstName: 'Luis',
      lastName: 'Saldana'
    },
    gender: 'm',
    city: 'mexico'

  };

  // first = 1;
  // second = 2;

/* getInitial() {
  if() {

  } else() {

  }
}
  getAdress() {

  }
*/
}
