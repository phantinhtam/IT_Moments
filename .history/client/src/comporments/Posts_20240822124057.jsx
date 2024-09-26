import React, { useState } from 'react'
import PostItem from './PostItem'
import { DUMMY_POSTS } from '../data'




// const Posts = () => {
//     const [posts, setPosts] = useState(DUMMY_POSTS)
//     return (
        
//         <section className="posts">
//             {posts.length > 0 ? <div className="container post__container">
//                 {
//                     posts.map(({ id, thumbnail, category, title, desc, authorID }) =>
//                         <PostItem
//                             key={id}
//                             postID={id}
//                             thumbnail={thumbnail}
//                             category={category}
//                             title={title}
//                             desc={desc}
//                             authorID={authorID}
//                              />)
//                 }
//             </div> : <h2 className='center'>No post founds</h2>}
//         </section>

//     )
// }


const Posts = () => {
    const [posts, setPosts] = useState(DUMMY_POSTS);
    return (
        {
            
            <div className="sidebar">
            {
               <div className="LeftSide">
                   <div className="Title-Left">
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
           </div> }
        <div className="container">
             {
            
            <div className="sidebar">
               <div className="LeftSide">
                   <div className="Title-Left">
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
           </div> }
            <div className="main-content">
                <section className="posts">
                    {posts.length > 0 ? (
                        <div className="post__container">
                            {posts.map(({ id, thumbnail, category, title, desc, authorID }) => (
                                <PostItem
                                    key={id}
                                    postID={id}
                                    thumbnail={thumbnail}
                                    category={category}
                                    title={title}
                                    desc={desc}
                                    authorID={authorID}
                                />
                            ))}
                        </div>
                    ) : (
                        <h2 className="center">No posts found</h2>
                    )}
                </section>
            </div>
        </div>
    );
};

export default Posts;


