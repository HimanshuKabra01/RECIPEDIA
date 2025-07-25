import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaHeart, FaRegHeart } from 'react-icons/fa';
import '../styles/RecipeDetail.css';

function Biryani() {
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
    <div className="recipe-detail-container dark:bg-slate-800 !text-black dark:!text-white">
      <div className="back-button dark:text-white " onClick={() => navigate('/nonveg')} >
        <FaArrowLeft  /> Back
      </div>
      
      <h1 className='text-2xl block text-center my-10'>Chicken Biryani</h1>
      
      <div className="recipe-image">
        <img src="/biriyani.jpg" alt="Chicken Biryani" />
      </div>

      <div className="recipe-info">
        <h2 className='!text-black dark:!text-white text-xl'>About</h2>
        <p>A delicious and aromatic rice dish made with marinated chicken, basmati rice, and a blend of fragrant spices.</p>

        <h2 className='!text-black dark:!text-white text-xl'>Ingredients</h2>
        <ul className='list-disc ml-6 marker:text-black dark:marker:text-white'>
          <li>2 cups Basmati rice</li>
          <li>500g Chicken, cut into pieces</li>
          <li>1 cup Yogurt</li>
          <li>2 tbsp Ginger-garlic paste</li>
          <li>2 tsp Biryani masala</li>
          <li>1/2 tsp Turmeric powder</li>
          <li>1/2 tsp Red chili powder</li>
          <li>1 Onion, sliced</li>
          <li>1 Tomato, chopped</li>
          <li>2 tbsp Ghee or oil</li>
          <li>2 cups Water or chicken broth</li>
          <li>Salt to taste</li>
          <li>Fresh coriander and mint for garnish</li>
        </ul>

        <h2 className='!text-black dark:!text-white text-xl'>Preparation Steps</h2>
        <ol className='list-decimal'>
          <li>Marinate chicken with yogurt, ginger-garlic paste, turmeric, chili powder, and salt for 30 minutes</li>
          <li>Rinse and soak basmati rice for 20 minutes</li>
          <li>Heat ghee in a pan, sauté onions until golden brown</li>
          <li>Add tomatoes and cook until soft</li>
          <li>Add marinated chicken and cook until browned</li>
          <li>Stir in biryani masala, then add water or chicken broth</li>
          <li>Add soaked rice, cover, and cook on low heat until rice is fluffy and chicken is tender</li>
          <li>Garnish with fresh coriander and mint, serve hot</li>
        </ol>
      </div>

    

      <div className="user-interaction">
         <div className="mt-10 flex items-center gap-4">
                <button onClick={handleLike} className="flex items-center gap-2 text-gray-600 dark:text-white hover:text-red-500 dark:hover:text-red-500 focus:outline-none">
                  {liked ? <FaHeart className="text-red-500" /> : <FaRegHeart />} {liked ? 'Liked' : 'Like'}
                </button>
              </div>

        <div className="comment-section">
          <h3>Comments</h3>
          <form onSubmit={handleComment}>
            <textarea
              value={newComment}
              className='text-black'
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Add a comment..."
            />
            <button type="submit">Post Comment</button>
          </form>
          
          <div className="comments-list">
            {comments.map((comment, index) => (
              <div key={index} className="comment">
                <strong>{comment.user}</strong>
                <p>{comment.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Biryani;