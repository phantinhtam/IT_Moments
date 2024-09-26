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
    phanno: 0
  });
  const [comments, setComments] = useState([]);
  const [commentVisible, setCommentVisible] = useState(false);
  const [shares, setShares] = useState(0);
  const [showReactions, setShowReactions] = useState(false);
  const [showReactionDetails, setShowReactionDetails] = useState(false);
  const [reactionDetails, setReactionDetails] = useState({});

  const handleReaction = (type) => {
    setReactions(prev => ({
      ...prev,
      [type]: prev[type] + 1
    }));
    setReactionDetails(prev => ({
      ...prev,
      [type]: (prev[type] || 0) + 1
    }));
    setShowReactions(false); // Hide popover after reaction
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
        <div
          className='like-button-wrapper'
          onMouseEnter={() => setShowReactions(true)}
          onMouseLeave={() => setShowReactions(false)}
        >
          <button className='like-button'>
            <ThumbUpAltIcon /> Like {reactions.like}
          </button>
          {showReactions && (
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
          💬 Comment {comments.length}
        </button>
        <button onClick={handleShare} className='share-button'>
          🔗 Share {shares}
        </button>
      </div>
      {/* Hiển thị số lượt người thả cảm xúc */}
      <div className='reaction-counts'>
        {Object.keys(reactions).map(type => (
          reactions[type] > 0 && (
            <span
              key={type}
              className='reaction-count'
              onMouseEnter={() => setShowReactionDetails(type)}
              onMouseLeave={() => setShowReactionDetails('')}
            >
              {type === 'like' && '👍'}
              {type === 'tym' && '❤️'}
              {type === 'haha' && '😂'}
              {type === 'wow' && '😮'}
              {type === 'sad' && '😢'}
              {type === 'phanno' && '😡'} 
              {reactions[type]}
            </span>
          )
        ))}
      </div>
      {/* Hiển thị chi tiết các cảm xúc khi di chuột vào */}
      {showReactionDetails && (
        <div className='reaction-details'>
          <p>Hiển thị danh sách người dùng thả cảm xúc {showReactionDetails} (đang cập nhật...)</p>
        </div>
      )}
      {commentVisible && (
        <div className='comments-section'>
          <p>No comments yet.</p> {/* Bạn có thể thay đổi điều này thành danh sách các bình luận */}
        </div>
      )}
    </div>
  );
};

export default PostBottom;
