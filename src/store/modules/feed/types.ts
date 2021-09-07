/* eslint-disable no-shadow */
export const ActionTypes = {
  updateFeed: 'UPDATE_FEED',
  updateComments: 'UPDATE_COMMENTS',
  createComment: 'CREATE_COMMENT',
};

export interface IComment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface IPost {
  userId: number,
  id: number,
  title: string;
  body: string;
  comments?: IComment[]
}

export interface IFeedState {
  posts: IPost[];
}
