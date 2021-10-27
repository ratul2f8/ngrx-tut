import { InjectionToken } from "@angular/core";
import { Action, ActionReducerMap, createFeatureSelector } from "@ngrx/store";
import * as fromLayout from "../shared/layout/reducers/layout.reducer";
import * as fromRouter from "@ngrx/router-store"
import { IProductsState, productFeatureKey } from "../products/reducers";
import { productsReducer } from "../products/reducers";

export interface IAppState{
    [fromLayout.layoutFactoryKey]: fromLayout.State,
    [productFeatureKey]: IProductsState,
    router: fromRouter.RouterReducerState<any>
}
export const ROOT_REDUCER = new InjectionToken<ActionReducerMap<IAppState, Action>>('Root Reducers Token', {
    factory: () => ({
        [fromLayout.layoutFactoryKey]: fromLayout.reducer,
        router: fromRouter.routerReducer,
        [productFeatureKey]: productsReducer
    })
});