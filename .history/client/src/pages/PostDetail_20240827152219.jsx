import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { DUMMY_POSTS } from '../data';
import PostAuthor from '../comporments/PostAuthor';
import Thumbnail from '../images/24af6dcd-fa32-476a-af24-e0eb0b2e7f13.png'


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
                    <PostAuthor />
                    <div className='post-detail__buttons'>
                        <Link to={`/posts/werwer/edit`} className='btn sm primary'>Edit</Link>
                        <Link to={`/posts/werwer/delete`} className='btn sm primary'>Delete</Link>
                    </div>
                </div>
                <h1>Tổ chức Hội nghị Đại biểu Viên chức và Người lao động năm học 2024 - 2025.</h1>
                <div className='post-detail__thumbnail'>
                    <img src={Thumbnail} alt='' />
                </div>
                <p> Được biết, ngoài đấu trường thể thao, Đặng Thu Huyền còn thử sức với đấu trường sắc đẹp. Cuộc thi Hoa hậu Hoàn vũ Việt Nam 2022 có ý nghĩa gì với bạn?

                    Đối với tôi, đây là một cuộc thử sức. Khi đăng ký dự thi, tôi khiến ban giám khảo bất ngờ với xuất thân thể thao. Với cuộc thi này, tôi cũng muốn chứng minh rằng vận động viên nữ không chỉ gắn liền với sự mạnh mẽ, gai góc.

                    Hoa hậu Hoàn vũ Việt Nam cũng cho tôi cơ hội phát huy tính nữ. Hơn nữa, hoa hậu hiện nay không chỉ được đánh giá nhờ vẻ đẹp ngoại hình. Trong cuộc thi năm đó, tôi có cơ hội tranh luận, hùng biện nhiều, tiết kiệm được thời gian tự khám phá bản thân.

                    Nhiều người mặc định rằng vận động viên mang vẻ đẹp khỏe khoắn, thậm chí thô cứng. Tuy nhiên, tôi không đồng tình với quan điểm đó. Vận động viên nữ vẫn là phái yếu, vẫn cần nhờ đến sự trợ giúp của phái mạnh trong các hoạt động như kê bàn, bê ghế.

                    Tôi nhiều lần chạnh lòng khi không được đối xử như một người phụ nữ trong đời sống hàng ngày. Đây cũng là điều diễn ra thường xuyên đối với các vận động viên nữ.

                    Hoạt động thể thao trong thời gian dài có khiến tính nữ trong Đặng Thu Huyền bị kìm hãm, o ép không?

                    Tôi cảm thấy may mắn khi vẫn duy trì được tính nữ trong quá trình luyện tập, thi đấu. Khi cởi bỏ bộ đồng phục bóng chuyền, tôi vẫn chăm chút ngoại hình, tập tành makeup.
                </p>

                <p>Dù đắn đo nhiều, tôi vẫn chọn dừng lại. Trước khi giải nghệ, tôi đã nỗ lực đạt được một
                    số thành tích như vào đội tuyển U19 quốc gia, vô địch 2 năm liên tiếp các giải bóng chuyền
                    trẻ trong nước và có cơ hội thi đấu quốc tế. Đây là cái kết đẹp cho một chương trong cuộc đời.</p>
                <p>Dù đắn đo nhiều, tôi vẫn chọn dừng lại. Trước khi giải nghệ, tôi đã nỗ lực đạt được một
                    số thành tích như vào đội tuyển U19 quốc gia, vô địch 2 năm liên tiếp các giải bóng chuyền
                    trẻ trong nước và có cơ hội thi đấu quốc tế. Đây là cái kết đẹp cho một chương trong cuộc đời.</p>
            </div>
            <p>Tôi cảm thấy may mắn khi vẫn duy trì được tính nữ trong quá trình luyện tập, thi đấu.
                Khi cởi bỏ bộ đồng phục bóng chuyền, tôi vẫn chăm chút ngoại hình, tập tành makeup.</p>
        </section>
    );
};

export default PostDetail;
