/*============================= Post Detail ==========================*/
.post-detail {
    padding: 20px;
    background-color: var(--body-color); /* Màu nền của trang */
  }
  
  .post-detail__container {
    display: flex;
    flex-direction: column;
    gap: 2rem; /* Khoảng cách giữa các bài viết */
  }
  
  /* Định dạng cho từng bài viết */
  .post {
    display: flex;
    flex-direction: column;
    background-color: var(--container-color); /* Màu nền của bài viết */
    border-radius: 8px; /* Bo góc cho các phần tử */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Đổ bóng nhẹ */
    overflow: hidden; /* Ẩn phần tử tràn ra ngoài */
    transition: box-shadow 0.3s ease-in-out; /* Hiệu ứng chuyển tiếp cho đổ bóng */
  }
  
  .post:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2); /* Tăng đổ bóng khi hover */
  }
  
  /* Định dạng cho phần hình ảnh thumbnail */
  .thumbnail {
    width: 100%;
    height: 200px; /* Chiều cao cố định cho hình ảnh */
    overflow: hidden;
  }
  
  .thumbnail img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Đảm bảo hình ảnh phủ đầy không bị bóp méo */
    transition: transform 0.3s ease-in-out; /* Hiệu ứng chuyển tiếp cho hình ảnh */
  }
  
  .thumbnail img:hover {
    transform: scale(1.05); /* Phóng to hình ảnh khi hover */
  }
  
  /* Định dạng cho nội dung bài viết */
  .content-pdetail {
    padding: 20px;
  }
  
  .content-pdetail h1 {
    font-size: 1.5rem;
    color: var(--title-color); /* Màu tiêu đề bài viết */
    margin-bottom: 10px;
  }
  
  .content-pdetail p {
    font-size: 1rem;
    color: var(--text-color); /* Màu văn bản */
    margin-bottom: 20px;
  }
  
  .content-pdetail button {
    background-color: var(--first-color); /* Màu nền của nút */
    color: var(--container-color); /* Màu chữ của nút */
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease; /* Hiệu ứng chuyển tiếp cho nền nút */
  }
  
  .content-pdetail button:hover {
    background-color: var(--first-color-dark); /* Màu nền nút khi hover */
  }
  