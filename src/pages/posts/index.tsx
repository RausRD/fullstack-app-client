import React from 'react';
import { useGetAllPostsQuery } from '../../app/services/postsApi';
import { CreatePost } from '../../components/create-post';

export const Posts = () => {
  const { data } = useGetAllPostsQuery();
  return (
    <>
      <div className="w-full mb-10">
        <CreatePost />
      </div>
    </>
  );
};
