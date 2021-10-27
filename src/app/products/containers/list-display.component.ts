import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IAppState } from 'src/app/reducers';
import * as fromLayout from '../../shared/layout/reducers/layout.reducer';
import { GoogleBooksService } from '../google-books.service';
import { IProduct } from '../models';
import { IProductsState, productFeatureKey } from '../reducers';

@Component({
  selector: 'app-list-display',
  template: `<app-list [errorMessage]="errorMessage" [products]="prodcuts" [loading]="loading" ></app-list>`,
  styles: [],
})
export class ListDisplayComponent implements OnInit {
  fromLayoutState$: Observable<fromLayout.State>;
  storeSearchValue: string = '';
  productsState$: Observable<IProductsState>;
  loading:boolean = true;
  errorMessage:string = "";
  prodcuts:IProduct[] = [];

  constructor(
    private store: Store<IAppState>,
    private productsService: GoogleBooksService
  ) {
    this.fromLayoutState$ = this.store.select(fromLayout.layoutFactoryKey);
    this.fromLayoutState$.subscribe((value) => {
      this.storeSearchValue = value.searchTerm;
    });
    this.productsState$ = this.store.select(productFeatureKey);
    this.productsState$.subscribe((value) => {
      this.loading = value.loading;
      this.errorMessage = value.errorMessage as string;
      this.prodcuts = value.products;
    })
  }

  ngOnInit(): void {
    
  }
}
