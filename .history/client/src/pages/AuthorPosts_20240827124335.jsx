import React from 'react'

const Authors = () => {
  return (
    <section className="">
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
  )
}

export default Authors
