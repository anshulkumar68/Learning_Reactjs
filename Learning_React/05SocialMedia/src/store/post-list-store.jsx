import { createContext, useReducer } from "react";

export const PostListData = createContext({
  postList: [],
  addPost: () => {},
  getPost: () => {},
  deletePost: () => {},
});

//  Reducer method
const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE-POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if(action.type === 'GET-POST'){
    newPostList = action.payload.posts;
  }
  else if (action.type === "ADD-POST") {
    newPostList = [action.payload, ...currPostList];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  // add post method
  const addPost = (title, userId, reactions, body, tags) => {
    // console.log(`${title} ${userId} ${reactions} ${content} ${tags}`);
    dispatchPostList({
      type: "ADD-POST",
      payload: {
        id: Date.now(),
        title: title,
        body: body,
        reactions: reactions,
        userId: userId,
        tags: tags,
      },
    });
  };

   // Get post from server
   const getPost = (posts) => {
    dispatchPostList({
        type : "GET-POST",
        payload: {posts}
    })
  }

  // delete method
  const deletePost = (postId) => {
    // console.log(`Delete reqeust called for post ID ${postId}`);
    dispatchPostList({
      type: "DELETE-POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostListData.Provider value={{ postList, addPost, getPost, deletePost }}>
      {children}
    </PostListData.Provider>
  );
};

const DEFAULT_POST_LIST = [
  // {
  //   id: "1",
  //   title: "Going Thailand",
  //   body: "I'm going on vacation to Thailand; I hope to enjoy it a lot!",
  //   reaction: 362,
  //   userId: "user-7",
  //   tags: ["thailand", "trip", "memories"],
  // },
  // {
  //   id: "2",
  //   title: "Last Project",
  //   body: "Last project as a Bank application which has backend support",
  //   reaction: 15,
  //   userId: "user-3",
  //   tags: ["last", "project", "over"],
  // },
];

export default PostListProvider;
