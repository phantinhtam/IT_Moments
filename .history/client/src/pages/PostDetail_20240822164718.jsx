import React, { useState } from 'react'
import PostAuthor from '../comporments/PostAuthor'
import { Link } from 'react-router-dom'
import { DUMMY_POSTS } from '../data'


const PostDetail = (postID, category, title, desc, authorID, thumbnail) => {
    const [posts, setPosts] = useState(DUMMY_POSTS);
    return (
        <div className='post-detail'>
            <div className=" post-detail__container">
                    {posts.map((post) => (
                    <div className=" post-" key={post.id}>
                        <div className="thumbnail" >
                            <img src={post.thumbnail} alt="" />                     
                        </div>
                        <div className="content-pdetail">
                            <Link className="link" to={`/post-/${post.id}`}>
                            <h1>{post.title}</h1>
                           </Link>  
                            <p>{post.desc}</p>
                            <button>Đọc Thêm</button>
                           
                        </div>
                    </div>
            ))}
            </div>

        </div>
    );
};
export default PostDetail
