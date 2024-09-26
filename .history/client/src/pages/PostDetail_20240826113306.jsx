import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PostAuthor from '../comporments/PostAuthor';
const PostDetail = () => {
    // const [posts, setPosts] = useState(DUMMY_POSTS);

    // if (posts.length === 0) {
    //     return <p>No posts available</p>; // Hiển thị thông báo nếu không có bài viết
    // }

    return (
        <section className='post-detail'>
            <div className="container post-detail__container">
                <div className='post-detail__header'>
                    <PostAuthor/>
                    <div className='post-detail'
                </div>
            </div>
        </section>
    );
};

export default PostDetail;
