import React, { useContext, useRef } from "react";
import { PostListData } from "../store/post-list-store";

const CreatePost = () => {

  const { addPost } = useContext(PostListData);
  const titleElement = useRef();
  const userIdElement = useRef();
  const reactionsElement = useRef();
  const bodyElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const title = titleElement.current.value;
    const userId = userIdElement.current.value;
    const reactions = reactionsElement.current.value;
    const body = bodyElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    titleElement.current.value = "";
    userIdElement.current.value = "";
    reactionsElement.current.value = "";
    bodyElement.current.value = "";
    tagsElement.current.value = "";

    // POST request to server || submit request using fetch
    fetch('https://dummyjson.com/posts/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        // id: Date.now(),
        title: title,
        body: body,
        reactions: reactions,
        userId: userId,
        tags: tags,
      })
    })
      .then(res => res.json())
      .then(post => addPost(post));

    // addPost(title, userId, reactions, body, tags);
    // addPost(postx);
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
              ref={userIdElement}
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
              ref={bodyElement}
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
