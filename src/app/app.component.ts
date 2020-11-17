import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';
  firstName: string = "bin";
  fontSize: string;
  names = ['apple', 'banana', 'pear'];

  sizeChanged(size) {
    this.fontSize = size;
  }
}
