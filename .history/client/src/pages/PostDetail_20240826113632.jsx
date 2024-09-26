import React from 'react';
import { Link } from 'react-router-dom';
import PostAuthor from '../comporments/PostAuthor';
import Thumbnail from '../images/ban-ket-cuoc-thi-khoi-nghiep-2024.jpg'
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
                    <div className='post-detail__buttons'>
                        <Link to={'/posts/werwer/edit'} className='btn sm primary'>Edit</Link>
                        <Link to={'/posts/werwer/delete'} className='btn sm danger'>Detele</Link>
                    </div>
                </div>
                <h1>Tổ chức Hội nghị Đại biểu Viên chức và Người lao động năm học 2024 - 2025.</h1>
                <div className='post-detail__thumbnail'>
                    <img src={Thumbnail} alt=''/>
                </div>
            </div>
        </section>
    );
};

export default PostDetail;
