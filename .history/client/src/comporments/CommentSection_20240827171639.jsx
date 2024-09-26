// CommentSection.js
import React, { useState } from 'react';

const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');

  const handleCommentChange = (e) => {
    setCommentText(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (commentText.trim() === '') return;

    setComments([...comments, commentText]);
    setCommentText('');
  };

  return (
    <div className='comment-section'>
      <h2>Comments</h2>
      <ul className='comment-list'>
        {comments.map((comment, index) => (
          <li key={index} className='comment-item'>
            {comment}
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
