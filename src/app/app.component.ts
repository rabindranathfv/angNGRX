import { Component } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { IncreaseAction, DecreaseAction } from './components/counter/counter.actions';

interface AppState {
  counter: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angNGRX';

  counter: number;
  constructor( private store: Store<AppState>) {
    /* this.counter = 10; */
    /* this.store.subscribe( state => {
      this.counter = state.counter;
    }); */
    this.store.select('counter')
        .subscribe( (counter: any) => {
          this.counter = counter;
        });
  }

  /**
   * increase
   */
  public increase() {
    /* return this.counter++; */
    const action = new IncreaseAction();
    this.store.dispatch( action );
  }

  /**
   * decrease
   */
  public decrease() {
    /* return this.counter--; */
    const action = new DecreaseAction();
    this.store.dispatch( action );
  }
}
