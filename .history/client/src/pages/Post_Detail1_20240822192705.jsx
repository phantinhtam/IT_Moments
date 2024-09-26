import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { DUMMY_POSTS } from '../data';

const PostDetail1 = () => {
    const [posts, setPosts] = useState(DUMMY_POSTS);

    if (posts.length === 0) {
        return <p>No posts available</p>; // Hiển thị thông báo nếu không có bài viết
    }

    return (
        <div className='post-detail1'>
            <div className="post-detail__container">
                {posts.map((post) => (
                    <div className="post" key={post.id}>

                        <div className="content-pdetail1">
                            
                                <h1>{post.title}</h1>
                            </Link>
                            <p>Cuộc thi Sinh viên Công Thương với ý tưởng khởi nghiệp là cuộc thi được tổ chức thường niên
                                của Trường Đại học Công Thương Thành phố Hồ Chí Minh nhằm thúc đẩy tinh thần khởi nghiệp đổi
                                mới sáng tạo trong sinh viên cũng như tạo cơ hội cho sinh viên phát triển các ý tưởng đổi mới
                                sáng tạo, là môi trường để sinh viên hình thành và hiện thực hóa các ý tưởng, giải pháp, dự án
                                khởi nghiệp tạo giá trị cho bản thân, gia đình, cộng đồng và xã hội để giải quyết các vấn đề của
                                cộng đồng, xã hội, góp phần đẩy mạnh phát triển kinh tế, xã hội. Năm 2024, cuộc thi trở lại với
                                chủ đề “Innovation towards a green future” được tổ chức với quy mô mở rộng cho sinh viên tất cả các
                                trường đại học, cao đẳng tại TP.HCM và các tỉnh lận cận, nhằm tìm kiếm các ý tưởng, giải pháp đổi
                                mới sáng tạo hướng tới một tương lai xanh, giải quyết các vấn đề của cộng đồng, xã hội góp phần
                                thúc đẩy kinh tế, xã hội phát triển bền vững. </p> 
                                <div className="thumbnail1">
                                     <img src={post.thumbnail} alt={post.title} />
                                </div>
                            <p>Cuộc thi Sinh viên Công Thương với ý tưởng khởi nghiệp là cuộc thi được tổ chức thường niên
                                của Trường Đại học Công Thương Thành phố Hồ Chí Minh nhằm thúc đẩy tinh thần khởi nghiệp đổi
                                mới sáng tạo trong sinh viên cũng như tạo cơ hội cho sinh viên phát triển các ý tưởng đổi mới
                                sáng tạo, là môi trường để sinh viên hình thành và hiện thực hóa các ý tưởng, giải pháp, dự án
                                khởi nghiệp tạo giá trị cho bản thân, gia đình, cộng đồng và xã hội để giải quyết các vấn đề của
                                cộng đồng, xã hội, góp phần đẩy mạnh phát triển kinh tế, xã hội. Năm 2024, cuộc thi trở lại với
                                chủ đề “Innovation towards a green future” được tổ chức với quy mô mở rộng cho sinh viên tất cả các
                                trường đại học, cao đẳng tại TP.HCM và các tỉnh lận cận, nhằm tìm kiếm các ý tưởng, giải pháp đổi
                                mới sáng tạo hướng tới một tương lai xanh, giải quyết các vấn đề của cộng đồng, xã hội góp phần
                                thúc đẩy kinh tế, xã hội phát triển bền vững. </p>
                            <p>Cuộc thi Sinh viên Công Thương với ý tưởng khởi nghiệp là cuộc thi được tổ chức thường niên
                                của Trường Đại học Công Thương Thành phố Hồ Chí Minh nhằm thúc đẩy tinh thần khởi nghiệp đổi
                                mới sáng tạo trong sinh viên cũng như tạo cơ hội cho sinh viên phát triển các ý tưởng đổi mới
                                sáng tạo, là môi trường để sinh viên hình thành và hiện thực hóa các ý tưởng, giải pháp, dự án
                                khởi nghiệp tạo giá trị cho bản thân, gia đình, cộng đồng và xã hội để giải quyết các vấn đề của
                                cộng đồng, xã hội, góp phần đẩy mạnh phát triển kinh tế, xã hội. Năm 2024, cuộc thi trở lại với
                                chủ đề “Innovation towards a green future” được tổ chức với quy mô mở rộng cho sinh viên tất cả các
                                trường đại học, cao đẳng tại TP.HCM và các tỉnh lận cận, nhằm tìm kiếm các ý tưởng, giải pháp đổi
                                mới sáng tạo hướng tới một tương lai xanh, giải quyết các vấn đề của cộng đồng, xã hội góp phần
                                thúc đẩy kinh tế, xã hội phát triển bền vững. </p>

                            <button>Đọc Thêm</button>
                            <span><div className="LeftSide">
                                <div className="Title-Left">

                                    <h3>Sự kiện</h3>
                                    <ul>
                                        <li><Link to="/post/1">{post.title}</Link></li>
                                        <li><Link to="/post/1">{post.title}</Link></li>
                                        <li><Link to="/post/1">{post.title}</Link></li>
                                        <li><Link to="/post/1">{post.title}</Link></li>
                                        <li><Link to="/post/1">{post.title}</Link></li>
                                    </ul>
                                </div>
                            </div>
                            </span>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PostDetail1;
