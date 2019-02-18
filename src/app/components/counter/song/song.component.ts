import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss']
})
export class SongComponent implements OnInit {

  @Input() counter: number;
  @Output() counterChange = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  /**
   * increase
   */
  public multiply( ) {
    this.counter *= 5;
    this.counterChange.emit(this.counter);
  }

  /**
   * decrease
   */
  public divide( ) {
    this.counter /= 5;
    this.counterChange.emit(this.counter);
  }

  resetGrandsong( newCounter ) {
    this.counter = newCounter;
    this.counterChange.emit(this.counter);
  }
}
