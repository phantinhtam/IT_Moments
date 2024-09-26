import React, { useState } from 'react';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [likesDislikes, setLikesDislikes] = useState({});

  const handleCommentChange = (e) => {
    setCommentText(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (commentText.trim() === '') return;

    if (editIndex !== null) {
      // Update existing comment
      const updatedComments = [...comments];
      updatedComments[editIndex] = { ...updatedComments[editIndex], text: commentText };
      setComments(updatedComments);
      setEditIndex(null);
    } else {
      // Add new comment
      const newComment = {
        text: commentText,
        likes: 0,
        dislikes: 0,
        hasLiked: false,
        hasDisliked: false
      };
      setComments([...comments, newComment]);
    }

    setCommentText('');
  };

  const handleLike = (index) => {
    const updatedComments = [...comments];
    const comment = updatedComments[index];
    if (!comment.hasLiked) {
      comment.likes += 1;
      comment.hasLiked = true;
      // if (comment.hasDisliked) {
      //   comment.dislikes -= 1;
      //   comment.hasDisliked = false;
      // }
      setComments(updatedComments);
    }
  };

  const handleDislike = (index) => {
    const updatedComments = [...comments];
    const comment = updatedComments[index];
    if (!comment.hasDisliked) {
      comment.dislikes += 1;
      comment.hasDisliked = true;
      // if (comment.hasLiked) {
      //   comment.likes -= 1;
      //   comment.hasLiked = false;
      // }
      setComments(updatedComments);
    }
  };

  const handleEdit = (index) => {
    setCommentText(comments[index].text);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedComments = comments.filter((_, i) => i !== index);
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

export default CommentSection;
