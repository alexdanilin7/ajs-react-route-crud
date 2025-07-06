import React, { useEffect, useState } from 'react';
import { fetchPosts } from '../services/api';
import PostCard from './PostCard';

const PostsList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchInitialData = async () => {
      const data = await fetchPosts();
      setPosts(data);
    };

    fetchInitialData();
  }, []);

  return (
    <div className="posts-list">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};


export default PostsList;