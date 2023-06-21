import { createReducer, on } from "@ngrx/store";
import { BlogStateInterface } from "../types/blog-state.interface";
import * as BlogsActions from './actions'

export const initialState: BlogStateInterface = {
    isLoading: false,
    blogs: [],
    error: null
} 

export const reducers = createReducer(
    initialState,
    on(BlogsActions.getBlogs, (state) => ({ ...state, isLoading: true})),
    on(BlogsActions.getBlogsSuccess, (state, action) => ({
        ...state,
        isLoading: false,
        blogs: action.blogs
    })),
    on(BlogsActions.getBlogsFailure, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.error
    }))
)