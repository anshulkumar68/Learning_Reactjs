import { MdDelete } from "react-icons/md";
import { PostListData } from "../store/post-list-store";
import { useContext } from "react";

const Post = ({ post }) => {
  const {deletePost} = useContext(PostListData);

  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
        {/* <AiTwotoneDelete /> */}
        <div className="px-6 py-4">
          <button className="relative top-2 left-[330px] text-gray-500 hover:text-gray-800 focus:outline-none text-xl" onClick={() => deletePost(post.id)}>
            <MdDelete />
          </button>
          <div className="font-bold text-xl mb-2">{post.title}</div>
          <p className="text-gray-700 text-base">{post.content}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          {post.tags.map((tag) => (
            <span key={tag} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #{tag}
            </span>
          ))}
        </div>
        <div className="bg-green-100 p-3 mx-2 mb-2 rounded-md">This post has been reacted by {post.reaction} People.</div>
      </div>
    </>
  );
};

export default Post;
