import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[app-success-message]',
  templateUrl: './success-message.component.html',
  styles: [
    `
    p{
      color:blue;
    }

  `]
})
export class SuccessMessageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
