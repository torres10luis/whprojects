import { Component, OnInit } from '@angular/core';

class Point {
  x: number;
  y: number;

  constructor(xNew: number, yNew: number) {
    this.x = xNew;
    this.y = yNew;
  }

  add(newPoint: Point) {
    return new Point( this.x + newPoint.x, this.y + newPoint.y);
  }
}


class Point3D extends Point {
  z: number;

  constructor(xVal: number, yVal: number, zVal: number) {
    super(xVal, yVal);
    this.z = zVal;
  }
// one way of adding
  add(new3DPoint: Point3D) {
    return new Point3D(new3DPoint.x + this.x, new3DPoint.y + this.y, new3DPoint.z + this.z);

  // let point2D = super.add(new3DPoint);
  // return new Point3D(point2D.x, point2D.y);
}
 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit() {

    const p1 = new Point(5, 9);
    const p2 = new Point(6, 9);
    const p3 = p1.add(p2);
    console.log(p3);

    const p3D1 = new Point3D(1, 2, 3);
    const p3D2 = new Point3D(1, 2, 3);
    const p3D3 = p3D1.add(p3D2);
    console.log(p3D3);

  }


}

