import React, { useState } from 'react';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');
  const [likesDislikes, setLikesDislikes] = useState({});

  const handleCommentChange = (e) => {
    setCommentText(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (commentText.trim() === '') return;

    const newComment = {
      text: commentText,
      likes: 0,
      dislikes: 0
    };

    setComments([...comments, newComment]);
    setCommentText('');
  };

  const handleLike = (index) => {
    const updatedComments = [...comments];
    updatedComments[index].likes += 1;
    setComments(updatedComments);
  };

  const handleDislike = (index) => {
    const updatedComments = [...comments];
    updatedComments[index].dislikes += 1;
    setComments(updatedComments);
  };

  return (
    <div className='comment-section'>
      <h2>Comments</h2>
      <ul className='comment-list'>
        {comments.map((comment, index) => (
          <li key={index} className='comment-item'>
            <p>{comment.text}</p>
            <div className='comment-actions'>
              <button onClick={() => handleLike(index)} className='btn sm'>
                <ThumbUpIcon/> {comment.likes}
              </button>
              <button onClick={() => handleDislike(index)} className='btn sm'>
                < {comment.dislikes}
              </button>
            </div>
          </li>
        ))}
      </ul>
      <form onSubmit={handleCommentSubmit} className='comment-form'>
        <textarea
          value={commentText}
          onChange={handleCommentChange}
          placeholder='Add a comment...'
          className='comment-textarea'
          rows='4'
        ></textarea>
        <button type='submit' className='btn sm primary'>Post Comment</button>
      </form>
    </div>
  );
};

export default CommentSection;
