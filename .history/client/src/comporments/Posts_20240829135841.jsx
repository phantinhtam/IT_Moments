import React, { useState } from 'react';
import PostItem from './PostItem';
import { DUMMY_POSTS } from '../data';
import { Link } from 'react-router-dom';
import Thumbnail from '../images/ban-ket-cuoc-thi-khoi-nghiep-2024.jpg';

const Posts = () => {
  const [posts, setPosts] = useState(DUMMY_POSTS);
  return (
    <div className="container">
      <div className="post__container">
        {posts.length > 0 ? (
          posts.map(({ id, thumbnail, category, title, desc, authorID }) => (
            <PostItem
              key={id}
              postID={id}
              thumbnail={thumbnail}
              category={category}
              title={title}
              desc={desc}
              authorID={authorID}
            />
          ))
        ) : (
          <h2 className="center">No posts found</h2>
        )}
      </div>
      <div className="sidebar">
        <div className="LeftSide">
          <div className="Title-Left">
            <h3>Bài Viết</h3>
            <ul>
              <li><Link to="/postsnew/1">Sự kiện sắp diễn ra</Link></li>
              <li><Link to="/postsold/1">Sự kiện đã diễn ra</Link></li>
            </ul>
          </div>
        </div>
        <div className="LeftSide">
          <div className="Title">
            <h3>Tổ chức Hội nghị Đại biểu Viên chức và Người lao động năm học 2024 - 2025</h3>
            <div className="post-sidebar__thumbnail">
              <img src={Thumbnail} alt="" />
            </div>
            <ul>
              <li>Cuộc thi Sinh viên Công Thương với ý tưởng khởi nghiệp là cuộc thi được tổ chức thường niên của Trường Đại học Công Thương Thành phố Hồ Chí Minh</li>
              <Link to="/" className="font_post">Đọc Thêm </Link>
            </ul>
          </div>
        </div>
        {/* Add more LeftSide sections as needed */}
      </div>
    </div>
  );
};

export default Posts;
