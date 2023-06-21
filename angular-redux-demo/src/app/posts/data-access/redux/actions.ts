import { createAction, props } from "@ngrx/store";
import { PostInterface } from "../types/post.interface";

export const getPosts = createAction(
    '[Posts] Get Posts',
    props<{ id: number }>()
)
export const getPostsSuccess = createAction(
    '[Posts] Get Posts Success',
    props<{ posts: PostInterface[] }>()
)
export const getPostsFailure = createAction(
    '[Posts] Get Posts Failure',
    props<{ error: string }>()
) 