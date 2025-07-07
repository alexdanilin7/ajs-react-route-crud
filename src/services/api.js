import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const fetchPosts = async () => {
  try {
    const response = await axios.get(`${API_URL}/posts`);
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};

// Получить один пост по ID
export const fetchPostById = async (postId) => {
  try {
    const response = await axios.get(`${API_URL}/posts/${postId}`);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(`Error fetching post with ID ${postId}:`, error);
    throw error;
  }
};

export const createPost = async (content) => {
  try {
    const response = await axios.post(`${API_URL}/posts`, { content });
    return response.data;
  } catch (error) {
    console.error('Error creating post:', error);
    throw error;
  }
};

export const deletePost = async (postId) => {
  try {
    await axios.delete(`${API_URL}/posts/${postId}`);
  } catch (error) {
    console.error('Error deleting post:', error);
    throw error;
  }
};

export const updatePost = async (postId, content) => {
  try {
    await axios.put(`${API_URL}/posts/${postId}`, { content });
  } catch (error) {
    console.error('Error updating post:', error);
    throw error;
  }
};