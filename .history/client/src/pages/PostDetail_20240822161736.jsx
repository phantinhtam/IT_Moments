import React from 'react'
import PostAuthor from '../comporments/PostAuthor'
import { Link } from 'react-router-dom'
import Thumbnail from '../images/hoi-nghi-trien-khai-thong-tu-242024tt-btc-va-pho-bien-phap-lenh-xu-phat-trong-linh-vuc-kiem-toan.jpg'
import { DUMMY_POSTS } from '../data'


const PostDetail = (postID, category, title, desc, authorID, thumbnail) => {
    return (
        // <section className="post-detail">
        //     <div className="container post-detail__container">
        //         <div className="post-detail__header">
        //             <PostAuthor />
        //             <div className="post-detail__buttons">
        //                 <Link to={`posts/werwer/edit`} className='btn sm primary'>Sua</Link>
        //                 <Link to={`posts/werwer/delete`} className='btn sm danger'>Sua</Link>
        //             </div>
        //         </div>
        //         <h1>Tổ chức hội nghị thông tin thời sự, tuyên truyền về tình hình biển đảo năm 2024</h1>
        //         <div className="post-detail__thumbnail">
        //             <img src={Thumbnail} alt="" />
        //         </div>
        //         <p>
        //             Cuộc thi Sinh viên Công Thương với ý tưởng khởi nghiệp là cuộc thi được tổ chức thường niên của Trường Đại học
        //             Công Thương Thành phố Hồ Chí Minh nhằm thúc đẩy tinh thần khởi nghiệp đổi mới sáng tạo trong sinh viên cũng như
        //             tạo cơ hội cho sinh viên phát triển các ý tưởng đổi mới sáng tạo, là môi trường để sinh viên hình thành và hiện
        //             thực hóa các ý tưởng, giải pháp, dự án khởi nghiệp tạo giá trị cho bản thân, gia đình, cộng đồng và xã hội để giải
        //             quyết các vấn đề của cộng đồng, xã hội, góp phần đẩy mạnh phát triển kinh tế, xã hội. Năm 2024, cuộc thi trở lại với
        //             chủ đề “Innovation towards a green future” được tổ chức với quy mô mở rộng cho sinh viên tất cả các trường đại học,
        //             cao đẳng tại TP.HCM và các tỉnh lận cận, nhằm tìm kiếm các ý tưởng, giải pháp đổi mới sáng tạo hướng tới một tương lai xanh,
        //             giải quyết các vấn đề của cộng đồng, xã hội góp phần thúc đẩy kinh tế, xã hội phát triển bền vững.
        //         </p>
        //         <p>
        //             Cuộc thi Sinh viên Công Thương với ý tưởng khởi nghiệp là cuộc thi được tổ chức thường niên của
        //             Trường Đại học Công Thương Thành phố Hồ Chí Minh nhằm thúc đẩy tinh thần khởi nghiệp đổi mới sáng tạo
        //             trong sinh viên cũng như tạo cơ hội cho sinh viên phát triển các ý tưởng đổi mới sáng tạo, là môi trường
        //             để sinh viên hình thành và hiện thực hóa các ý tưởng, giải pháp, dự án khởi nghiệp tạo giá trị cho bản thân,
        //             gia đình, cộng đồng và xã hội để giải quyết các vấn đề của cộng đồng, xã hội, góp phần đẩy mạnh phát triển kinh tế, xã hội.
        //         </p>
        //     </div>
        // </section>
        <div className='post-detail'>
            <div className="container post-detail__container">
            {posts.map((postID) => (
                    <div className="container post-detail__container" key={postID.id}>
                        <div className="img" >
                            <img src={Thumbnail} alt="" />                     
                        </div>
                        <div className="content_postdetail">
                            <Link to={`/posts/${postID}`}>
                            <h1>{title}</h1>
                             
                            <p>{desc}</p>
                            <button>Đọc Thêm</button>
                           </Link>
                        </div>
                    </div>
            ))}
            </div>

        </div>
    );
};
export default PostDetail
