import React, { useContext, useRef } from "react";
import { PostListData } from "../store/post-list-store";

const CreatePost = () => {
  
   const {addPost} = useContext(PostListData);
  const titleElement = useRef();
  const userIDElement = useRef();
  const reactionsElement = useRef();
  const contentElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const title = titleElement.current.value;
    const userId = userIDElement.current.value;
    const reactions = reactionsElement.current.value;
    const content = contentElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    titleElement.current.value="";
    userIDElement.current.value="";
    reactionsElement.current.value="";
    contentElement.current.value="";
    tagsElement.current.value="";

    addPost(title, userId, reactions, content, tags);
  };

  return (
    <>
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Create Post</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              ref={titleElement}
              type="text"
              id="name"
              placeholder="How are you feeling today..."
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              User id
            </label>
            <input
              ref={userIDElement}
              placeholder="Enter your user id"
              type="text"
              id="email"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Reaction
            </label>
            <input
              ref={reactionsElement}
              placeholder="Enter reaction"
              type="text"
              id="phone"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Content
            </label>
            <textarea
              ref={contentElement}
              placeholder="Tell us more about it"
              id="message"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              rows="4"
              required
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              tags
            </label>
            <input
              ref={tagsElement}
              placeholder="Enter hashtags"
              type="text"
              id="phone"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreatePost;
