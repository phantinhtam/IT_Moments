import React from 'react';
import './PostReaction.css';

const PostReaction = () => {
  return (
    <div className="post-reaction-container">
      <div className="reaction-toolbar">
        <div className="reaction">
          <img
            src="https://img.icons8.com/ios-filled/50/000000/facebook-like.png"
            alt="like-icon"
            className="reaction-icon"
          />
          <span className="reaction-count">15</span>
        </div>
        <div className="reaction">
          <img
            src="https://img.icons8.com/ios-filled/50/000000/heart.png"
            alt="love-icon"
            className="reaction-icon"
          />
          <span className="reaction-count">25</span>
        </div>
      </div>
    </div>
  );
};

export default PostReaction;
