import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'warning-message',
  template: `
    <h2> warning message </h2>
  `,
  styleUrls: ['./warning-message.component.css']
})
export class WarningMessageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
