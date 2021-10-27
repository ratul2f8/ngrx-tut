import { createAction, props } from "@ngrx/store"
import { IProduct } from "../models"

export const searchStarted = createAction(
    '[Product] Start Searching',
    props<{query: string}>()
)
export const searchSuccess = createAction(
    '[Product] Finish Searching with success',
    props<{products: IProduct[]}>()
)
export const searchFailed = createAction(
    '[Product] Finish Searching with error',
    props<{errorMessage: string}>()
)