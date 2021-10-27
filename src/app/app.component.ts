import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromLayout from './shared/layout/reducers/layout.reducer';
import { LayoutActions } from './shared/layout/actions';
import * as ProductActions from './products/actions';
import { ProductEffects } from './products/effects/product.effect';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ngrx-tut-applicable-programming';
  searchTerm = '';
  constructor(private store: Store<fromLayout.State>) {}
  onSearchValue = (event: Event) => {
    this.searchTerm = (<HTMLInputElement>event.target).value;
    this.store.dispatch(
      LayoutActions.typeInTheSearch({ searchTerm: this.searchTerm })
    );
  };
  onHandleSubmit = (e: Event) => {
    e.preventDefault();
    this.store.dispatch(ProductActions.searchStarted({query: this.searchTerm}))
  };
}
