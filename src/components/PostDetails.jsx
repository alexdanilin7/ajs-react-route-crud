import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPostById, deletePost, updatePost } from '../services/api';


const PostDetails = () => {
  const { id } = useParams();
  const postId = parseInt(id, 10);
  const [post, setPost] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState('');

 
   useEffect(() => {
    const loadPost = async () => {
      const data = await fetchPostById(id);
      console.log("d", data);
      setPost(data.post);
      setEditedContent(data.content);
    };

    loadPost();
  }, [id]);

  console.log(post);
  const handleDelete = async () => {
    try {
      await deletePost(postId);
      window.location.href = '/';
    } catch (error) {
      console.error('Ошибка при удалении поста:', error);
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
    setEditedContent(post?.content || '');
  };

  const handleSave = async () => {
    try {
      await updatePost(postId, editedContent);
      setPost({ ...post, content: editedContent });
      setIsEditing(false);
    } catch (error) {
      console.error('Ошибка при сохранении изменений:', error);
    }
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedContent('');
  };

  return (
    <div className="post-details">
      {isEditing ? (
        <form>
          <textarea
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
          />
          <button type="button" onClick={handleSave}>
            Сохранить
          </button>
          <button type="button" onClick={handleCancelEdit}>
            Отмена
          </button>
        </form>
      ) : (
        <div>
          <p>{post?.content}</p>
          <button onClick={handleEdit}>Изменить</button>
          <button onClick={handleDelete}>Удалить</button>
        </div>
      )}
    </div>
  );
};

export default PostDetails;