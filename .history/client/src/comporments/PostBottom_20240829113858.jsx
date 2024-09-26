import React, { useState } from 'react';


const PostBottom = () => {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [commentVisible, setCommentVisible] = useState(false);
  const [shares, setShares] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
    setLikes(tim + 1);
    setLikes(haha + 1);
    setL
  };

  const handleComment = () => {
    setCommentVisible(!commentVisible);
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
          💬 Comment {comments.length}
        </button>
        <button onClick={handleShare} className='share-button'>
          🔗 Share {shares}
        </button>
      </div>
      {commentVisible && (
        <div className='comments-section'>
          <p>No comments yet.</p> {/* You can replace this with a list of comments */}
        </div>
      )}
    </div>
  );
};

export default PostBottom;
