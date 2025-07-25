import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaHeart, FaRegHeart } from "react-icons/fa";

function PaneerButterMasala() {
  const navigate = useNavigate();
  const [liked, setLiked] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleLike = () => {
    setLiked(!liked);
  };

  const handleComment = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([
        ...comments,
        { text: newComment, user: localStorage.getItem("username") },
      ]);
      setNewComment("");
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 pt-32 pb-16 recipe-detail-container dark:bg-slate-800 !text-black dark:!text-white">
      <button
        onClick={() => navigate("/veg")}
        className="flex items-center text-red-500 hover:text-red-600 mb-6 dark:text-white text-xl"
      >
        <FaArrowLeft className="mr-2" /> Back
      </button>

      <h1 className="text-2xl block text-center my-10">Paneer Butter Masala</h1>

      <img
        src="/paneer.jpg"
        alt="Paneer Butter Masala"
        className="w-full h-80 object-cover rounded-xl shadow-lg mb-8"
      />

      <section className="prose max-w-none">
        <h2 className="ingredientsH">About</h2>
        <p>
          A rich and creamy North Indian curry made with paneer (cottage cheese)
          in a tomato-based gravy with aromatic spices.
        </p>

        <h2 className="ingredientsH">Ingredients</h2>
        <ul className="ingredientsUl">
          <li>500g Paneer, cubed</li>
          <li>4 tbsp Butter</li>
          <li>2 cups Tomato puree</li>
          <li>1 cup Heavy cream</li>
          <li>2 tbsp Ginger-garlic paste</li>
          <li>2 tsp Garam masala</li>
          <li>Salt to taste</li>
          <li>Kasuri methi</li>
        </ul>

        <h2 className="ingredientsH">Preparation Steps</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Heat butter in a pan and sauté ginger-garlic paste.</li>
          <li>Add tomato puree and cook until oil separates.</li>
          <li>Add spices and simmer for 5 minutes.</li>
          <li>Add paneer cubes and cream.</li>
          <li>Cook for 10 minutes on low heat.</li>
          <li>Garnish with kasuri methi and serve hot.</li>
        </ol>
      </section>

      <div className="mt-10 flex items-center gap-4">
        <button
          onClick={handleLike}
          className="flex items-center gap-2 text-gray-600 dark:text-white hover:text-red-500 dark:hover:text-red-500 focus:outline-none"
        >
          {liked ? <FaHeart className="text-red-500" /> : <FaRegHeart />}{" "}
          {liked ? "Liked" : "Like"}
        </button>
      </div>

      <div className="mt-12">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Comments</h3>
        <form onSubmit={handleComment} className="mb-6">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment..."
            className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-red-500 min-h-[120px] text-black"
          />
          <button
            type="submit"
            className="mt-3 bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full"
          >
            Post Comment
          </button>
        </form>

        <div className="space-y-4">
          {comments.map((comment, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded-lg shadow">
              <strong className="block text-gray-800">{comment.user}</strong>
              <p className="text-gray-700 mt-1">{comment.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PaneerButterMasala;
