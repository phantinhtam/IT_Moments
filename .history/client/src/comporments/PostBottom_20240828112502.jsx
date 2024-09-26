import React, { useState } from 'react';

const PostBottom = () => {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState(0);
  const [shares, setShares] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleComment = () => {
    setComments(comments + 1);
  };

  const handleShare = () => {
    setShares(shares + 1);
  };

  return (
    <div className='postbottom-section'>
      <div className='actions'>
        <button onClick={handleLike} className='like-button'>
          👍 Like {likes}
        </button>
        <button onClick={handleComment} className='comment-button'>
          💬 Comment {comments}
        </button>
        <button onClick={handleShare} className='share-button'>
          🔗 Share {shares}
        </button>
      </div>
    </div>
  );
};

export default PostBottom;
