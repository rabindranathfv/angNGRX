import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-grandsong',
  templateUrl: './grandsong.component.html',
  styleUrls: ['./grandsong.component.scss']
})
export class GrandsongComponent implements OnInit {

  @Input() counter: number;
  @Output() counterChange = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  public reset() {
    this.counter = 0;
    this.counterChange.emit(this.counter);
  }

}
