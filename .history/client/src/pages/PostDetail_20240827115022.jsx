import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { DUMMY_POSTS } from '../data';
import PostAuthor from '../comporments/PostAuthor';
import Thumbnail from '../images/ban-ket-cuoc-thi-khoi-nghiep-2024.jpg'


const PostDetail = () => {
    const [posts, setPosts] = useState(DUMMY_POSTS);

    if (posts.length === 0) {
        return <p>No posts available</p>; // Hiển thị thông báo nếu không có bài viết
    }

    return (
        <section className='post-detail'>
            <div className="post-detail__container">
                {/* {posts.map((post) => (
                    <div className="post" key={post.id}>
                         <div className="thumbnail">
                            <img src={post.thumbnail} alt={post.title} />                     
                        </div>
                        <div className="content-pdetail">
                            <Link className="link" to={`/posts/${post.id}`}>
                                <h1>{post.title}</h1>
                            </Link>  
                            <p>{post.desc}</p>
                            <button>Đọc Thêm</button>
                            <p></p>
                        </div>
                    </div>
                ))} */}

                <div className='post-detail__header'>
                    <PostAuthor/>
                    <div className='post-detail__buttons'>
                        <Link to={`/posts/werwer/edit`} className='btn sm primary'>Edit</Link>
                        <Link to={`/posts/werwer/delete`} className='btn sm primary'>Delete</Link>
                    </div>
                </div>
                <h1>Tổ chức Hội nghị Đại biểu Viên chức và Người lao động năm học 2024 - 2025.</h1>
                <div className='post-detail__thumbnail'>
                    <img src={Thumbnail} alt=''/>
                </div>
                <p> 90 NGÀY 7.0 IELTS
day 46: let’s make it ✨
sắp quốc khánh gòi nên sau đây sẽ là vocab checked về Vietnam’s architecture 🇻🇳
- sterling (adj): excellent or valuable
- ruins (n): những tàn tích
- to ruin sth (v): phá huỷ cái gì
- Sanctuary (n): khu thánh địa, khu bảo tồn, nơi trú ẩn (3 nghĩa đc dùng nhiều)
- elaborate (adj): tinh xảo, phức tạp
- resilient (adj): kiên cố
- fortification (n): hệ thống phòng thủ
- winding (adj): quanh co (ex: winding rivers)
- sovereign (adj): thuộc về chủ quyền</p>
            </div>
        </section>
    );
};

export default PostDetail;
