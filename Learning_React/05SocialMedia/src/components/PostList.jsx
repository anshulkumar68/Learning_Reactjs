import React, { useContext } from "react";
import Post from "./Post";
import { PostListData } from "../store/post-list-store";
import Message from "./Message";

const PostList = () => {
  const { postList, getPost } = useContext(PostListData);

  const handleFetchFromServer = () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => getPost(data.posts));
  };

  return (
    <>
      {postList.length === 0 && (
        <Message getPostFromServer={handleFetchFromServer} />
      )}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default PostList;
