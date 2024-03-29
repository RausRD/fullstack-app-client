import { api } from './api';
import { Follows } from '../types';

export const followtApi = api.injectEndpoints({
  endpoints: builder => ({
    followUser: builder.mutation<void, { followingId: string }>({
      query: newComment => ({
        url: '/follow',
        method: 'POST',
        body: newComment,
      }),
    }),
    unfollowUser: builder.mutation<void, string>({
      query: userId => ({
        url: `/unfollow/${userId}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const { useFollowUserMutation, useUnfollowUserMutation } = followtApi;
export const {
  endpoints: { followUser, unfollowUser },
} = followtApi;
