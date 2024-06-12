import React, { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostListData } from "../store/post-list-store";
import Message from "./Message";
import Loading from "./Loading";

const PostList = () => {
  const { postList, getPost } = useContext(PostListData);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    setFetching(true);

    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        getPost(data.posts)
        setFetching(false)
      });

      return () => {

      }
  }, [])

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
