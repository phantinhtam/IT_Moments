import React, { useState } from 'react';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';

const PostBottom = () => {
  const [reactions, setReactions] = useState({
    like: 0,
    tym: 0,
    haha: 0,
    wow: 0,
    sad: 0,
    phanno: 0,
  });

  const [showReactionPopover, setShowReactionPopover] = useState(false);
  const [comments, setComments] = useState([]);
  const [commentVisible, setCommentVisible] = useState(false);
  const [shares, setShares] = useState(0);

  const handleReaction = (type) => {
    setReactions((prevReactions) => ({
      ...prevReactions,
      [type]: prevReactions[type] + 1,
    }));
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
        <div className='like-button-wrapper'>
          <button
            className='like-button'
            onMouseEnter={() => setShowReactionPopover(true)}
            onMouseLeave={() => setShowReactionPopover(false)}
          >
            <ThumbUpAltIcon /> {reactions.like}
          </button>
          {showReactionPopover && (
            <div className='reaction-popover'>
              <span onClick={() => handleReaction('like')}>
                <ThumbUpAltIcon />
              </span>
              <span onClick={() => handleReaction('tym')}>
                <FavoriteIcon />
              </span>
              <span onClick={() => handleReaction('haha')}>
                <EmojiEmotionsIcon />
              </span>
              <span onClick={() => handleReaction('wow')}>
                <SentimentSatisfiedAltIcon />
              </span>
              <span onClick={() => handleReaction('sad')}>
                <SentimentVeryDissatisfiedIcon />
              </span>
              <span onClick={() => handleReaction('phanno')}>
                <ThumbDownAltIcon />
              </span>
            </div>
          )}
        </div>
        <button onClick={handleComment} className='comment-button'>
          💬 Bình luận {comments.length}
        </button>
        <button onClick={handleShare} className='share-button'>
          🔗 Chia sẻ {shares}
        </button>
      </div>
      <div className='reaction-counts'>
        <div className='reaction-count'>
          👍 {reactions.like} ❤️ {reactions.tym} 😆 {reactions.haha} 😲 {reactions.wow} 😢 {reactions.sad} 😡 {reactions.phanno}
        </div>
      </div>
      {commentVisible && (
        <div className='comments-section'>
          <p>No comments yet.</p> {/* You can replace this with a list of comments */}
        </div>
      )}
      <div className='comment-input'>
        <input type='text' placeholder='Viết bình luận công khai...' />
      </div>
    </div>
  );
};

export default PostBottom;
