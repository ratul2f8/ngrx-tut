import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';

import { GoogleBooksService } from '../google-books.service';
import * as ProductActions from '../actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductEffects {
  search$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.searchStarted),
      switchMap(({ query }) => {
        return this.productService.searchProdcucts(query).pipe(
          map((products) => ProductActions.searchSuccess({ products })),
          catchError((e) =>
            of(
              ProductActions.searchFailed({ errorMessage: (<Error>e).message })
            )
          )
        );
      })
    )
  );

  constructor(
    private productService: GoogleBooksService,
    private actions$: Actions
  ) {}
}
