import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ResetAction } from '../counter.actions';
import { AppState } from 'src/app/app.reducers';

@Component({
  selector: 'app-grandsong',
  templateUrl: './grandsong.component.html',
  styleUrls: ['./grandsong.component.scss']
})
export class GrandsongComponent implements OnInit {

  counter: number;
  constructor( private store: Store<AppState> ) { }

  ngOnInit() {
    this.store.select('counter')
        .subscribe( (counter: any) => {
          this.counter = counter;
        });
  }

  public reset() {
    const action = new ResetAction();
    this.store.dispatch( action );
  }

}
