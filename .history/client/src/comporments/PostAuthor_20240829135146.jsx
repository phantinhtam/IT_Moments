import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../images/avt_cv.jpg';

const PostAuthor = () => {
  return (
    <Link to={`/posts/users/sdfsdf`} className='post__author'>
      <div className="post__author-avatar">
        <img src={Avatar} alt="Author Avatar" />
      </div>
      <div className="post__author-detail">
        <h4>Phan Tinh Tam</h4>
       
      </div>
      
    </Link>
  );
}

export default PostAuthor;