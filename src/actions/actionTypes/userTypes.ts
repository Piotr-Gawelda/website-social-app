import { ISingleUser } from '../../entities/users';
import { ISinglePhoto } from '../../entities/photos';
import { ISingleComment } from '../../entities/comments';
import { ISinglePost } from '../../entities/posts'

export const GET_USERS = 'GET_USERS';
export const GET_IMAGE = 'GET_IMAGE';
export const GET_COMMENTS = 'GET_COMMENTS';
export const GET_POSTS = 'GET_POSTS';
export interface IUserTypes {
    GET_USERS: {
        usersList: ISingleUser[];
    };
    GET_IMAGE: {
        photos: ISinglePhoto[];
    }
    GET_COMMENTS: {
        usersComment: ISingleComment[];
    }
    GET_POSTS: {
        usersPost: ISinglePost[];
    }
}
