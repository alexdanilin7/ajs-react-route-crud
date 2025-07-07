// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PostsList from './components/PostsList';
import CreatePostForm from './components/CreatePostForm';
import PostDetails from './components/PostDetails';
import { fetchPosts } from './services/api';

function App() {
  return (
    <Router>
      <div className="app">
        <header>
          <nav className="nav">
            <button onClick={() => window.location.href = '/posts/new'}>Создать пост</button>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<PostsList />} />
          <Route path="/posts/new" element={<CreatePostForm />} />
          <Route path="/posts/:id" element={<PostDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;