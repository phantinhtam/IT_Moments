import React, { useState } from 'react';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const PostBottom = () => {
 

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
                <ThumbDownIcon/> {comment.dislikes}
              </button>
              <button onClick={() => handleEdit(index)} className='btn sm'>
                <EditIcon/> Edit
              </button>
              <button onClick={() => handleDelete(index)} className='btn sm'>
                <DeleteIcon/> Delete
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
        <button type='submit' className='btn sm primary'>
          {editIndex !== null ? 'Update Comment' : 'Post Comment'}
        </button>
      </form>
    </div>
  );
};

export default PostBottom;
