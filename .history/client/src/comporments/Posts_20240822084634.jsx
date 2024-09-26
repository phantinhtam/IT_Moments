import React, { useState } from 'react'
import PostItem from './PostItem'
import { DUMMY_POSTS } from '../data'




const Posts = () => {
    const [posts, setPosts] = useState(DUMMY_POSTS)
    return (
        <section className="posts">
            {posts.length > 0 ? <div className="container post__container">
                {
                    posts.map(({ id, thumbnail, category, title, desc, authorID }) => <PostItem
                        key={id} postID={id} thumbnail={thumbnail} category={category}
                        title={title} desc={desc} authorID={authorID} />)
                }
            </div> : <h2 className='center'>No post founds</h2>}
            <div ></div>
        </section>
         </div>
         <div className="col-md-3 menu_right">
             <div className="sticky">
                 <div className="widget wNewType TopSide">
                     <div className="widget-title">
                         <h3>Sự kiện</h3>
                     </div>
                     <ul>
                         <li>
                             <a href="/su-kien?f=sap-dien-ra">Sự kiện sắp diễn ra</a>
                         </li>
                         <li>
                             <a href="/su-kien?f=da-dien-ra">Sự kiện đã diễn ra</a>
                         </li>
                     </ul>
                 </div>
             </div>
         </div>
     </div>
 </div>
);
    )
}

export default Posts
