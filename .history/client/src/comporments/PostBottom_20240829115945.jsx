import React, { useState } from 'react';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';

const PostBottom = () => {
  const [likes, setLikes] = useState(0);
  const [tyms, setTyms] = useState(0);
  const [haha, setHaha] = useState(0);
  const [wow, setWow] = useState(0);
  const [sad, setSad] = useState(0);
  const [phanno, setPhanno] = useState(0);
  const [comments, setComments] = useState([]);
  const [commentVisible, setCommentVisible] = useState(false);
  const [shares, setShares] = useState(0);
  const [showReactions, setShowReactions] = useState(false);

  const handleReaction = (type) => {
    switch (type) {
      case 'like':
        setLikes(likes + 1);
        break;
      case 'tym':
        setTyms(tyms + 1);
        break;
      case 'haha':
        setHaha(haha + 1);
        break;
      case 'wow':
        setWow(wow + 1);
        break;
      case 'sad':
        setSad(sad + 1);
        break;
      case 'phanno':
        setPhanno(phanno + 1);
        break;
      default:
        break;
    }
    setShowReactions(false); // Ẩn popover sau khi người dùng đã chọn một cảm xúc
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
            <ThumbUpAltIcon /> Like {likes}
          </button>
          <button className='like-button'>
          <FavoriteIcon /> Tym {likes}
          </button>
          <button className='like-button'>
          <EmojiEmotionsIcon /> Haha {likes}
          </button>
          <button className='like-button'>
          <SentimentSatisfiedAltIcon /> Wow {likes}
          </button>
          {showReactions && (
            <div className='reaction-popover'>
              <span onClick={() => handleReaction('like')}>
                <ThumbUpAltIcon /> Like
              </span>
              <span onClick={() => handleReaction('tym')}>
                <FavoriteIcon /> Tym
              </span>
              <span onClick={() => handleReaction('haha')}>
                <EmojiEmotionsIcon /> Haha
              </span>
              <span onClick={() => handleReaction('wow')}>
                <SentimentSatisfiedAltIcon /> Wow
              </span>
              <span onClick={() => handleReaction('sad')}>
                <SentimentVeryDissatisfiedIcon /> Sad
              </span>
              <span onClick={() => handleReaction('phanno')}>
                <ThumbDownAltIcon /> PhanNo
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
      {commentVisible && (
        <div className='comments-section'>
          <p>No comments yet.</p> {/* Bạn có thể thay đổi điều này thành danh sách các bình luận */}
        </div>
      )}
    </div>
  );
};

export default PostBottom;
