// src/components/CreatePostForm.jsx
import React, { useState } from 'react';
import { createPost } from '../services/api';

const CreatePostForm = () => {
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!content.trim()) return;

    try {
      await createPost(content);
      setContent('');
      window.location.href = '/';
    } catch (error) {
      console.error('Ошибка при создании поста:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Напишите ваш пост..."
      />
      <button type="submit">Опубликовать</button>
      <button type="button" onClick={() => window.location.href = '/'}>
        Отмена
      </button>
    </form>
  );
};

export default CreatePostForm;