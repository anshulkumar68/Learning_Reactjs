import React, { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostListData } from "../store/post-list-store";
import Message from "./Message";
import Loading from "./Loading";

const PostList = () => {
  const { postList, fetching } = useContext(PostListData);


  return (
    <>
      {fetching && <Loading />}
      {!fetching && postList.length === 0 && <Message />}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default PostList;
