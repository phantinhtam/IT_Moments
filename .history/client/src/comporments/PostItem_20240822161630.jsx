import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PostAuthor from './PostAuthor'
import { DUMMY_POSTS } from '../data'



const PostItem = ({postID, category, title, desc, authorID, thumbnail }) => {
  const [posts, setPosts] = useState(DUMMY_POSTS);
  return (
   <article className="post ">
    <div className="post_thumbnail">

        <img src={thumbnail} alt={title}/>
    </div>
    <div className="post_content">
        <Link to={`/posts/${postID}`} >
              <h3>{title}</h3>
        </Link>
        <p>{desc}</p>
        <div className="post__footer">
           {/* <PostAuthor/>
           <Link to={`/posts/cateories/${category}`} className='btn category'>{category}</Link> */
           }
        </div>
    </div>
   </article>
  )
}

export default PostItem
