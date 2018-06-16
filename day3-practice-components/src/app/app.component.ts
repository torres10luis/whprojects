import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 title = 'app';

 componentSelected = false;
 index: number;

 selectedComponent() {
    this.index = (Math.floor(Math.random()) * 3);
    console.log();
// this.componentSelected = true;
// this
    // if (!index) {
    //   // this.selectedComponent = 'warning';
    //   console.log('warning message');
    // } else if (index === 1) {
    //   // this.selectedComponent = 'warning';
    //   console.log('succes message');
    //  } else if (index === 2) {
    //   // this.selectedComponent = 'warning';
    //   console.log('succes message');
    //  }

 }
}
