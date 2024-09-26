import React from 'react'
import { Link } from 'react-router-dom'
import PostAuthor from './PostAuthor'




const PostItem = ({postID, category, title, desc, authorID, thumbnail }) => {
  const shortDesciption = desc.length > 145 ? desc.substr(0, 145)+ '...' : desc;
  const postTitle = desc.length > 45 ? desc.substr(0, 45)+ '...' : title;
  return (
   <article className="post ">
    <div className="post_thumbnail">

        <img src={thumbnail} alt={title}/>
    </div>
    <div className="post_content">
        <Link to={`/posts/${postID}`} >
              <h3>{postTitle}</h3>
        </Link>
        <p>{shortDesciption}</p>
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
