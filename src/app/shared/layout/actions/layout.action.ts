import { createAction, props } from "@ngrx/store";

export const typeInTheSearch = createAction(
    '[Layout] Set Search Term',
    props<{searchTerm: string}>()
)