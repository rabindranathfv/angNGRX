import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angNGRX';

  counter: number;
  constructor() {
    this.counter = 10;
  }

  /**
   * increase
   */
  public increase() {
    return this.counter++;
  }

  /**
   * decrease
   */
  public decrease() {
    return this.counter--;
  }
}
