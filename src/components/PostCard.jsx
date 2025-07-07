import React from 'react';
import { Link } from 'react-router-dom';



const PostCard = ({ post }) => {
  return (
    <div className="post-card">
      <Link to={`/posts/${post.id}`}>
        <p>{post.content}</p>
      </Link>
    </div>
  );
};

export default PostCard;