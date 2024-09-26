import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../images/avt_cv.jpg'

const PostAuthor = () => {
  return (
<Link to={`/posts/users/sdfsdf`} className='post__author'>
<div className="post__author-avatar">
  <img src={Avatar} alt=""/>
</div>
<div className="post__author-detail">
  <h4> Phan Tinh Tam</h4>
  <div className="nav__date-time">
   <li><Link to="/"> Thứ năm, ngày 22/08/2024 : 02:52:47 </Link></li> 
    </div>
</div>

</Link>
  )
}

export default PostAuthor
