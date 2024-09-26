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
  const [hover, setHover] = useState(false);

  const handleLike = (type) => {
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
  };

  const handleComment = () => {
    setCommentVisible(!commentVisible);
  };

  const handleShare = () => {
    setShares(shares + 1);
  };

  return (
    <div className='postbottom-section'>
      <div
        className='actions'
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <button onClick={() => handleLike('like')} className='like-button'>
          <ThumbUpAltIcon /> {likes}
        </button>
        <button onClick={() => handleLike('tym')} className='like-button'>
          <FavoriteIcon /> {tyms}
        </button>
        <button onClick={() => handleLike('haha')} className='like-button'>
          <EmojiEmotionsIcon /> {haha}
        </button>
        <button onClick={() => handleLike('wow')} className='like-button'>
          <SentimentSatisfiedAltIcon /> {wow}
        </button>
        <button onClick={() => handleLike('sad')} className='like-button'>
          <SentimentVeryDissatisfiedIcon /> {sad}
        </button>
        <button onClick={() => handleLike('phanno')} className='like-button'>
          <ThumbDownAltIcon /> {phanno}
        </button>
        <button onClick={handleComment} className='comment-button'>
          💬 Comment {comments.length}
        </button>
        <button onClick={handleShare} className='share-button'>
          🔗 Share {shares}
        </button>
      </div>
      {hover && (
        <div className='reaction-icons'>
          <span onClick={() => handleLike('like')}>
            <ThumbUpAltIcon /> Like
          </span>
          <span onClick={() => handleLike('tym')}>
            <FavoriteIcon /> Tym
          </span>
          <span onClick={() => handleLike('haha')}>
            <EmojiEmotionsIcon /> Haha
          </span>
          <span onClick={() => handleLike('wow')}>
            <SentimentSatisfiedAltIcon /> Wow
          </span>
          <span onClick={() => handleLike('sad')}>
            <SentimentVeryDissatisfiedIcon /> Sad
          </span>
          <span onClick={() => handleLike('phanno')}>
            <ThumbDownAltIcon /> PhanNo
          </span>
        </div>
      )}
      {commentVisible && (
        <div className='comments-section'>
          <p>No comments yet.</p> {/* You can replace this with a list of comments */}
        </div>
      )}
    </div>
  );
};

export default PostBottom;
