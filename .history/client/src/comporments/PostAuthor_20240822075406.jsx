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
  <h5> Phan Tinh Tam</h5>
  <small>Hien Nay</small>
</div>

</Link>
  )
}

export default PostAuthor
