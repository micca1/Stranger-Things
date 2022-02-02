import React from "react";

const Posts = () => {
  return (
    <>
      <h1>Posts:</h1>

      {Posts.map((post) => (
        <div key={post._id}>
          <h2>{post.title}</h2>
          <p>{post.title}</p>
          <h3>{post.price}</h3>
          <hr></hr>
        </div>
      ))}
    </>
  );
};

export default Posts;
