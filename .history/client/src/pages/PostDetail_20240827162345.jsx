import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { DUMMY_POSTS } from '../data';
import PostAuthor from '../comporments/PostAuthor'
import Thumbnail from '../images/24af6dcd-fa32-476a-af24-e0eb0b2e7f13.png';
import CommentSection from '../comporments/CommentSection';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';



const PostDetail = () => {
  const [posts, setPosts] = useState(DUMMY_POSTS);

  if (posts.length === 0) {
    return <p>No posts available</p>;
  }

  return (
    <section className='post-detail'>
      <div className="post-detail__container">
        <div className='post-detail__header'>
          <PostAuthor /> {/* Correct usage as a component */}
          <div className='post-detail__buttons'>
            <Link to={`/posts/werwer/edit`} className='btn sm primary'><ThumbUpIcon/></Link>
            <Link to={`/posts/werwer/delete`} className='btn sm primary'>Delete</Link>
          </div>
        </div>
        <h1>Tổ chức Hội nghị Đại biểu Viên chức và Người lao động năm học 2024 - 2025.</h1>
        <div className='post-detail__thumbnail'>
          <img src={Thumbnail} alt='' />
        </div>
        <p>Được biết, ngoài đấu trường thể thao, Đặng Thu Huyền còn thử sức với đấu trường sắc đẹp...</p>
        {/* Other content */}
      </div>
      <CommentSection /> {/* Correct usage as a component */}
    </section>
  );
};

export default PostDetail;
