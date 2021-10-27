import { createReducer, on } from "@ngrx/store";
import { LayoutActions } from "../actions";
export const layoutFactoryKey = 'layout';

export interface State{
    searchTerm: string
}

const initialState: State = {
    searchTerm: ""
}

export const reducer = createReducer(initialState,
    on(LayoutActions.typeInTheSearch, (state, {searchTerm}) => ({searchTerm})));
