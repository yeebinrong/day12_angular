import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-fontsize',
  templateUrl: './fontsize.component.html',
  styleUrls: ['./fontsize.component.css']
})
export class FontsizeComponent implements OnInit {
  @Input() message: string;
  @Output() onFontSize = new EventEmitter<string>();
  fontSize: string = "2em";
  constructor() { }

  ngOnInit(): void {
  }

  fontSizeChanged($event) {
    // console.log("valuechanged");
    // console.log($event.target.value);
    // this.fontSize = `${$event.target.value}em`;
    this.onFontSize.next(`${$event.target.value}em`);
  }
}
