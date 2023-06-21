import { createSelector } from "@ngrx/store";
import { AppStateInterface } from "src/app/share/data-access/redux/app-state.interface";

export const selectFeature = (state: AppStateInterface) => state.blogs

export const isLoadingSelector = createSelector(
    selectFeature,
    (state) => state.isLoading
)

export const blogsSelector = createSelector(
    selectFeature,
    (state) => state.blogs
)

export const errorSelector = createSelector(
    selectFeature,
    (state) => state.error
)