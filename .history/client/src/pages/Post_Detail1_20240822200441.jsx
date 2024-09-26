import React from 'react';
import { Link } from 'react-router-dom';
import Thumbnail from '../images/ban-ket-cuoc-thi-khoi-nghiep-2024.jpg'

const PostDetail1 = () => {

    return (
        <div className='post-detail1'>
            <div className="post-detail__container">
                
                    <div className="post" >

                        <div className="content-pdetail1">
                           <h1>Tổ chức Lễ tốt nghiệp và trao bằng tốt nghiệp đợt 1 năm 2024</h1>
                        
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
                                     <img src={Thumbnail} alt="" />
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

                                    <h3><Link to="/post/1">Bài liên quan</Link></h3>
                                    <ul>
                                        <li><Link to="/post/1">title</Link></li>
                                        <li><Link to="/post/1">title</Link></li>
                                        <li><Link to="/post/1">title</Link></li>
                                        <li><Link to="/post/1">title</Link></li>
                                        <li><Link to="/post/1">title</Link></li>
                                    </ul>
                                </div>
                            </div>
                            </span>

                        </div>
                    </div>
            
            </div>
        </div>
    );
};

export default PostDetail1;
