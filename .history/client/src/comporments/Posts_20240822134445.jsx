import React, { useState } from 'react'
import PostItem from './PostItem'
import { DUMMY_POSTS } from '../data'


const Posts = () => {
    const [posts, setPosts] = useState(DUMMY_POSTS);
    return (
        
        <div className="container">
        <div className="post__container">
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
        </div>
        <div className="sidebar">
          <div className="LeftSide">
            <div .sidebar {
  grid-column: 4 / 5;
  padding: 20px 30px;
  background: #fff;
}

.sidebar .LeftSide {
  display: flex;
  flex-direction: column;
}

.sidebar .LeftSide .Title-Left {
  padding: 20px 30px;
  border-left: 1px solid #2e2e2e;
}

.sidebar .LeftSide .Title-Left h3 {
  font-size: 26px;
  color: #2e2e2e;
}

.sidebar .LeftSide .Title-Left ul {
  margin-top: 20px;
}

.sidebar .LeftSide .Title-Left ul li {
  list-style: none;
  margin-top: 5px;
  color: #2e2e2e;
  font-weight: 600;
  cursor: pointer;
}>
              <h3>Sự kiện</h3>
              <ul>
             
                <li><a href="/su-kien?f=sap-dien-ra" >Sự kiện sắp diễn ra</a></li>
                <li><a href="/su-kien?f=da-dien-ra" >Sự kiện đã diễn ra</a></li>
              
              </ul>
            </div>
          </div>
          <div className="LeftSide">
            <div className="Title-Left">
              <h3>Sự kiện</h3>
              <ul>
             
                <li><a href="/su-kien?f=sap-dien-ra" >Sự kiện sắp diễn ra</a></li>
                <li><a href="/su-kien?f=da-dien-ra" >Sự kiện đã diễn ra</a></li>
              
              </ul>
            </div>
          </div>
          <div className="LeftSide">
            <div className="Title-Left">
              <h3>Sự kiện</h3>
              <ul>
             
                <li><a href="/su-kien?f=sap-dien-ra" >Sự kiện sắp diễn ra</a></li>
                <li><a href="/su-kien?f=da-dien-ra" >Sự kiện đã diễn ra</a></li>
              
              </ul>
            </div>
          </div>
          <div className="LeftSide">
            <div className="Title-Left">
              <h3>Sự kiện</h3>
              <ul>
             
                <li><a href="/su-kien?f=sap-dien-ra" >Sự kiện sắp diễn ra</a></li>
                <li><a href="/su-kien?f=da-dien-ra" >Sự kiện đã diễn ra</a></li>
              
              </ul>
            </div>
          </div>  <div className="LeftSide">
            <div className="Title-Left">
              <h3>Sự kiện</h3>
              <ul>
             
                <li><a href="/su-kien?f=sap-dien-ra" >Sự kiện sắp diễn ra</a></li>
                <li><a href="/su-kien?f=da-dien-ra" >Sự kiện đã diễn ra</a></li>
              
              </ul>
            </div>
          </div>
        </div>
      </div>
      
    );
};

export default Posts;


