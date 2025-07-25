import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaHeart, FaRegHeart } from 'react-icons/fa';

function ButterChicken() {
  const navigate = useNavigate();
  const [liked, setLiked] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleLike = () => {
    setLiked(!liked);
  };

  const handleComment = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([...comments, { text: newComment, user: localStorage.getItem('username') }]);
      setNewComment('');
    }
  };

  return (
    <div className=" recipe-detail-container max-w-4xl mx-auto px-4 pt-32 pb-16 ingrdientsDiv">
      <div className="back-button dark:text-white " onClick={() => navigate('/nonveg')} >
              <FaArrowLeft  /> Back
            </div>

      <h1 className="text-2xl block text-center my-10">Butter Chicken</h1>

      <img src="/chicken.jpg" alt="Butter Chicken" className="w-full h-80 object-cover rounded-xl shadow-lg mb-8" />

      <section className="prose max-w-none">
        <h2 className='ingredientsH'>About</h2>
        <p>A rich and creamy North Indian dish made with tender chicken cooked in a spiced tomato-butter sauce.</p>

        <h2 className='ingredientsH'>Ingredients</h2>
        <ul className="list-disc pl-6">
          <li>500g Chicken, boneless and cut into pieces</li>
          <li>2 tbsp Butter</li>
          <li>1 cup Tomato puree</li>
          <li>1/2 cup Heavy cream</li>
          <li>2 tbsp Yogurt</li>
          <li>1 tbsp Ginger-garlic paste</li>
          <li>1 tsp Garam masala</li>
          <li>1/2 tsp Turmeric powder</li>
          <li>1/2 tsp Red chili powder</li>
          <li>Salt to taste</li>
          <li>1 tsp Kasuri methi (dried fenugreek leaves)</li>
          <li>Fresh coriander for garnish</li>
        </ul>

        <h2 className='ingredientsH'>Preparation Steps</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Marinate chicken with yogurt, ginger-garlic paste, turmeric, chili powder, and salt for 30 minutes.</li>
          <li>Heat butter in a pan, cook marinated chicken until lightly browned.</li>
          <li>Remove chicken and set aside.</li>
          <li>In the same pan, add tomato puree and cook until oil separates.</li>
          <li>Stir in garam masala, kasuri methi, and cooked chicken.</li>
          <li>Pour in heavy cream, mix well, and simmer for 10 minutes.</li>
          <li>Garnish with fresh coriander and serve hot with naan or rice.</li>
        </ol>
      </section>

      <div className="mt-10 flex items-center gap-4">
        <button onClick={handleLike} className="flex items-center gap-2 text-gray-600 dark:text-white hover:text-red-500 dark:hover:text-red-500 focus:outline-none">
          {liked ? <FaHeart className="text-red-500" /> : <FaRegHeart />} {liked ? 'Liked' : 'Like'}
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
          <button type="submit" className="mt-3 bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full">Post Comment</button>
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

export default ButterChicken;