import { createAction, props } from "@ngrx/store";
import { BlogInterface } from "../types/blog.interface";

export const getBlogs = createAction('[Blogs] Get Blogs')
export const getBlogsSuccess = createAction(
    '[Blogs] Get Blogs Success',
    props<{ blogs: BlogInterface[] }>()
)
export const getBlogsFailure = createAction(
    '[Blogs] Get Blogs Failure',
    props<{ error: string }>()
)