import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.reducers';
import { MultiplyAction, DivideAction } from '../counter.actions';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss']
})
export class SongComponent implements OnInit {

  counter: number;
  constructor( private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select('counter')
        .subscribe( (counter: any) => {
          this.counter = counter;
        });
  }

  /**
   * increase
   */
  public multiply( ) {
    const action = new MultiplyAction(5);
    this.store.dispatch( action );
  }

  /**
   * decrease
   */
  public divide( ) {
    const action = new DivideAction(5);
    this.store.dispatch( action);
  }
}
