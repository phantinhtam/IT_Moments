import React, { useState } from 'react';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';



const PostBottom = () => {
  const [likes,tyms,haha,wow,sad,phanno, setLikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [commentVisible, setCommentVisible] = useState(false);
  const [shares, setShares] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
    setLikes(tyms + 1);
    setLikes(haha + 1);
    setLikes(wow  + 1);
    setLikes(sad+ 1);
    setLikes(phanno + 1);
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
          <> {likes}
          👍 YeuThich {tyms}
          👍 Haha {haha}
          👍 Wow {wow}
          👍 Buon {sad}
          👍 PhanNo {phanno}

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
