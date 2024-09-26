import React, { useState } from 'react';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import { TextField, Button, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ReplyIcon from '@mui/icons-material/Reply';
import SendIcon from '@mui/icons-material/Send';


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
  const [newComment, setNewComment] = useState('');
  const [commentVisible, setCommentVisible] = useState(false);
  const [shares, setShares] = useState(0);
  const [showReactions, setShowReactions] = useState(false);
  const [showReactionDetails, setShowReactionDetails] = useState('');
  const [editCommentId, setEditCommentId] = useState(null);
  const [editCommentText, setEditCommentText] = useState('');
  const [replyContent, setReplyContent] = useState('');
  const [replyTo, setReplyTo] = useState(null);

  const handleReaction = (type) => {
    setReactions(prev => ({
      ...prev,
      [type]: prev[type] + 1
    }));
    setShowReactions(false); // Hide popover after reaction
  };

  const handleComment = () => {
    if (newComment.trim()) {
      setComments([...comments, { id: Date.now(), content: newComment, replies: [] }]);
      setNewComment('');
      setCommentVisible(true);
    }
  };

  const handleShare = () => {
    setShares(shares + 1);
  };

  const handleEditComment = (id, newContent) => {
    setComments(comments.map(comment => comment.id === id ? { ...comment, content: newContent } : comment));
    setEditCommentId(null);
    setEditCommentText('');
  };

  const handleDeleteComment = (id) => {
    setComments(comments.filter(comment => comment.id !== id));
  };

  const handleReply = (id) => {
    if (replyContent.trim()) {
      setComments(comments.map(comment => 
        comment.id === id 
          ? { ...comment, replies: [...comment.replies, { id: Date.now(), content: replyContent }] }
          : comment
      ));
      setReplyContent('');
      setReplyTo(null);
    }
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
        <button onClick={() => setCommentVisible(!commentVisible)} className='comment-button'>
          💬 Comment {comments.length}
        </button>
        <button onClick={handleShare} className='share-button'>
          🔗 Share {shares}
        </button>
      </div>
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
      {showReactionDetails && (
        <div className='reaction-details'>
          <p>Hiển thị danh sách người dùng thả cảm xúc {showReactionDetails} (đang cập nhật...)</p>
        </div>
      )}
      {commentVisible && (
        <div className='comments-section'>
          <TextField
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            variant="outlined"
            size="small"
            fullWidth
            placeholder="Write a comment..."
          />
          <Button onClick={handleComment} variant="contained"><SendIcon/></Button>
          {comments.map(comment => (
            <div key={comment.id} className='comment'>
              {editCommentId === comment.id ? (
                <>
                  <TextField
                    value={editCommentText}
                    onChange={(e) => setEditCommentText(e.target.value)}
                    variant="outlined"
                    size="small"
                  />
                  <Button onClick={() => handleEditComment(comment.id, editCommentText)}>Save</Button>
                </>
              ) : (
                <p>{comment.content}</p>
              )}
              <div className='comment-actions'>
                <IconButton onClick={() => { setEditCommentId(comment.id); setEditCommentText(comment.content); }}>
                  <EditIcon />
                </IconButton>
                <IconButton onClick={() => handleDeleteComment(comment.id)}>
                  <DeleteIcon />
                </IconButton>
                <IconButton onClick={() => setReplyTo(comment.id)}>
                  <ReplyIcon />
                </IconButton>
              </div>
              {replyTo === comment.id && (
                <div className='reply-section'>
                  <TextField
                    value={replyContent}
                    onChange={(e) => setReplyContent(e.target.value)}
                    variant="outlined"
                    size="small"
                    fullWidth
                    placeholder="Write a reply..."
                  />
                  <Button onClick={() => handleReply(comment.id)} variant="contained">Reply</Button>
                </div>
              )}
              {comment.replies.length > 0 && (
                <div className='replies'>
                  {comment.replies.map(reply => (
                    <div key={reply.id} className='reply'>
                      <p>{reply.content}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostBottom;
