import { createReducer } from '@ngrx/store';
import { IProduct } from '../models';
import * as ProductActions from '../actions';
import { on } from '@ngrx/store';

export const productFeatureKey = 'products';

export interface IProductsState {
  errorMessage: String;
  loading: boolean;
  products: IProduct[];
}

const initialState: IProductsState = {
  errorMessage: '',
  loading: false,
  products: [],
};

export const productsReducer = createReducer(
  initialState,
  on(ProductActions.searchStarted, (state) => ({
    ...state,
    loading: true,
    errorMessage: '',
  })),
  on(ProductActions.searchSuccess, (state, { products }) => ({
    ...state,
    products,
    errorMessage: '',
    loading: false,
  })),
  on(ProductActions.searchFailed, (state, { errorMessage }) => ({
    ...state,
    errorMessage,
    products: [],
    loading: false,
  }))
);
