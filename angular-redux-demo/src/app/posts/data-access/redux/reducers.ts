import { createReducer, on } from '@ngrx/store'
import { PostStateInterface } from '../types/post-state.interface'
import * as PostAction from './actions'

export const initialState: PostStateInterface = {
    isLoading: false,
    posts: [],
    error: null,
} 

export const reducers = createReducer(
    initialState,
    on(PostAction.getPosts, (state) => ({...state, isLoading: true})),
    on(PostAction.getPostsSuccess, (state, action) =>({
        ...state,
        isLoading: false,
        posts: action.posts
    })),
    on(PostAction.getPostsFailure, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.error
    }))
)